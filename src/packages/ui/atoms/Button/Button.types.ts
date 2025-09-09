import React from 'react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'text'
  | 'danger'
  | 'outlined';

export type ButtonShape = 'rectangle' | 'circle';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Content to be rendered inside the button */
  children?: React.ReactNode;

  /** Additional CSS class name */
  className?: string;

  /** Variant of the button */
  variant?: ButtonVariant;

  /** Size of the button */
  size?: 'small' | 'medium' | 'large';

  /** Shape of the button */
  shape?: ButtonShape;

  /** Whether the button is in loading state */
  loading?: boolean;

  /** Icon to display at the start of the button */
  startIcon?: React.ReactNode;

  /** Icon to display at the end of the button */
  endIcon?: React.ReactNode;

  /** Custom width for the button */
  width?: string;
}
