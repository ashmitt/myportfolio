import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';
import TechBadge from './TechBadge';

const ProjectCard = ({ project }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <motion.div
                className="group relative bg-[#121820] border border-text-secondary/10 rounded-2xl overflow-hidden cursor-pointer hover:border-primary/50 transition-colors"
                onClick={() => setIsModalOpen(true)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
            >
                <div className="h-[300px] w-full bg-[#1A222C] relative overflow-hidden">
                    {/* Placeholder for project screenshot. To be replaced with actual <img> */}
                    <div className="absolute inset-0 flex items-center justify-center text-text-secondary/30 text-sm group-hover:scale-105 transition-transform duration-700">
                        [16:9 Image Area]
                        <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121820] via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-text-secondary mb-6 line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t) => (
                            <TechBadge key={t} outline>{t}</TechBadge>
                        ))}
                    </div>

                    <div className="flex justify-between items-center pt-6 border-t border-text-secondary/10">
                        <span className="text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">View Case Study →</span>
                        <div className="flex gap-4">
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-white transition-colors" onClick={e => e.stopPropagation()}>
                                    <Github size={20} />
                                </a>
                            )}
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-white transition-colors" onClick={e => e.stopPropagation()}>
                                    <ExternalLink size={20} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Basic Case Study Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                        <motion.div
                            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                        />
                        <motion.div
                            className="bg-[#121820] border border-primary/20 rounded-2xl w-full max-w-4xl max-h-[85vh] overflow-y-auto relative z-10 shadow-2xl"
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-6 right-6 p-2 bg-[#1A222C] rounded-full hover:bg-primary/20 hover:text-primary transition-colors z-20"
                            >
                                <X size={20} />
                            </button>

                            {/* Modal Content */}
                            <div className="p-8 md:p-12">
                                <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map(t => <TechBadge key={t} outline>{t}</TechBadge>)}
                                </div>

                                <div className="space-y-8 text-text-secondary">
                                    <div>
                                        <h4 className="text-white font-semibold text-lg mb-2">Problem Statement</h4>
                                        <p className="leading-relaxed">{project.caseStudy?.problem}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-lg mb-2">Approach</h4>
                                        <p className="leading-relaxed">{project.caseStudy?.approach}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-lg mb-2">Architecture</h4>
                                        <p className="leading-relaxed">{project.caseStudy?.architecture}</p>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="p-6 bg-[#1A222C] rounded-xl border border-text-secondary/10">
                                            <h4 className="text-white font-semibold mb-2">Challenges</h4>
                                            <p className="text-sm leading-relaxed">{project.caseStudy?.challenges}</p>
                                        </div>
                                        <div className="p-6 bg-[#1A222C] rounded-xl border border-text-secondary/10">
                                            <h4 className="text-white font-semibold mb-2">Future Scope</h4>
                                            <p className="text-sm leading-relaxed">{project.caseStudy?.future}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 flex gap-4">
                                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="px-6 py-3 bg-primary text-background font-semibold rounded hover:bg-primary-hover transition-colors inline-block">View Live Site</a>
                                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="px-6 py-3 border border-text-secondary/30 rounded hover:border-primary hover:text-primary transition-colors inline-block">Github Repository</a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProjectCard;
