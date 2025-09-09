import React from 'react';
import { ButtonProps } from './Button.types';
import styles from './Button.module.css';

export const Button: React.FC<ButtonProps> = ({
    children,
    className = '',
    variant = 'outlined',
    size = 'medium',
    shape = 'rectangle',
    disabled = false,
    loading = false,
    startIcon,
    endIcon,
    width,
    style,
    ...props
}) => {
    const classes = [
        styles['asi-button'],
        styles[`asi-button--${ variant }`],
        styles[`asi-button--${ size }`],
        styles[`asi-button--${ shape }`],
        disabled ? styles['asi-button--disabled'] : '',
        loading ? styles['asi-button--loading'] : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const buttonStyle = {
        ...style,
        ...(width && { width }),
    };

    return (
        <button
            type="button"
            className={ classes }
            data-asi-component="button"
            disabled={ disabled || loading }
            style={ buttonStyle }
            { ...props }
        >
            { loading && (
                <span
                    className={ styles['asi-button__spinner'] }
                    aria-hidden="true"
                />
            ) }
            { startIcon && (
                <span className={ styles['asi-button__start-icon'] }>
                    { startIcon }
                </span>
            ) }
            <span className={ styles['asi-button__content'] }>
                { children }
            </span>
            { endIcon && (
                <span className={ styles['asi-button__end-icon'] }>
                    { endIcon }
                </span>
            ) }
        </button>
    );
};

export default Button;
