import React from 'react';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { projects } from '../data';

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-6 md:py-32 border-t border-text-secondary/10">
            <div className="max-w-7xl mx-auto">
                <SectionHeading pretitle="Selected Work">Featured Projects</SectionHeading>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, idx) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
