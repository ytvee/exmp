import React from 'react';
import { BadgeProps } from './Badge.types';
import styles from './Badge.module.css';

export const Badge: React.FC<BadgeProps> = ({
    variant = 'blue',
    size = 'small',
    icon,
    iconPlacement = 'end',
    text,
    onClick,
    onIconClick,
    className,
}) => {
    if (text === undefined || text === null || text === '') {
        return null;
    }

    const parsed = typeof text === 'string' && !isNaN(Number(text))
        ? Number(text)
        : text;
    const displayValue =
        typeof parsed === 'number' && parsed >= 9999 ? 9999 : parsed;
    
    const isDoubleDigit = typeof displayValue === 'number' && displayValue >= 10 && displayValue <= 99;
        
    const componentClasses = [
        styles['asi-badge'],
        styles[`asi-badge--${variant}`],
        styles[`asi-badge--${size}`],
        isDoubleDigit ? styles['asi-badge--double-digit'] : '',
        className,
    ].filter(Boolean).join(' ');

    const handleIconClick = (e: React.MouseEvent) => {
        if (onIconClick) {
          e.stopPropagation();
          onIconClick();
        }
    };

    return (
        <div
            className={ componentClasses }
            style={{
                flexDirection: iconPlacement === 'start' ? 'row-reverse' : 'row'
            }}
            data-asi-component="badge"
            onClick={onClick}
        >
            <span className={ styles['asi-badge__text'] }>
                { displayValue.toString() }
            </span>
            {icon && (
                <span className={styles['asi-badge__icon']} onClick={handleIconClick} >
                    {icon}
                </span>
            )}
        </div>
    );
};

export default Badge;
