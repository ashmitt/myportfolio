import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Work' },
    { href: '#contact', label: 'Contact' },
];

const SCROLL_THRESHOLD = 80;
const SCROLL_DELTA = 8;

const Header = () => {
    const lastScrollY = useRef(0);
    const [isAtTop, setIsAtTop] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isCompact = !isAtTop;

    useEffect(() => {
        const onScroll = () => {
            const current = window.scrollY;
            const atTop = current <= SCROLL_THRESHOLD;

            setIsAtTop(atTop);

            if (atTop) {
                setIsVisible(true);
            } else if (current > lastScrollY.current + SCROLL_DELTA) {
                setIsVisible(false);
                setIsMenuOpen(false);
            } else if (current < lastScrollY.current - SCROLL_DELTA) {
                setIsVisible(true);
            }

            lastScrollY.current = current;
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);

    useEffect(() => {
        if (isAtTop) setIsMenuOpen(false);
    }, [isAtTop]);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <motion.header
                className="fixed top-0 w-full z-50 bg-background brutal-border border-t-0 border-x-0 pt-10"
                initial={false}
                animate={{ y: isVisible ? 0 : '-110%' }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
                <nav
                    className={`max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 transition-[padding] duration-300 ${
                        isCompact ? 'py-1.5' : 'py-4'
                    }`}
                >
                    <motion.button
                        type="button"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        animate={{ scale: isCompact ? 0.85 : 1 }}
                        transition={{ duration: 0.2 }}
                        className={`font-display uppercase tracking-tight brutal-hover bg-accent-alt brutal-border brutal-shadow-sm shrink-0 ${
                            isCompact ? 'text-base px-2.5 py-0.5' : 'text-lg md:text-xl px-3 py-1'
                        }`}
                    >
                        AR
                    </motion.button>

                    <AnimatePresence mode="wait">
                        {!isCompact ? (
                            <motion.div
                                key="expanded-nav"
                                initial={{ opacity: 0, x: 16 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 16 }}
                                transition={{ duration: 0.2 }}
                                className="flex items-center gap-2"
                            >
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
                            </motion.div>
                        ) : (
                            <motion.button
                                key="hamburger"
                                type="button"
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 90 }}
                                transition={{ duration: 0.2 }}
                                onClick={() => setIsMenuOpen((open) => !open)}
                                className="w-9 h-9 brutal-border bg-surface brutal-shadow-sm brutal-hover flex items-center justify-center"
                                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                                aria-expanded={isMenuOpen}
                            >
                                {isMenuOpen ? (
                                    <X size={18} strokeWidth={2.5} />
                                ) : (
                                    <Menu size={18} strokeWidth={2.5} />
                                )}
                            </motion.button>
                        )}
                    </AnimatePresence>
                </nav>
            </motion.header>

            <AnimatePresence>
                {isMenuOpen && isCompact && isVisible && (
                    <>
                        <motion.div
                            className="fixed inset-0 z-40 bg-text-primary/30"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={closeMenu}
                        />
                        <motion.nav
                            className="fixed top-[4.75rem] right-4 md:right-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] z-50 bg-surface brutal-border brutal-shadow p-3 min-w-[220px]"
                            initial={{ opacity: 0, y: -12, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -12, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                        >
                            <div className="flex flex-col gap-2">
                                {navLinks.map((link, idx) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        onClick={closeMenu}
                                        initial={{ opacity: 0, x: 12 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="px-4 py-3 text-xs font-bold uppercase tracking-wider brutal-border bg-background brutal-hover"
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
