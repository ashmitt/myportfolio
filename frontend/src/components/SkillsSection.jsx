import React from 'react';
import SectionHeading from './SectionHeading';
import TechBadge from './TechBadge';
import { skills } from '../data';
import { motion } from 'framer-motion';

const SkillsSection = () => {
    const categories = [
        { key: 'frontend', label: 'Frontend' },
        { key: 'backend', label: 'Backend' },
        { key: 'core', label: 'Core Concepts' },
        { key: 'tools', label: 'Tools' },
    ];

    return (
        <section id="skills" className="py-24 px-6 md:py-32 border-t border-text-secondary/10">
            <div className="max-w-7xl mx-auto">
                <SectionHeading pretitle="Technical Arsenal">Tech Stack & Skills</SectionHeading>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 bg-[#1A222C] border border-text-secondary/10 rounded-2xl hover:border-primary/30 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-white mb-6 tracking-tight">{cat.label}</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills[cat.key].map(skill => (
                                    <TechBadge key={skill}>{skill}</TechBadge>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
