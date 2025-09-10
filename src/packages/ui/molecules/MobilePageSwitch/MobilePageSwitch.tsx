import React from 'react';
import styles from './MobilePageSwitch.module.css';
import type { MobilePageSwitchProps } from './MobilePageSwitch.types';
import { Icon } from '@atoms/Icon';

export const MobilePageSwitch: React.FC<MobilePageSwitchProps> = ({
  onPageChange,
  onBackClick,
  className,
  disabled = false,
  children,
}) => {
  const componentClasses = [
    styles['asi-mobile-page-switch'],
    disabled && styles['asi-mobile-page-switch--disabled'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={componentClasses} data-asi-component="mobilepageswitch">
      {children}
      <div className={styles['asi-mobile-page-switch__header']}>
        <button 
          className={styles['asi-mobile-page-switch__back-button']}
          onClick={onBackClick} 
          disabled={disabled}
        >
          <Icon name="ArrowLeft" className={styles['asi-mobile-page-switch__back-icon']} />
          <span className={styles['asi-mobile-page-switch__back-text']}>Back</span>
        </button>
        
        <button 
          className={styles['asi-mobile-page-switch__home-button']}
          onClick={() => onPageChange('home')} 
          disabled={disabled}
        >
          <span className={styles['asi-mobile-page-switch__home-text']}>Home</span>
          <Icon name="ArrowDropDown" className={styles['asi-mobile-page-switch__home-arrow']} />
        </button>
        
        <button 
          className={styles['asi-mobile-page-switch__menu-button']}
          disabled={disabled}
        >
          <Icon name="MoreHoriz" className={styles['asi-mobile-page-switch__menu-icon']} />
        </button>
      </div>
    </div>
  );
};

export default MobilePageSwitch;