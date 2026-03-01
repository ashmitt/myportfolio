import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-8 py-4 font-semibold rounded transition-colors duration-300 inline-block text-center";

    const variants = {
        primary: "bg-primary text-background hover:bg-primary-hover shadow-[0_0_15px_rgba(0,255,255,0.15)] hover:shadow-[0_0_25px_rgba(0,255,255,0.4)]",
        secondary: "border border-text-secondary/30 hover:border-primary hover:text-primary backdrop-blur-sm",
        ghost: "text-text-secondary hover:text-primary transition-colors"
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
