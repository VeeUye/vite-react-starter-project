import React from 'react';
import styles from './styles.module.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
                                           children,
                                           variant = 'primary',
                                           size = 'medium',
                                           fullWidth = false,
                                           className,
                                           ...props
                                       }) => {
    const buttonClasses = [
        styles.button,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
        className
    ].filter(Boolean).join(' ');

    return (
        <button className={buttonClasses} {...props}>
            {children}
        </button>
    );
};

export default Button;