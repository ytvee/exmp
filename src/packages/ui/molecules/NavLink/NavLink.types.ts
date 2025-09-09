import React, { ReactNode } from 'react';

export interface NavLinkProps {
  icon: ReactNode;
  label: string;
  href?: string;
  isActive?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  /** Additional CSS class name */
  className?: string;
  /** Children elements */
  children?: ReactNode;
} 