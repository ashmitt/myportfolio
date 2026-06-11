import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ children, pretitle, className = '', number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.3 }}
            className={`mb-12 md:mb-16 ${className}`}
        >
            <div className="flex items-start gap-4 mb-4">
                {number && (
                    <span className="font-display text-5xl md:text-6xl text-primary leading-none">
                        {number}
                    </span>
                )}
                <div>
                    {pretitle && (
                        <span className="inline-block bg-text-primary text-background px-3 py-1 text-xs font-bold uppercase tracking-widest mb-3">
                            {pretitle}
                        </span>
                    )}
                    <h2 className="font-display text-3xl md:text-5xl lg:text-6xl uppercase leading-[0.95] tracking-tight">
                        {children}
                    </h2>
                </div>
            </div>
            <div className="h-1 bg-text-primary w-full max-w-xs" />
        </motion.div>
    );
};

export default SectionHeading;
