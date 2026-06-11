import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const socialLinks = [
    { href: 'mailto:ashmitrai0905@gmail.com', icon: Mail, label: 'ashmitrai0905@gmail.com' },
    { href: 'https://linkedin.com/in/ashmit-rai', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://github.com/ashmitt', icon: Github, label: 'GitHub' },
    { href: 'https://instagram.com/ashm1t5', icon: Instagram, label: '@ashm1t5' },
];

const ContactSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: '✓ Message sent! I\'ll get back to you soon.' });
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus({ type: '', message: '' }), 6000);
            } else {
                setStatus({ type: 'error', message: data.error || 'Something went wrong. Try again.' });
            }
        } catch {
            setStatus({
                type: 'error',
                message: 'Server offline — email me directly at ashmitrai0905@gmail.com',
            });
        }
        setLoading(false);
    };

    const inputClass =
        'w-full bg-background brutal-border px-4 py-3 text-text-primary font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 placeholder:text-text-secondary/50 transition-shadow duration-150';

    return (
        <section id="contact" className="py-20 md:py-28 px-4 md:px-6 brutal-border border-x-0 bg-surface">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
                {/* Left col */}
                <div>
                    <SectionHeading pretitle="Contact" number="05" className="mb-8">
                        Let's Build<br />Something.
                    </SectionHeading>
                    <p className="text-text-secondary mb-10 max-w-md leading-relaxed">
                        Open to new opportunities and collaborations. Have a project in mind
                        or just want to say hi? Drop me a message — I reply fast.
                    </p>

                    <div className="space-y-4">
                        {socialLinks.map(({ href, icon: Icon, label }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith('http') ? '_blank' : undefined}
                                rel="noreferrer"
                                className="flex items-center gap-4 group brutal-hover w-fit"
                            >
                                <div className="w-12 h-12 brutal-border bg-accent-alt flex items-center justify-center brutal-shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-100 shrink-0">
                                    <Icon size={20} strokeWidth={2.5} className="block" />
                                </div>
                                <span className="font-bold text-sm uppercase tracking-wider break-all">
                                    {label}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right col — form */}
                <motion.div
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35 }}
                    className="brutal-border brutal-shadow bg-background p-6 md:p-8"
                >
                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                        <div>
                            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled={loading}
                                className={inputClass}
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={loading}
                                className={inputClass}
                                placeholder="you@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                disabled={loading}
                                rows={5}
                                className={`${inputClass} resize-none`}
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <Button type="submit" className="w-full py-4" disabled={loading}>
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <span className="inline-block w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                    Sending...
                                </span>
                            ) : (
                                'Send Message →'
                            )}
                        </Button>

                        <AnimatePresence>
                            {status.message && (
                                <motion.div
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.2 }}
                                    className={`p-4 brutal-border text-sm font-bold uppercase tracking-wide ${
                                        status.type === 'success'
                                            ? 'bg-accent-alt text-text-primary'
                                            : 'bg-primary text-white'
                                    }`}
                                >
                                    {status.message}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
