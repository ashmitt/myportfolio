import React from 'react';
import SectionHeading from './SectionHeading';
import TechBadge from './TechBadge';
import { skills } from '../data';

const categories = [
    { key: 'frontend', label: 'Frontend', color: 'bg-accent-alt' },
    { key: 'backend', label: 'Backend', color: 'bg-accent text-white' },
    { key: 'core', label: 'Core Concepts', color: 'bg-surface' },
    { key: 'tools', label: 'Tools', color: 'bg-primary text-white' },
];

const SkillsSection = () => {
    return (
        <section id="skills" className="py-20 md:py-28 px-4 md:px-6 checker-bg">
            <div className="max-w-7xl mx-auto">
                <SectionHeading pretitle="Skills" number="02">
                    Tech Stack &<br />Arsenal
                </SectionHeading>

                <div className="grid md:grid-cols-2 gap-6">
                    {categories.map((cat) => (
                        <div
                            key={cat.key}
                            className={`p-6 md:p-8 brutal-border brutal-shadow ${cat.color} brutal-hover`}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-display text-xl md:text-2xl uppercase">
                                    {cat.label}
                                </h3>
                                <span className="text-xs font-bold opacity-60">
                                    {skills[cat.key].length} items
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills[cat.key].map((skill) => (
                                    <TechBadge key={skill} outline>
                                        {skill}
                                    </TechBadge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
