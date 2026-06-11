import React from 'react';
import SectionHeading from './SectionHeading';
import { principles } from '../data';
import { motion } from 'framer-motion';

const cardColors = ['bg-surface', 'bg-accent-alt', 'bg-accent text-white', 'bg-primary text-white'];

const PrinciplesSection = () => {
    return (
        <section id="principles" className="py-20 md:py-28 px-4 md:px-6 grid-bg">
            <div className="max-w-7xl mx-auto">
                <SectionHeading pretitle="Philosophy" number="04">
                    How I<br />Think
                </SectionHeading>

                <div className="grid md:grid-cols-2 gap-6">
                    {principles.map((principle, idx) => (
                        <motion.div
                            key={principle.title}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.08, duration: 0.3 }}
                            viewport={{ once: true }}
                            className={`p-6 md:p-8 brutal-border brutal-shadow brutal-hover ${cardColors[idx % cardColors.length]}`}
                        >
                            <span className={`font-display text-4xl block mb-4 leading-none ${cardColors[idx % cardColors.length].includes('text-white') ? 'text-accent-alt' : 'text-primary'}`}>
                                0{idx + 1}
                            </span>
                            <h3 className="font-display text-xl md:text-2xl uppercase mb-3">
                                {principle.title}
                            </h3>
                            <p className={`text-sm leading-relaxed ${cardColors[idx % cardColors.length].includes('text-white') ? 'text-white/80' : 'text-text-secondary'}`}>
                                {principle.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PrinciplesSection;
