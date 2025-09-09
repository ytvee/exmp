import type React from 'react';

export interface FooterItem {
  label: string;
  href: string;
  subItems?: FooterSubItem[];
}

export interface ServiceItem {
  icon: React.ReactNode;
  text: string | React.ReactNode;
}

export interface FooterProps {
  items?: FooterItem[];
  serviceItems?: ServiceItem[];
  isMobile?: boolean;
  variant?: "primary" | "secondary" | "error" | "warning";
  disabled?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
  
  /**
   * Optional className for additional styling
   */
  className?: string
}

export interface FooterSubItem {
  label: string;
  href: string;
}
