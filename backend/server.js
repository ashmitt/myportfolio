const express = require('express');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
    const origin = req.headers.origin;

    if (origin) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    if (req.method === 'OPTIONS') {
        return res.sendStatus(204);
    }

    next();
});

// Middleware
app.use(express.json());

// Rate Limiting
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 requests per `window` (here, per 15 minutes)
    message: { error: 'Too many requests, please try again later.' }
});

// Validation Helper
const validateContactForm = (req, res, next) => {
    const { name, email, message } = req.body;

    if (!name || name.trim() === '') {
        return res.status(400).json({ error: 'Name is required' });
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        return res.status(400).json({ error: 'A valid email is required' });
    }

    if (!message || message.trim() === '') {
        return res.status(400).json({ error: 'Message is required' });
    }

    // Safe sanitization
    req.body.name = name.trim();
    req.body.email = email.trim();
    req.body.message = message.trim();

    next();
};

app.get('/health', (_req, res) => {
    res.status(200).json({ ok: true, message: 'Backend is running' });
});

// Route
app.post('/api/contact', contactLimiter, validateContactForm, async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE || 'gmail',
            auth: {
                user: process.env.EMAIL_USER,    // your generated email 
                pass: process.env.EMAIL_PASS     // your generated app password
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECEIVER_EMAIL,    // Send the email to yourself
            subject: `New Portfolio Contact from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Message sent successfully!' });

    } catch (error) {
        console.error('Email Sending Error:', error);
        res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    }
});

// Generic Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong on the server.' });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
