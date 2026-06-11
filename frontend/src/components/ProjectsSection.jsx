import React from 'react';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { projects } from '../data';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
            delay: i * 0.12,
        },
    }),
};

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-20 md:py-28 brutal-border border-x-0 bg-surface">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <SectionHeading pretitle="Work" number="03">
                    Featured<br className="md:hidden" /> Projects
                </SectionHeading>

                {/* Project cards — vertical stack on mobile, 2-col grid on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-10">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            custom={idx}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-60px' }}
                            variants={cardVariants}
                        >
                            <ProjectCard project={project} index={idx} />
                        </motion.div>
                    ))}
                </div>

                {/* GitHub CTA card — full width */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
                >
                    <div className="brutal-border brutal-shadow bg-text-primary text-background p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 brutal-hover">
                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 bg-background brutal-border flex items-center justify-center shrink-0">
                                <Github size={28} strokeWidth={2.5} className="block text-text-primary" />
                            </div>
                            <div>
                                <h3 className="font-display text-xl md:text-2xl uppercase leading-tight mb-1">
                                    More on GitHub
                                </h3>
                                <p className="text-sm text-background/60 max-w-sm leading-relaxed">
                                    Open-source work, experiments, and side projects — all live on my profile.
                                </p>
                            </div>
                        </div>
                        <a
                            href="https://github.com/ashmitt"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-7 py-3 bg-accent-alt text-text-primary font-bold uppercase text-sm tracking-wider brutal-border brutal-shadow-sm brutal-hover shrink-0"
                        >
                            View GitHub <ArrowUpRight size={16} strokeWidth={2.5} className="block" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;
