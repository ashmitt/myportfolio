import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, ArrowUpRight } from 'lucide-react';
import TechBadge from './TechBadge';

const ProjectCard = ({ project, index = 0 }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const accentPairs = [
        { card: 'bg-accent-alt', label: 'bg-primary text-white' },
        { card: 'bg-accent text-white', label: 'bg-accent-alt text-text-primary' },
    ];
    const { card: cardBg, label: labelBg } = accentPairs[index % accentPairs.length];
    const isWhiteText = cardBg.includes('text-white');

    return (
        <>
            {/* ── Card ─────────────────────────────────────────── */}
            <div className={`group w-full brutal-border brutal-shadow ${cardBg}`}>

                {/* Image block */}
                <div className="relative w-full h-[220px] overflow-hidden brutal-border border-t-0 border-x-0">
                    <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Index badge */}
                    <span className="absolute top-3 left-3 bg-text-primary text-background px-2 py-1 text-xs font-bold uppercase tracking-wider">
                        0{index + 1}
                    </span>
                    {/* Status badge */}
                    <span className={`absolute top-3 right-3 px-2 py-1 text-xs font-bold uppercase tracking-wider brutal-border ${labelBg}`}>
                        {project.status}
                    </span>
                </div>

                {/* Body */}
                <div className="p-6 md:p-8">
                    {/* Title + subtitle */}
                    <div className="mb-4">
                        <p className={`text-xs font-bold uppercase tracking-[0.25em] mb-1 ${isWhiteText ? 'text-white/60' : 'text-text-secondary'}`}>
                            {project.subtitle}
                        </p>
                        <h3 className="font-display text-2xl md:text-3xl uppercase leading-tight">
                            {project.title}
                        </h3>
                    </div>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed mb-5 line-clamp-3 ${isWhiteText ? 'text-white/75' : 'text-text-secondary'}`}>
                        {project.description}
                    </p>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t) => (
                            <TechBadge key={t} outline>{t}</TechBadge>
                        ))}
                    </div>

                    {/* Footer actions */}
                    <div className="flex justify-between items-center pt-4 brutal-border border-b-0 border-x-0">
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(true)}
                            className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider brutal-hover ${isWhiteText ? 'text-white' : 'text-text-primary'}`}
                        >
                            Case Study <ArrowUpRight size={14} strokeWidth={2.5} className="block" />
                        </button>

                        <div className="flex gap-3">
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="brutal-hover"
                                    aria-label="GitHub"
                                >
                                    <Github size={20} strokeWidth={2.5} className="block" />
                                </a>
                            )}
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="brutal-hover"
                                    aria-label="Live site"
                                >
                                    <ExternalLink size={20} strokeWidth={2.5} className="block" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Modal ────────────────────────────────────────── */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-text-primary/70"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                        />

                        {/* Panel */}
                        <motion.div
                            className="bg-background brutal-border brutal-shadow-lg w-full max-w-3xl max-h-[88vh] overflow-y-auto relative z-10"
                            initial={{ opacity: 0, y: 24, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 24, scale: 0.97 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                        >
                            {/* Modal header */}
                            <div className="sticky top-0 z-10 bg-accent-alt brutal-border border-t-0 border-x-0 px-6 py-4 flex justify-between items-center gap-4">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-text-secondary mb-0.5">
                                        {project.subtitle}
                                    </p>
                                    <h2 className="font-display text-xl md:text-2xl uppercase leading-tight">
                                        {project.title}
                                    </h2>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="w-10 h-10 brutal-border bg-surface flex items-center justify-center p-0 leading-none brutal-hover shrink-0"
                                    aria-label="Close"
                                >
                                    <X size={20} strokeWidth={2.5} className="block" />
                                </button>
                            </div>

                            {/* Modal body */}
                            <div className="p-6 md:p-10 space-y-8">
                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <TechBadge key={t} outline>{t}</TechBadge>
                                    ))}
                                </div>

                                {/* Case study sections */}
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

                                {/* Challenges / Future */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="p-5 bg-surface brutal-border">
                                        <h4 className="font-bold uppercase text-xs tracking-widest mb-3">
                                            Challenges
                                        </h4>
                                        <p className="text-sm text-text-secondary leading-relaxed">
                                            {project.caseStudy?.challenges}
                                        </p>
                                    </div>
                                    <div className="p-5 bg-accent-alt brutal-border">
                                        <h4 className="font-bold uppercase text-xs tracking-widest mb-3">
                                            Future Scope
                                        </h4>
                                        <p className="text-sm text-text-secondary leading-relaxed">
                                            {project.caseStudy?.future}
                                        </p>
                                    </div>
                                </div>

                                {/* CTA links */}
                                <div className="flex flex-wrap gap-3 pt-2 brutal-border border-b-0 border-x-0">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold uppercase text-sm brutal-border brutal-shadow-sm brutal-hover"
                                        >
                                            Live Site <ExternalLink size={14} strokeWidth={2.5} className="block" />
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 bg-surface font-bold uppercase text-sm brutal-border brutal-shadow-sm brutal-hover"
                                        >
                                            GitHub <Github size={14} strokeWidth={2.5} className="block" />
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
