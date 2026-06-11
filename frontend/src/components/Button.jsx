import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-3 font-bold uppercase tracking-wider text-sm brutal-border brutal-shadow-sm brutal-hover inline-block text-center cursor-pointer";

    const variants = {
        primary: "bg-primary text-white border-border hover:bg-primary-hover",
        secondary: "bg-surface text-text-primary",
        accent: "bg-accent-alt text-text-primary",
        ghost: "bg-transparent text-text-primary shadow-none border-transparent underline-offset-4 hover:underline",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
