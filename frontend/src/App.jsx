import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './components/Button';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import PrinciplesSection from './components/PrinciplesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { marqueeItems } from './data';

function App() {
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 600);
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

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Work' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <div className="min-h-screen bg-background text-text-primary overflow-x-hidden">
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center gap-6"
                    >
                        <div className="w-16 h-16 brutal-border bg-accent-alt brutal-shadow animate-pulse" />
                        <span className="font-display text-2xl uppercase tracking-tight">Loading</span>
                    </motion.div>
                )}
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

            <header className="pt-10 px-4 md:px-6 fixed top-0 w-full z-50 bg-background brutal-border border-t-0 border-x-0">
                <nav className="max-w-7xl mx-auto flex justify-between items-center py-4">
                    <button
                        type="button"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="font-display text-lg md:text-xl uppercase tracking-tight brutal-hover bg-accent-alt px-3 py-1 brutal-border brutal-shadow-sm"
                    >
                        AR
                    </button>
                    <div className="hidden md:flex gap-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 text-xs font-bold uppercase tracking-wider brutal-border bg-surface brutal-shadow-sm brutal-hover"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <a
                        href="#contact"
                        className="md:hidden px-3 py-2 text-xs font-bold uppercase brutal-border bg-primary text-white brutal-shadow-sm"
                    >
                        Hire Me
                    </a>
                </nav>
            </header>

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
                                Ashmit
                                <br />
                                <span className="bg-accent-alt px-2 inline-block brutal-border mt-1">Rai</span>
                            </h1>

                            <p className="text-base md:text-xl max-w-xl mb-10 leading-relaxed border-l-4 border-primary pl-4">
                                
                                I build scalable web applications and AI-powered systems.
                                From backend architecture to deployment, I focus on
                                performance, reliability, and real-world usability.
                            </p>

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
