import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ children, pretitle, className = '' }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`mb-16 md:mb-24 ${className}`}
        >
            {pretitle && (
                <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
                    {pretitle}
                </span>
            )}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase inline-block border-b-2 border-primary/20 pb-4">
                {children}
            </h2>
        </motion.div>
    );
};

export default SectionHeading;
