import React from 'react';

export type TypographyVariant = 
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'body1' | 'body2' | 'body3' | 'body4'
  | 'caption' | 'overline';

export type TypographyColor = 
  | 'primary' | 'secondary' | 'tertiary' | 'disabled'
  | 'error' | 'success' | 'warning' | 'info'
  | 'inverse' | 'inverse-secondary' | 'inverse-disabled';

export interface TypographyProps {
  variant?: TypographyVariant;
  color?: TypographyColor;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
}