import React from 'react';
import { motion } from 'framer-motion';

const LOADER_LETTERS = 'LOADING'.split('');
const PROGRESS_BLOCKS = 6;

const blockColors = ['bg-accent-alt', 'bg-accent', 'bg-primary', 'bg-text-primary', 'bg-accent-alt', 'bg-accent'];

const slamLetter = (i) => ({
    hidden: {
        opacity: 0,
        y: 100,
        x: i % 2 === 0 ? -40 : 40,
        rotate: i % 2 === 0 ? -15 : 15,
        scale: 0.5,
    },
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        rotate: 0,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 700,
            damping: 10,
            mass: 0.6,
            delay: 0.15 + i * 0.09,
        },
    },
});

const LoadingScreen = () => {
    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-background overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{
                y: '-100%',
                transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] },
            }}
        >
            <div className="absolute inset-0 grid-bg opacity-60" />

            {/* Slam-in corner blocks */}
            {[
                { className: 'top-8 left-8 bg-accent', rotate: -12 },
                { className: 'top-12 right-10 bg-accent-alt', rotate: 8 },
                { className: 'bottom-16 left-12 bg-primary', rotate: 6 },
                { className: 'bottom-10 right-8 bg-text-primary', rotate: -8 },
            ].map((block, i) => (
                <motion.div
                    key={block.className}
                    className={`absolute w-14 h-14 md:w-20 md:h-20 brutal-border brutal-shadow ${block.className}`}
                    initial={{ scale: 0, rotate: block.rotate * 3, opacity: 0 }}
                    animate={{ scale: 1, rotate: block.rotate, opacity: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 650,
                        damping: 11,
                        delay: i * 0.1,
                    }}
                />
            ))}

            <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
                {/* AR stamp */}
                <motion.div
                    className="bg-accent-alt text-text-primary font-display text-5xl md:text-7xl uppercase px-6 py-2 brutal-border brutal-shadow-lg mb-10"
                    initial={{ scale: 0, rotate: -25, y: -80 }}
                    animate={{
                        scale: 1,
                        rotate: 0,
                        y: 0,
                        boxShadow: [
                            '8px 8px 0 0 #0A0A0A',
                            '14px 14px 0 0 #0A0A0A',
                            '8px 8px 0 0 #0A0A0A',
                        ],
                    }}
                    transition={{
                        scale: { type: 'spring', stiffness: 600, damping: 12 },
                        rotate: { type: 'spring', stiffness: 600, damping: 12 },
                        y: { type: 'spring', stiffness: 600, damping: 12 },
                        boxShadow: { duration: 0.12, repeat: 3, delay: 0.4 },
                    }}
                >
                    <motion.span
                        animate={{ x: [0, 3, -3, 0] }}
                        transition={{ repeat: Infinity, duration: 0.2, repeatDelay: 1.2 }}
                        className="inline-block"
                    >
                        AR
                    </motion.span>
                </motion.div>

                {/* LOADING letter blocks */}
                <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-12">
                    {LOADER_LETTERS.map((letter, i) => (
                        <motion.span
                            key={i}
                            className="font-display text-2xl md:text-4xl uppercase bg-surface brutal-border brutal-shadow-sm px-2 py-1 md:px-3 md:py-1.5 inline-block"
                            initial="hidden"
                            animate="visible"
                            variants={slamLetter(i)}
                            whileHover={{
                                y: -4,
                                rotate: i % 2 === 0 ? -6 : 6,
                                transition: { type: 'spring', stiffness: 800, damping: 8 },
                            }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>

                {/* Progress bar — brutal blocks */}
                <div className="flex gap-2 md:gap-3">
                    {Array.from({ length: PROGRESS_BLOCKS }).map((_, i) => (
                        <motion.div
                            key={i}
                            className={`w-8 md:w-11 h-14 md:h-16 brutal-border origin-bottom ${blockColors[i]}`}
                            initial={{ scaleY: 0, opacity: 0, y: 20 }}
                            animate={{ scaleY: 1, opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring',
                                stiffness: 550,
                                damping: 12,
                                delay: 0.7 + i * 0.12,
                            }}
                        />
                    ))}
                </div>

                {/* Status text */}
                <motion.div
                    className="mt-10 flex items-center gap-3"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.3 }}
                >
                    <motion.span
                        className="w-3 h-3 bg-primary brutal-border"
                        animate={{
                            scale: [1, 1.3, 1],
                            rotate: [0, 90, 0],
                        }}
                        transition={{ repeat: Infinity, duration: 0.5, ease: 'linear' }}
                    />
                    <motion.p
                        className="text-xs md:text-sm font-bold uppercase tracking-[0.35em]"
                        animate={{ opacity: [1, 0.2, 1] }}
                        transition={{ repeat: Infinity, duration: 0.7 }}
                    >
                        Initializing Systems
                    </motion.p>
                </motion.div>
            </div>

            {/* Exit wipe bar */}
            <motion.div
                className="absolute bottom-0 left-0 w-full h-2 bg-text-primary"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 4.2, ease: 'linear' }}
                style={{ originX: 0 }}
            />
        </motion.div>
    );
};

export default LoadingScreen;
