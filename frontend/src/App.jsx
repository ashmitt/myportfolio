import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './components/Button';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import PrinciplesSection from './components/PrinciplesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';
import { marqueeItems } from './data';

function App() {
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 4200);
        return () => clearTimeout(timer);
    }, []);

    const sectionVariants = {
        hidden: { opacity: 0, y: 16 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.35, ease: 'easeOut' },
        },
    };

    const nameLetters = 'ASHMIT'.split('');

    const brutalLetter = (i) => ({
        hidden: {
            opacity: 0,
            y: 80,
            x: i % 2 === 0 ? -30 : 30,
            rotate: i % 2 === 0 ? -8 : 8,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            rotate: 0,
            transition: {
                type: 'spring',
                stiffness: 650,
                damping: 11,
                mass: 0.7,
                delay: 0.35 + i * 0.07,
            },
        },
    });

    return (
        <div className="min-h-screen bg-background text-text-primary overflow-x-hidden">
            <AnimatePresence mode="wait">
                {isLoading && <LoadingScreen key="loader" />}
            </AnimatePresence>

            {/* Marquee strip */}
            <div className="fixed top-0 w-full z-[60] bg-primary text-white py-2 brutal-border border-t-0 border-x-0 overflow-hidden">
                <div className="flex whitespace-nowrap marquee-track">
                    {[...marqueeItems, ...marqueeItems].map((item, i) => (
                        <span key={i} className="mx-6 text-xs font-bold uppercase tracking-widest">
                            {item} ★
                        </span>
                    ))}
                </div>
            </div>

            <Header />

            <main>
                <section className="min-h-screen flex items-center relative px-4 md:px-6 pt-32 pb-16 grid-bg">
                    <div className="absolute top-32 right-4 md:right-12 w-24 h-24 md:w-32 md:h-32 bg-accent brutal-border brutal-shadow-lg rotate-6 hidden sm:block" />
                    <div className="absolute bottom-20 left-4 md:left-12 w-16 h-16 bg-accent-alt brutal-border brutal-shadow -rotate-12 hidden sm:block" />

                    <div className="max-w-6xl mx-auto w-full relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={!isLoading ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="inline-block bg-text-primary text-background px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] mb-6">
                                Software Engineer — Building & Scaling AI Systems
                            </div>

                            <h1 className="font-display text-[clamp(3rem,12vw,9rem)] uppercase leading-[0.85] tracking-tight mb-6">
                                <span className="inline-flex">
                                    {nameLetters.map((letter, i) => (
                                        <motion.span
                                            key={i}
                                            className="inline-block"
                                            initial="hidden"
                                            animate={!isLoading ? 'visible' : 'hidden'}
                                            variants={brutalLetter(i)}
                                            whileHover={{
                                                y: -6,
                                                rotate: i % 2 === 0 ? -4 : 4,
                                                transition: { type: 'spring', stiffness: 800, damping: 8 },
                                            }}
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </span>
                                <br />
                                <motion.span
                                    className="bg-accent-alt px-2 inline-block brutal-border mt-1"
                                    initial={{ opacity: 0, x: 120, y: 60, rotate: 12, scale: 0.6 }}
                                    animate={!isLoading ? {
                                        opacity: 1,
                                        x: 0,
                                        y: 0,
                                        rotate: 0,
                                        scale: 1,
                                        boxShadow: [
                                            '6px 6px 0 0 #0A0A0A',
                                            '10px 10px 0 0 #0A0A0A',
                                            '6px 6px 0 0 #0A0A0A',
                                        ],
                                    } : {}}
                                    transition={{
                                        opacity: { duration: 0.1, delay: 0.85 },
                                        x: { type: 'spring', stiffness: 700, damping: 10, delay: 0.85 },
                                        y: { type: 'spring', stiffness: 700, damping: 10, delay: 0.85 },
                                        rotate: { type: 'spring', stiffness: 700, damping: 10, delay: 0.85 },
                                        scale: { type: 'spring', stiffness: 700, damping: 10, delay: 0.85 },
                                        boxShadow: { duration: 0.15, repeat: 2, delay: 1.1 },
                                    }}
                                    whileHover={{
                                        x: [0, -6, 6, -3, 0],
                                        rotate: [0, -3, 3, 0],
                                        transition: { duration: 0.25 },
                                    }}
                                >
                                    <motion.span
                                        animate={{ x: [0, 2, -2, 0] }}
                                        transition={{ repeat: Infinity, duration: 0.3, repeatDelay: 4, ease: 'linear' }}
                                        className="inline-block"
                                    >
                                        RAI
                                    </motion.span>
                                </motion.span>
                            </h1>

                            <motion.p
                                className="text-base md:text-lg max-w-xl mb-10 leading-relaxed bg-surface text-text-primary px-5 py-4 brutal-border brutal-shadow-sm"
                                initial={{ opacity: 0, y: 24, x: -16 }}
                                animate={!isLoading ? {
                                    opacity: 1,
                                    y: 0,
                                    x: 0,
                                    boxShadow: '4px 4px 0 0 #0A0A0A',
                                } : {}}
                                transition={{ duration: 0.45, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{
                                    y: -3,
                                    x: -2,
                                    boxShadow: '8px 8px 0 0 #0A0A0A',
                                    transition: { duration: 0.15 },
                                }}
                            >
                                I build scalable web applications and AI-powered systems.
                                From backend architecture to deployment, I focus on
                                performance, reliability, and real-world usability.
                            </motion.p>

                            <div className="flex flex-wrap gap-4">
                                <a href="#projects">
                                    <Button variant="primary" className="px-8 py-4 text-base">
                                        View Work →
                                    </Button>
                                </a>
                                <a href="#contact">
                                    <Button variant="secondary" className="px-8 py-4 text-base">
                                        Get in Touch
                                    </Button>
                                </a>
                            </div>

                            <div className="mt-16 flex flex-wrap gap-3">
                                <span className="px-3 py-1.5 text-xs font-bold uppercase bg-accent-alt brutal-border text-center leading-snug">
                                    Backend<br />Engineering
                                </span>
                                <span className="px-3 py-1.5 text-xs font-bold uppercase bg-accent text-white brutal-border text-center leading-snug">
                                    Scalable<br />Systems
                                </span>
                                <span className="px-3 py-1.5 text-xs font-bold uppercase bg-primary text-white brutal-border text-center leading-snug">
                                    AI Systems<br />Engineering
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-bold text-xs uppercase tracking-widest"
                    >
                        ↓ Scroll
                    </motion.div>
                </section>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={sectionVariants}>
                    <AboutSection />
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={sectionVariants}>
                    <SkillsSection />
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={sectionVariants}>
                    <ProjectsSection />
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={sectionVariants}>
                    <PrinciplesSection />
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={sectionVariants}>
                    <ContactSection />
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}

export default App;
