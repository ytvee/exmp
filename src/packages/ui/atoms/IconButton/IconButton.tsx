import React from 'react';
import { IconButtonProps } from './IconButton.types';
import { Icon } from '../Icon';
import styles from './IconButton.module.css';

export const IconButton: React.FC<IconButtonProps> = ({
    icon,
    iconName,
    size = 'medium',
    variant = 'default',
    hasBackground = false,
    disabled = false,
    active = false,
    className,
    ...rest
}) => {
  const componentClasses = [
    styles['asi-iconbutton'],
    styles[`asi-iconbutton--${size}`],
    styles[`asi-iconbutton--${variant}`],
    hasBackground && styles['asi-iconbutton--with-background'],
    active && styles['asi-iconbutton--active'],
    disabled && styles['asi-iconbutton--disabled'],
    className,
  ].filter(Boolean).join(' ');

  const iconSize = size === 'large' ? 'lg' : size === 'medium' ? 'md' : 'sm';

  return (
    <button
      type="button"
      className={componentClasses}
      data-asi-component="iconbutton"
      disabled={disabled}
      {...rest}
    >
      {iconName ? (
        <Icon name={iconName} size={iconSize} />
      ) : icon ? (
        icon
      ) : (
        <Icon name="Settings" size={iconSize} />
      )}
    </button>
  );
};

export default IconButton;
