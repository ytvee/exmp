import React, { useId } from 'react';
import styles from './RadioButton.module.css';
import { RadioButtonProps } from './RadioButton.types';
import { Typography } from '../Typography';

const RadioButton: React.FC<RadioButtonProps> = ({
   label,
   value,
   checked,
   disabled = false,
   description,
   variant = 'default',
   onChange,
   className,
}) => {
    const radioId = useId();

    const containerClass = [
        styles['asi-radiobutton'],
        styles[`asi-radiobutton--${ variant }`],
        checked && styles['asi-radiobutton--checked'],
        disabled && styles['asi-radiobutton--disabled'],
        className
    ]
        .filter(Boolean)
        .join(' ');

    const handleClick = () => {
        if (!disabled) {
            onChange(value);
        }
    };

    return (
        <label
            htmlFor={ radioId }
            className={ containerClass }
            data-asi-component="radiobutton"
            onClick={ handleClick }
        >
            <div className={ styles['asi-radiobutton-input-wrapper'] }>
                <input
                    id={ radioId }
                    type="radio"
                    value={ value }
                    checked={ checked }
                    disabled={ disabled }
                    onChange={ () => {
                    } }
                    className={ styles['asi-radiobutton-input'] }
                />
                <span className={ styles['asi-radiobutton-custom'] }>
                    <div className={ styles['asi-radiobutton-custom-icon'] }/>
                </span>
            </div>
            <div className={ styles['asi-radiobutton-content'] }>
                {label && (
                    <Typography className={styles['asi-radiobutton-label']} variant='h5'>
                        { label }
                    </Typography>
                )}
                { description && (
                    <Typography variant='body3' color='secondary'>
                        { description }
                    </Typography>
                )}
            </div>
        </label>
    );
};

RadioButton.displayName = 'RadioButton';
export default React.memo(RadioButton);
