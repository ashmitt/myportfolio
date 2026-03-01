import React from 'react';
import SectionHeading from './SectionHeading';
import { principles } from '../data';
import { motion } from 'framer-motion';

const PrinciplesSection = () => {
    return (
        <section id="principles" className="py-24 px-6 md:py-32 border-t border-text-secondary/10 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

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
