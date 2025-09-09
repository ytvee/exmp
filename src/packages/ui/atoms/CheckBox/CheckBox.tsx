import React, { ChangeEvent } from 'react';
import { CheckBoxProps } from './CheckBox.types';
import styles from './CheckBox.module.css';
import { Icon } from '../Icon';
import { Typography } from '../Typography';

const CheckBox: React.FC<CheckBoxProps> = ({
   id,
   label,
   description,
   checked = false,
   disabled = false,
   onChange,
   variant = 'default',
   size = 'medium',
   loading = false,
   className,
}) => {
    const containerClass = [
        styles['asi-checkbox'],
        styles[`asi-checkbox--${ variant }`],
        styles[`asi-checkbox--${ size }`],
        checked && styles['asi-checkbox--checked'],
        disabled && styles['asi-checkbox--disabled'],
        loading && styles['asi-checkbox--loading'],
        description && styles['asi-checkbox--with-description'],
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (disabled) return;
        onChange?.(e.target.checked);
    };

    return (
        <label htmlFor={ id } className={ containerClass } data-asi-component="checkbox">
            <input
                id={ id }
                type="checkbox"
                checked={ checked }
                disabled={ disabled }
                onChange={ (e) => handleChange(e) }
                className={ styles['asi-checkbox-input'] }
            />
            <span className={ styles['asi-checkbox-custom'] }>
                { checked && <div className={styles['asi-checkbox__checked-icon-wrapper']}>
                    <Icon name='Checked' size='xs' className={styles['asi-checkbox__checked-icon']}/>
                </div>
                }
            </span>
            <div className={ styles['asi-checkbox-content'] }>
                <Typography className={styles['asi-checkbox-content-title']} variant='h5'>{ label }</Typography>
                { description && (
                    <div className={styles['asi-checkbox-description']}>
                        { description }
                    </div>
                ) }
            </div>
        </label>
    );
};

CheckBox.displayName = 'CheckBox';
export default CheckBox;
