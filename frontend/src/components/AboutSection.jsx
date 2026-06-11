import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const stats = [
    { value: '10+', label: 'Projects Built', accent: 'bg-accent-alt' },
    { value: 'MERN', label: 'Core Stack', accent: 'bg-accent' },
    { value: 'AI & Systems', label: 'Current Focus', accent: 'bg-primary text-white', wide: true },
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
                            I'm a software engineer focused on designing and building scalable applications.
                            My work goes beyond writing code — I care about architecture, system performance,
                            and the end-user experience.
                        </motion.p>
                        <motion.p className="text-base md:text-lg" variants={fadeLeft}>
                            Using the MERN stack and modern tooling, I ship digital products that aren't
                            prototypes — they're production-ready platforms built to last.
                        </motion.p>
                        <motion.a
                            href="/assets/resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            variants={fadeLeft}
                            whileHover={{ x: 4, transition: { duration: 0.15 } }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-3 px-6 py-3 bg-text-primary text-background font-bold uppercase text-sm tracking-wider brutal-border brutal-shadow-sm brutal-hover mt-4"
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

                    <motion.div
                        className="grid grid-cols-2 gap-4"
                        variants={statsContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                    >
                        {stats.map((stat) => (
                            <motion.div
                                key={stat.label}
                                variants={fadeUp}
                                whileHover={{ y: -4, transition: { duration: 0.15 } }}
                                className={`p-6 md:p-8 brutal-border brutal-shadow ${stat.accent} ${stat.wide ? 'col-span-2' : ''} brutal-hover`}
                            >
                                <motion.span
                                    className={`font-display text-3xl md:text-4xl block mb-2 leading-none ${stat.accent.includes('text-white') ? '' : 'text-text-primary'}`}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.35, delay: 0.25 }}
                                >
                                    {stat.value}
                                </motion.span>
                                <span className={`text-xs font-bold uppercase tracking-widest ${stat.accent.includes('text-white') ? 'text-white/80' : 'text-text-secondary'}`}>
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
