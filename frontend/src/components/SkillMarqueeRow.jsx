import React from 'react';
import { motion } from 'framer-motion';

const iconUrl = (slug) => `https://cdn.simpleicons.org/${slug}`;

const SkillMarqueeTile = ({ name, icon }) => (
    <div className="mx-3 shrink-0 flex items-center gap-3 px-4 py-2 bg-surface brutal-border brutal-shadow-sm">
        <div className="w-9 h-9 shrink-0 flex items-center justify-center brutal-border bg-background p-1.5">
            {icon ? (
                <img
                    src={iconUrl(icon)}
                    alt={`${name} logo`}
                    loading="lazy"
                    className="w-full h-full object-contain"
                />
            ) : (
                <span className="font-display text-sm text-text-primary">{name.charAt(0)}</span>
            )}
        </div>
        <span className="text-xs font-bold uppercase tracking-wide text-text-primary whitespace-nowrap">
            {name}
        </span>
    </div>
);

const ConceptMarqueeTile = ({ name }) => (
    <span className="mx-3 shrink-0 px-4 py-2 text-xs font-bold uppercase tracking-wide brutal-border bg-accent-alt text-text-primary brutal-shadow-sm whitespace-nowrap inline-block">
        {name}
    </span>
);

const SkillMarqueeRow = ({ category, reverse = false, speed = 28, index = 0 }) => {
    const items = [...category.skills, ...category.skills];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="brutal-border brutal-shadow overflow-hidden bg-background"
        >
            <div
                className={`flex items-center justify-between px-4 md:px-6 py-3 brutal-border border-x-0 border-t-0 ${category.accent}`}
            >
                <h3 className="font-display text-base md:text-xl uppercase">{category.label}</h3>
                <span
                    className={`text-[10px] md:text-xs font-bold uppercase tracking-widest px-2 py-1 brutal-border ${
                        category.accent.includes('text-white')
                            ? 'bg-white/10 text-white/80'
                            : 'bg-background text-text-secondary'
                    }`}
                >
                    {category.skills.length} items
                </span>
            </div>

            <div className="overflow-hidden py-4 bg-surface group">
                <div
                    className={`flex w-max ${reverse ? 'marquee-reverse' : 'marquee-track'} marquee-pause`}
                    style={{ '--marquee-duration': `${speed}s` }}
                >
                    {items.map((skill, i) =>
                        category.textOnly ? (
                            <ConceptMarqueeTile key={`${skill.name}-${i}`} name={skill.name} />
                        ) : (
                            <SkillMarqueeTile
                                key={`${skill.name}-${i}`}
                                name={skill.name}
                                icon={skill.icon}
                            />
                        )
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default SkillMarqueeRow;
