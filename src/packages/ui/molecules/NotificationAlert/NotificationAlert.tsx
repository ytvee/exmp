import React from 'react';
import styles from './NotificationAlert.module.css';
import { NotificationAlertProps } from './NotificationAlert.types';
import { Icon as IconComponent } from '../../atoms/Icon';

export const NotificationAlert: React.FC<NotificationAlertProps> = ({
  variant = "info",
  title,
  description,
  linkText,
  linkHref,
  onClick,
  className,
  children
}) => {
  const componentClasses = [
    styles['asi-notification'],
    styles[`asi-notification--${variant}`],
    className,
  ].filter(Boolean).join(' ');

   const Icon = {
        success: <IconComponent name='CheckCircle' />,
        warning: <IconComponent name='WarningAmber' />,
        info:  <IconComponent name='Info' />,
        error:  <IconComponent name='WarningAmber' />,
    }

  return (
    <div 
      className={componentClasses}
      data-asi-component="notificationalert"
    >
      {Icon[variant]}
      <div className={styles['asi-notification-content-container']}>
        {title && <h4 className={styles['asi-notification-title']}>{title}</h4>}
        {description && <div className={styles['asi-notification-description']}>{description}</div>}
        {children && <div className={styles['asi-notification-content']}>{children}</div>}
        {linkText && (
          <a  className={styles['asi-notification-link']} href={linkHref} onClick={onClick}>
            {linkText}
          </a>
        )}
      </div>
    </div>
  );
};

export default NotificationAlert; 