import React from 'react';
import { CookiesProps } from './Cookies.types';
import styles from './Cookies.module.css';

export const Cookies: React.FC<CookiesProps> = ({ onAccept, onReject, className, ...props }) => (
  <div className={styles['asi-cookies'] + (className ? ` ${className}` : '')} {...props}>
    <div className={styles['asi-cookies__content']}>
      <div className={styles['asi-cookies__text']}>This site uses cookies.</div>
      <div className={styles['asi-cookies__actions']}>
        <button className={styles['asi-cookies__button']} onClick={onReject} type="button">Reject</button>
        <button className={styles['asi-cookies__button']} onClick={onAccept} type="button">Accept</button>
      </div>
    </div>
  </div>
);
