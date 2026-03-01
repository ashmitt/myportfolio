import React from 'react';
import SectionHeading from './SectionHeading';

const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-6 md:py-32 border-t border-text-secondary/10">
            <div className="max-w-7xl mx-auto">
                <SectionHeading pretitle="About Me">I build systems, not just websites.</SectionHeading>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="text-lg text-text-secondary leading-relaxed space-y-6">
                        <p>
                            I am a software engineer focused on designing and building scalable applications. My focus goes beyond writing code; I care about the underlying architecture, system performance, and the end-user experience.
                        </p>
                        <p>
                            By leveraging the MERN stack and modern tools, I develop digital products that are not just functioning prototypes but production-ready platforms.
                        </p>
                        <div className="pt-4">
                            <a
                                href="/assets/resume.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-primary/50 text-primary hover:bg-primary hover:text-background rounded transition-all font-medium"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                Download Resume
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div className="p-8 bg-[#1A222C] border border-text-secondary/10 rounded-2xl relative group overflow-hidden">
                            <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            <div className="relative z-10">
                                <span className="text-5xl font-bold text-white mb-2 block">10+</span>
                                <span className="text-text-secondary font-medium uppercase tracking-wider text-sm">Projects Built</span>
                            </div>
                        </div>
                        <div className="p-8 bg-[#1A222C] border border-text-secondary/10 rounded-2xl relative group overflow-hidden">
                            <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            <div className="relative z-10">
                                <span className="text-3xl font-bold text-white mb-2 block">MERN</span>
                                <span className="text-text-secondary font-medium uppercase tracking-wider text-sm">Core Stack</span>
                            </div>
                        </div>
                        <div className="p-8 bg-[#1A222C] border border-text-secondary/10 rounded-2xl relative group overflow-hidden col-span-2">
                            <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            <div className="relative z-10 flex justify-between items-center">
                                <div>
                                    <span className="text-xl font-bold text-white mb-1 block">AI & Systems</span>
                                    <span className="text-text-secondary font-medium uppercase tracking-wider text-sm">Current Focus</span>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                                    →
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
