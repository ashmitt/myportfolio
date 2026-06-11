import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const stats = [
    { value: 'CS Undergrad', label: 'Computer Science', accent: 'bg-accent-alt' },
    { value: 'Python Ecosystem', label: 'Core Stack · Django · FastAPI · PostgreSQL', accent: 'bg-accent' },
    { value: 'Backend & AI', label: 'Current Focus', accent: 'bg-primary text-white', wide: true },
];

const textContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

const fadeLeft = {
    hidden: { opacity: 0, x: -28 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.45, ease: 'easeOut' },
    },
};

const statsContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 24, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.4, ease: 'easeOut' },
    },
};

const AboutSection = () => {
    return (
        <section id="about" className="py-20 md:py-28 px-4 md:px-6 brutal-border border-x-0 bg-surface">
            <div className="max-w-7xl mx-auto">
                <SectionHeading pretitle="About" number="01">
                    I build systems,<br />not just websites.
                </SectionHeading>

                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
                    <motion.div
                        className="space-y-6 text-text-secondary leading-relaxed"
                        variants={textContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                    >
                        <motion.p className="text-base md:text-lg" variants={fadeLeft}>
                            Results-driven Software Developer with hands-on experience building and deploying
                            full-stack web applications using Python, Django, React, PostgreSQL, and cloud
                            deployment technologies. Skilled in RESTful API development, CI/CD automation,
                            Docker-based deployments, and backend system design, with a strong focus on writing
                            scalable and maintainable software.
                        </motion.p>
                        <motion.p className="text-base md:text-lg" variants={fadeLeft}>
                            Currently pursuing a B.Tech in Computer Science and Engineering at Swami Vivekananda
                            University (Expected 2028) while expanding expertise in software engineering and
                            AI-powered applications.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 gap-4"
                        variants={statsContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                    >
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={stat.label}
                                variants={fadeUp}
                                whileHover={{ y: -4, transition: { duration: 0.15 } }}
                                className={`p-6 md:p-8 brutal-border brutal-shadow ${stat.accent} ${stat.wide ? 'col-span-2' : ''} brutal-hover`}
                            >
                                <motion.span
                                    className={`font-display text-2xl md:text-4xl block mb-2 leading-tight break-words ${stat.accent.includes('text-white') ? '' : 'text-text-primary'}`}
                                    initial={{ opacity: 0, y: 8 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.35, delay: 0.15 + idx * 0.1 }}
                                >
                                    {stat.value}
                                </motion.span>
                                <motion.span
                                    className={`text-xs font-bold uppercase tracking-widest block ${stat.accent.includes('text-white') ? 'text-white/80' : 'text-text-secondary'}`}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.25 + idx * 0.1 }}
                                >
                                    {stat.label}
                                </motion.span>
                            </motion.div>
                        ))}

                        <motion.a
                            href="/assets/resume.pdf"
                            download="Ashmit_Rai_Resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            variants={fadeUp}
                            whileHover={{ y: -4, transition: { duration: 0.15 } }}
                            whileTap={{ scale: 0.97 }}
                            className="col-span-2 flex items-center justify-center gap-3 px-6 py-4 bg-text-primary text-background font-bold uppercase text-sm tracking-wider brutal-border brutal-shadow brutal-hover"
                        >
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="square"
                                animate={{ y: [0, 3, 0] }}
                                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </motion.svg>
                            Download Resume
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
