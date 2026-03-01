import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 px-6 border-t border-text-secondary/10 bg-[#0B0F14]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-text-secondary text-sm">
                    © {new Date().getFullYear()} Ashmit Rai. All rights reserved.
                </div>

                <div className="flex items-center gap-6">
                    <a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm font-medium">Resume</a>
                    <div className="w-px h-4 bg-text-secondary/30" />
                    <a href="https://github.com/ashmitt" aria-label="Github" className="text-text-secondary hover:text-white transition-colors"><Github size={18} /></a>
                    <a href="https://linkedin.com" aria-label="LinkedIn" className="text-text-secondary hover:text-white transition-colors"><Linkedin size={18} /></a>
                </div>

                <div className="text-text-secondary text-sm group">
                    Built with <span className="text-primary group-hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] transition-all">React</span> & <span className="text-white">Express</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
