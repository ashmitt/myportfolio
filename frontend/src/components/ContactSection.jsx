import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

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
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: 'Message sent successfully!' });
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus({ type: '', message: '' }), 5000);
            } else {
                setStatus({ type: 'error', message: data.error || 'Something went wrong.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Failed to connect to the server.' });
        }
        setLoading(false);
    };

    return (
        <section id="contact" className="py-24 px-6 md:py-32 border-t border-text-secondary/10 relative">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
                <div>
                    <SectionHeading pretitle="Next Steps" className="mb-8">Let's Build Something Meaningful.</SectionHeading>
                    <p className="text-lg text-text-secondary mb-12 max-w-md">
                        I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="space-y-6">
                        <a href="mailto:ashmit@example.com" className="flex items-center gap-4 text-text-secondary hover:text-primary transition-colors w-fit group">
                            <div className="w-12 h-12 rounded-full border border-text-secondary/20 flex items-center justify-center bg-[#1A222C] group-hover:border-primary transition-colors">
                                <Mail size={20} />
                            </div>
                            <span className="text-lg">ashmit@example.com</span>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-text-secondary hover:text-primary transition-colors w-fit group">
                            <div className="w-12 h-12 rounded-full border border-text-secondary/20 flex items-center justify-center bg-[#1A222C] group-hover:border-primary transition-colors">
                                <Linkedin size={20} />
                            </div>
                            <span className="text-lg">LinkedIn</span>
                        </a>
                        <a href="https://github.com/ashmitt" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-text-secondary hover:text-primary transition-colors w-fit group">
                            <div className="w-12 h-12 rounded-full border border-text-secondary/20 flex items-center justify-center bg-[#1A222C] group-hover:border-primary transition-colors">
                                <Github size={20} />
                            </div>
                            <span className="text-lg">GitHub</span>
                        </a>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#1A222C] p-8 md:p-10 rounded-2xl border border-text-secondary/10"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#0B0F14] border border-text-secondary/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#0B0F14] border border-text-secondary/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full bg-[#0B0F14] border border-text-secondary/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? 'Sending...' : 'Start a Conversation'}
                        </Button>

                        {status.message && (
                            <div className={`p-4 rounded-lg mt-4 text-sm font-medium ${status.type === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                                {status.message}
                            </div>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
