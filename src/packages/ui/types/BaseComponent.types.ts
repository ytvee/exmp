import React from 'react';

export interface BaseComponentProps {
  className?: string;
  'data-testid'?: string;
  style?: React.CSSProperties;
  [key: string]: unknown;
}

export interface LoadingComponentProps extends BaseComponentProps {
  loading?: boolean;
  loadingText?: string;
}

export interface DisabledComponentProps extends BaseComponentProps {
  disabled?: boolean;
}

export interface SizableComponentProps extends BaseComponentProps {
  size?: 'small' | 'medium' | 'large';
}

export interface VariantComponentProps extends BaseComponentProps {
  variant?: string;
}

export interface ColoredComponentProps extends BaseComponentProps {
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
}

export interface InteractiveComponentProps extends BaseComponentProps {
  onClick?: (event: React.MouseEvent) => void;
  onMouseEnter?: (event: React.MouseEvent) => void;
  onMouseLeave?: (event: React.MouseEvent) => void;
  onFocus?: (event: React.FocusEvent) => void;
  onBlur?: (event: React.FocusEvent) => void;
}

export interface ChildrenComponentProps extends BaseComponentProps {
  children?: React.ReactNode;
}

export interface IdentifiableComponentProps extends BaseComponentProps {
  id?: string;
}

export interface LabeledComponentProps extends BaseComponentProps {
  label?: string;
  htmlFor?: string;
}

export interface PlaceholderComponentProps extends BaseComponentProps {
  placeholder?: string;
}

export interface ValuedComponentProps<T = unknown> extends BaseComponentProps {
  value?: T;
  onChange?: (value: T) => void;
}

export interface IconComponentProps extends BaseComponentProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onStartIconClick?: (event: React.MouseEvent) => void;
  onEndIconClick?: (event: React.MouseEvent) => void;
}

export interface TooltipComponentProps extends BaseComponentProps {
  tooltip?: string;
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
}

export interface AnimatedComponentProps extends BaseComponentProps {
  animated?: boolean;
  animationDuration?: number;
  animationType?: 'fade' | 'slide' | 'scale' | 'rotate';
}

export interface ThemedComponentProps extends BaseComponentProps {
  theme?: 'light' | 'dark' | 'auto';
}

export type ComponentProps<T = Record<string, unknown>> = T & BaseComponentProps;

export type InteractiveComponentPropsType<T = Record<string, unknown>> = T & BaseComponentProps & InteractiveComponentProps;

export type SizableVariantComponentProps<T = Record<string, unknown>> = T & BaseComponentProps & SizableComponentProps & VariantComponentProps; 
