import React from 'react';
import { TypographyProps } from './Typography.types';
import styles from './Typography.module.css';
import cn from 'classnames';

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  color = 'primary',
  children,
  className = '',
  as,
  ...props
}) => {
  const componentClasses = cn(
    styles['asi-typography'],
    styles[`asi-typography--${variant}`],
    styles[`asi-typography--${color}`],
    className,
  );

  const Component = as || getDefaultElement(variant);

  return (
    <Component
      className={componentClasses}
      data-asi-component="typography"
      data-asi-variant={variant}
      {...props}
    >
      {children}
    </Component>
  );
};

const getDefaultElement = (variant: string): keyof JSX.IntrinsicElements => {
  switch (variant) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return variant as keyof JSX.IntrinsicElements;
    case 'body1':
    case 'body2':
    case 'body3':
    case 'body4':
      return 'p';
    case 'caption':
      return 'span';
    case 'overline':
      return 'span';
    default:
      return 'p';
  }
};

export default Typography; 