import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 px-4 md:px-6 bg-text-primary text-background brutal-border border-x-0 border-b-0">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="font-display text-lg uppercase tracking-tight">
                        Ashmit Rai © {new Date().getFullYear()}
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href="/assets/resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 bg-accent-alt text-text-primary text-xs font-bold uppercase brutal-border brutal-shadow-sm brutal-hover"
                        >
                            Resume
                        </a>
                        <a
                            href="https://github.com/ashmitt"
                            aria-label="GitHub"
                            className="w-10 h-10 bg-background text-text-primary flex items-center justify-center brutal-border brutal-hover"
                        >
                            <Github size={18} strokeWidth={2.5} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            aria-label="LinkedIn"
                            className="w-10 h-10 bg-background text-text-primary flex items-center justify-center brutal-border brutal-hover"
                        >
                            <Linkedin size={18} strokeWidth={2.5} />
                        </a>
                    </div>

                    <div className="text-xs font-bold uppercase tracking-widest text-background/60">
                        Built with React + Express
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
