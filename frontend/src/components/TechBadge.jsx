import React from 'react';

const TechBadge = ({ children, outline = false, accent = false }) => {
    if (outline) {
        return (
            <span className="px-2 py-0.5 text-xs font-bold uppercase tracking-wide brutal-border bg-surface text-text-primary">
                {children}
            </span>
        );
    }

    if (accent) {
        return (
            <span className="px-3 py-1.5 text-xs font-bold uppercase tracking-wide bg-accent-alt text-text-primary brutal-border">
                {children}
            </span>
        );
    }

    return (
        <span className="px-3 py-2 text-xs font-bold uppercase tracking-wide bg-surface text-text-primary brutal-border brutal-shadow-sm brutal-hover inline-block">
            {children}
        </span>
    );
};

export default TechBadge;
