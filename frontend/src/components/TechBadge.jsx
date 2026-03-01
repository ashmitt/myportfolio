import React from 'react';

const TechBadge = ({ children, outline = false }) => {
    if (outline) {
        return (
            <span className="px-3 py-1 text-xs border border-primary/20 text-text-secondary rounded-full tracking-wide">
                {children}
            </span>
        );
    }

    return (
        <div className="px-4 py-3 bg-text-secondary/5 border border-text-secondary/10 rounded-lg text-sm text-text-secondary hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all text-center flex items-center justify-center cursor-default group">
            <span className="group-hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] transition-all">
                {children}
            </span>
        </div>
    );
};

export default TechBadge;
