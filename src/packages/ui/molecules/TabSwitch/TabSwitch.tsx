import React from 'react';
import { TabSwitchProps, TabOption } from './TabSwitch.types';
import styles from './TabSwitch.module.css';
import cn from 'classnames';

export const TabSwitch: React.FC<TabSwitchProps> = ({
  options,
  selected,
  onChange,
  variant = "full",
  colorVariant = "primary",
  disabled = false,
  loading = false,
  children,
  className,
}) => {
  const componentClasses = [
    styles['asi-tab-switch'],
    styles[`asi-tab-switch--${variant}`],
    styles[`asi-tab-switch--${colorVariant}`],
    disabled && styles['asi-tab-switch--disabled'],
    loading && styles['asi-tab-switch--loading'],
    className,
  ].filter(Boolean).join(' ');

  const handleTabClick = (index: number, option: TabOption) => {
    if (!disabled && !loading) {
      onChange?.(index, option);
    }
  };

  return (
    <div className={componentClasses} data-asi-component="tabswitch">
      {children}
      <div className={styles['asi-tab-switch__container']}>
        {options.map((option, index) => (
          <button
            key={index}
            className={cn(styles['asi-tab-switch__tab'],
              index === selected && styles['asi-tab-switch__tab--active'])
            }
            onClick={() => handleTabClick(index, option)}
            disabled={disabled}
          >
            {option.icon}
            <span>{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabSwitch; 