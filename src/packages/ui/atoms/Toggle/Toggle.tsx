import React from 'react';
import styles from './Toggle.module.css';
import { ToggleProps } from './Toggle.types';
import { Typography } from '../Typography';

const Toggle: React.FC<ToggleProps> = ({
    checked,
    onChange,
    disabled = false,
    label,
    helperText,
    labelPosition = 'right',
    className,
    ...rest
}) => {
    const containerClass = [
        styles['asi-toggle'],
        styles[`asi-toggle--${labelPosition}`],
        checked && styles['asi-toggle--checked'],
        disabled && styles['asi-toggle--disabled'],
        className
    ]
      .filter(Boolean)
      .join(' ');

    const handleClick = () => {
        if (!disabled) {
            onChange(!checked);
        }
    };

    const flexDirection = labelPosition === 'right' ? 'row' : 'row-reverse';

    return (
      <div
        className={containerClass}
        data-asi-component="toggle"
        onClick={handleClick}
        {...rest}
        style={{flexDirection: flexDirection}}
      >
        <div>
          {label && (
            <Typography className={styles['asi-toggle-label']} variant='h5'>
              { label }
            </Typography>
          )}
          {helperText && (
            <Typography variant='body3' color='secondary'>
              { helperText }
            </Typography>
          )}
        </div>

        <div className={styles['asi-toggle-container']}>
          <span className={styles['asi-toggle-circle']} />
        </div>
      </div>
    );
};

Toggle.displayName = 'Toggle';
export { Toggle };
export default React.memo(Toggle);
