import React, { useEffect, useRef } from 'react';
import SectionHeading from './SectionHeading';
import TechBadge from './TechBadge';
import { skills } from '../data';
import { motion } from 'framer-motion';
import { animate, stagger } from 'animejs';

const SkillsSection = () => {
    const sectionRef = useRef(null);
    const lineRef = useRef(null);

    const categories = [
        { key: 'frontend', label: 'Frontend' },
        { key: 'backend', label: 'Backend' },
        { key: 'core', label: 'Core Concepts' },
        { key: 'tools', label: 'Tools' },
    ];

    useEffect(() => {
        if (sectionRef.current) {
            // Staggered entrance for all tech badges
            animate(sectionRef.current.querySelectorAll('.skill-badge-wrapper'), {
                opacity: [0, 1],
                translateY: [20, 0],
                scale: [0.8, 1],
                delay: stagger(40, { start: 300 }),
                easing: 'outQuart',
                duration: 600
            });

            // Animate circuit-like lines in background with floating/flicker effect
            if (lineRef.current) {
                animate(lineRef.current.querySelectorAll('path'), {
                    opacity: [0.1, 0.4, 0.1],
                    translateY: [0, -10, 0],
                    easing: 'easeInOutSine',
                    duration: 3000,
                    delay: stagger(200),
                    loop: true
                });
            }

            // Subtle floating effect for category cards
            animate(sectionRef.current.querySelectorAll('.category-card'), {
                translateY: [-5, 5],
                easing: 'easeInOutQuad',
                duration: 1500,
                delay: stagger(150),
                alternate: true,
                loop: true
            });
        }
    }, []);

    return (
        <section id="skills" ref={sectionRef} className="py-24 px-6 md:py-32 border-t border-text-secondary/10 relative overflow-hidden">
            {/* Abstract Circuit Background */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <svg ref={lineRef} width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-full">
                    <path d="M-50 100H150V250H400V100H600" stroke="#00FFFF" strokeWidth="1" />
                    <path d="M850 500H650V350H400V500H200" stroke="#00FFFF" strokeWidth="1" />
                    <path d="M0 400H100V300H300V450H500V350H800" stroke="#00FFFF" strokeWidth="1" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeading pretitle="Technical Arsenal">Tech Stack & Skills</SectionHeading>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat, idx) => (
                        <div
                            key={cat.key}
                            className="category-card p-8 bg-[#1A222C] border border-text-secondary/10 rounded-2xl hover:border-primary/30 transition-colors shadow-xl"
                        >
                            <h3 className="text-xl font-bold text-white mb-6 tracking-tight">{cat.label}</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills[cat.key].map(skill => (
                                    <div key={skill} className="skill-badge-wrapper opacity-0">
                                        <TechBadge>{skill}</TechBadge>
                                    </div>
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
