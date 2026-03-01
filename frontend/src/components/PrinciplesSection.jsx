import React, { useEffect, useRef } from 'react';
import SectionHeading from './SectionHeading';
import { principles } from '../data';
import { motion } from 'framer-motion';
import { animate, stagger } from 'animejs';

const PrinciplesSection = () => {
    const gridRef = useRef(null);

    useEffect(() => {
        // Stunning 'data flow' wave animation on the background grid dots
        if (gridRef.current) {
            animate(gridRef.current.querySelectorAll('.flow-dot'), {
                scale: [
                    { to: 0.1, easing: 'inOutSine', duration: 500 },
                    { to: 1.5, easing: 'inOutQuad', duration: 1200 }
                ],
                opacity: [
                    { to: 0.1, easing: 'inOutSine', duration: 500 },
                    { to: 0.6, easing: 'inOutQuad', duration: 1200 }
                ],
                delay: stagger(100, { grid: [15, 10], from: 'center' }),
                alternate: true,
                loop: true
            });
        }
    }, []);

    // 15 columns x 10 rows = 150 items
    const dots = Array.from({ length: 150 });

    return (
        <section id="principles" className="py-24 px-6 md:py-32 border-t border-text-secondary/10 relative overflow-hidden">
            {/* Anime.js powered Data Grid Background */}
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
                <div
                    ref={gridRef}
                    className="grid grid-cols-[repeat(15,minmax(0,1fr))] gap-4 sm:gap-6 md:gap-8 lg:gap-12 w-[120%] h-[120%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 content-center justify-items-center"
                >
                    {dots.map((_, i) => (
                        <div key={i} className="flow-dot w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary" />
                    ))}
                </div>
            </div>

            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeading pretitle="Engineering Philosophy">How I Think</SectionHeading>

                <div className="grid md:grid-cols-2 gap-8">
                    {principles.map((principle, idx) => (
                        <motion.div
                            key={principle.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 md:p-10 bg-[#121820]/80 backdrop-blur-sm border border-text-secondary/10 rounded-2xl group hover:border-primary/50 transition-colors"
                        >
                            <div className="text-primary font-bold text-2xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity">0{idx + 1}</div>
                            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{principle.title}</h3>
                            <p className="text-text-secondary leading-relaxed">{principle.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PrinciplesSection;
