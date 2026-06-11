import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';
import TechBadge from './TechBadge';

const ProjectCard = ({ project, index = 0 }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const accentColors = ['bg-accent-alt', 'bg-accent text-white', 'bg-primary text-white'];
    const accent = accentColors[index % accentColors.length];

    return (
        <>
            <div
                role="button"
                tabIndex={0}
                onClick={() => setIsModalOpen(true)}
                onKeyDown={(e) => e.key === 'Enter' && setIsModalOpen(true)}
                className={`group w-full brutal-border brutal-shadow cursor-pointer brutal-hover ${accent}`}
            >
                <div className="h-[240px] w-full bg-background relative overflow-hidden brutal-border border-t-0 border-x-0">
                    <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-200"
                    />
                    <div className="absolute top-3 left-3 bg-text-primary text-background px-2 py-1 text-xs font-bold uppercase">
                        0{index + 1}
                    </div>
                </div>

                <div className="p-6 md:p-8">
                    <h3 className="font-display text-xl md:text-2xl uppercase mb-3">
                        {project.title}
                    </h3>
                    <p className={`text-sm mb-5 leading-relaxed line-clamp-2 ${accent.includes('text-white') ? 'text-white/80' : 'text-text-secondary'}`}>
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                        {project.tech.map((t) => (
                            <TechBadge key={t} outline>{t}</TechBadge>
                        ))}
                    </div>

                    <div className="flex justify-between items-center pt-4 brutal-border border-b-0 border-x-0">
                        <span className="text-xs font-bold uppercase tracking-wider">
                            Case Study →
                        </span>
                        <div className="flex gap-3">
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="brutal-hover"
                                    onClick={(e) => e.stopPropagation()}
                                    aria-label="GitHub"
                                >
                                    <Github size={20} strokeWidth={2.5} />
                                </a>
                            )}
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="brutal-hover"
                                    onClick={(e) => e.stopPropagation()}
                                    aria-label="Live site"
                                >
                                    <ExternalLink size={20} strokeWidth={2.5} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            className="absolute inset-0 bg-text-primary/60"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                        />
                        <motion.div
                            className="bg-surface brutal-border brutal-shadow-lg w-full max-w-3xl max-h-[85vh] overflow-y-auto relative z-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="sticky top-0 bg-accent-alt brutal-border border-t-0 border-x-0 p-4 flex justify-between items-center">
                                <h2 className="font-display text-xl md:text-2xl uppercase">
                                    {project.title}
                                </h2>
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="w-10 h-10 brutal-border bg-surface flex items-center justify-center brutal-hover"
                                    aria-label="Close"
                                >
                                    <X size={20} strokeWidth={2.5} />
                                </button>
                            </div>

                            <div className="p-6 md:p-10 space-y-8">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <TechBadge key={t} outline>{t}</TechBadge>
                                    ))}
                                </div>

                                {[
                                    { label: 'Problem', text: project.caseStudy?.problem },
                                    { label: 'Approach', text: project.caseStudy?.approach },
                                    { label: 'Architecture', text: project.caseStudy?.architecture },
                                ].map((section) => (
                                    <div key={section.label}>
                                        <h4 className="inline-block bg-text-primary text-background px-2 py-0.5 text-xs font-bold uppercase tracking-widest mb-3">
                                            {section.label}
                                        </h4>
                                        <p className="text-text-secondary leading-relaxed text-sm">
                                            {section.text}
                                        </p>
                                    </div>
                                ))}

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="p-5 bg-accent-alt brutal-border">
                                        <h4 className="font-bold uppercase text-xs tracking-widest mb-2">Challenges</h4>
                                        <p className="text-sm text-text-secondary leading-relaxed">
                                            {project.caseStudy?.challenges}
                                        </p>
                                    </div>
                                    <div className="p-5 bg-background brutal-border">
                                        <h4 className="font-bold uppercase text-xs tracking-widest mb-2">Future Scope</h4>
                                        <p className="text-sm text-text-secondary leading-relaxed">
                                            {project.caseStudy?.future}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3 pt-4">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-6 py-3 bg-primary text-white font-bold uppercase text-sm brutal-border brutal-shadow-sm brutal-hover"
                                        >
                                            Live Site →
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-6 py-3 bg-surface font-bold uppercase text-sm brutal-border brutal-shadow-sm brutal-hover"
                                        >
                                            GitHub →
                                        </a>
                                    )}
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
