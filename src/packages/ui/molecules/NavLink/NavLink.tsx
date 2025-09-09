import React from 'react';
import styles from './NavLink.module.css';
import { NavLinkProps } from './NavLink.types';

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  isActive = false,
  onClick,
  label,
  icon,
  className,
  children
}) => {
  const componentClasses = [
    styles['asi-navlink'],
    isActive && styles['asi-navlink--active'],
    className,
  ].filter(Boolean).join(' ');

  return (
    <a 
      className={componentClasses} 
      href={href} 
      onClick={onClick}
      data-asi-component="navlink"
    >
      {icon}
      {label || children}
    </a>
  );
};

export default NavLink; 