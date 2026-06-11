import React from 'react';
import SectionHeading from './SectionHeading';
import SkillMarqueeRow from './SkillMarqueeRow';
import { skillCategories } from '../data/skills';

const marqueeSpeeds = [26, 32, 28, 34, 30, 24, 36];

const SkillsSection = () => {
    return (
        <section id="skills" className="py-20 md:py-28 checker-bg overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12">
                <SectionHeading pretitle="Skills" number="02">
                    Tech Stack &{' '}<br className="md:hidden" />Arsenal
                </SectionHeading>
            </div>

            <div className="space-y-4 md:space-y-5 md:max-w-7xl md:mx-auto md:px-6 lg:px-8">
                {skillCategories.map((category, idx) => (
                    <SkillMarqueeRow
                        key={category.id}
                        category={category}
                        reverse={idx % 2 === 1}
                        speed={marqueeSpeeds[idx % marqueeSpeeds.length]}
                        index={idx}
                    />
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
