import React, { useRef } from 'react';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { projects } from '../data';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github } from 'lucide-react';

const ProjectCardWrapper = ({ children }) => {
    const cardRef = useRef(null);
    const { scrollXProgress } = useScroll({
        target: cardRef,
        offset: ['start end', 'center center', 'end start'],
    });

    const scale = useTransform(scrollXProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
    const opacity = useTransform(scrollXProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

    return (
        <motion.div
            ref={cardRef}
            style={{ scale, opacity }}
            className="snap-center shrink-0 w-[85vw] md:w-[650px] flex justify-center items-center"
        >
            {children}
        </motion.div>
    );
};

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-20 md:py-28 brutal-border border-x-0 bg-surface overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12">
                <SectionHeading pretitle="Work" number="03">
                    Featured<br />Projects
                </SectionHeading>
            </div>

            <div className="relative">
                <div className="flex overflow-x-auto gap-6 md:gap-12 px-[7.5vw] md:px-[calc((100vw-650px)/2)] pb-10 snap-x snap-mandatory no-scrollbar scroll-smooth">
                    {projects.map((project, idx) => (
                        <ProjectCardWrapper key={project.title}>
                            <ProjectCard project={project} index={idx} />
                        </ProjectCardWrapper>
                    ))}

                    <ProjectCardWrapper>
                        <div className="brutal-border brutal-shadow bg-accent-alt w-full min-h-[420px] flex flex-col items-center justify-center p-10 text-center brutal-hover">
                            <div className="w-20 h-20 brutal-border bg-surface flex items-center justify-center mb-6 brutal-shadow-sm">
                                <Github size={36} strokeWidth={2.5} />
                            </div>
                            <h3 className="font-display text-2xl md:text-3xl uppercase mb-4">
                                More on GitHub
                            </h3>
                            <p className="text-sm text-text-secondary mb-8 max-w-xs leading-relaxed">
                                Open-source work, experiments, and side projects live on my profile.
                            </p>
                            <a
                                href="https://github.com/ashmit_rai"
                                target="_blank"
                                rel="noreferrer"
                                className="px-8 py-3 bg-text-primary text-background font-bold uppercase text-sm tracking-wider brutal-border brutal-shadow-sm brutal-hover"
                            >
                                View GitHub →
                            </a>
                        </div>
                    </ProjectCardWrapper>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 mt-6 text-center">
                <span className="inline-block px-4 py-2 bg-background brutal-border text-xs font-bold uppercase tracking-widest">
                    ← Scroll to explore →
                </span>
            </div>
        </section>
    );
};

export default ProjectsSection;
