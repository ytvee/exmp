import React from 'react';

export function validateRequiredProps(
  componentName: string,
  props: Record<string, unknown>,
  requiredProps: string[]
): void {
  const missingProps = requiredProps.filter(prop => props[prop] === undefined);
  
  if (missingProps.length > 0) {
    throw new Error(
      `${componentName}: Missing required props: ${missingProps.join(', ')}`
    );
  }
}

export function validatePropTypes(
  componentName: string,
  props: Record<string, unknown>,
  propTypes: Record<string, string[]>
): void {
  const invalidProps: string[] = [];
  
  Object.entries(propTypes).forEach(([propName, allowedValues]) => {
    const value = props[propName];
    if (value !== undefined && !allowedValues.includes(value as string)) {
      invalidProps.push(`${propName}: "${value}" (allowed: ${allowedValues.join(', ')})`);
    }
  });
  
  if (invalidProps.length > 0) {
    throw new Error(
      `${componentName}: Invalid prop values: ${invalidProps.join(', ')}`
    );
  }
}

export function validateSize(
  componentName: string,
  size?: string
): void {
  const allowedSizes = ['small', 'medium', 'large'];
  
  if (size && !allowedSizes.includes(size)) {
    throw new Error(
      `${componentName}: Invalid size "${size}". Allowed sizes: ${allowedSizes.join(', ')}`
    );
  }
}

export function validateColor(
  componentName: string,
  color?: string
): void {
  const allowedColors = ['primary', 'secondary', 'success', 'warning', 'error', 'info'];
  
  if (color && !allowedColors.includes(color)) {
    throw new Error(
      `${componentName}: Invalid color "${color}". Allowed colors: ${allowedColors.join(', ')}`
    );
  }
}

export function validateVariant(
  componentName: string,
  variant?: string,
  allowedVariants: string[] = []
): void {
  if (variant && allowedVariants.length > 0 && !allowedVariants.includes(variant)) {
    throw new Error(
      `${componentName}: Invalid variant "${variant}". Allowed variants: ${allowedVariants.join(', ')}`
    );
  }
}

export function validateId(
  componentName: string,
  id?: string
): void {
  if (id && typeof id !== 'string') {
    throw new Error(`${componentName}: ID must be a string`);
  }
  
  if (id && id.trim() === '') {
    throw new Error(`${componentName}: ID cannot be empty`);
  }
}

export function validateClassName(
  componentName: string,
  className?: string
): void {
  if (className && typeof className !== 'string') {
    throw new Error(`${componentName}: className must be a string`);
  }
}

type EventHandler = ((...args: unknown[]) => void) | undefined;

export function validateEventHandlers(
  componentName: string,
  handlers: Record<string, EventHandler>
): void {
  Object.entries(handlers).forEach(([handlerName, handler]) => {
    if (handler && typeof handler !== 'function') {
      throw new Error(`${componentName}: ${handlerName} must be a function`);
    }
  });
}

export function validateChildren(
  componentName: string,
  children?: React.ReactNode
): void {
  if (children === undefined) {
    return;
  }
}

export function validateStyle(
  componentName: string,
  style?: React.CSSProperties
): void {
  if (style && typeof style !== 'object') {
    throw new Error(`${componentName}: style must be an object`);
  }
}

export function validateComponentProps(
  componentName: string,
  props: Record<string, unknown>,
  options: {
    required?: string[];
    propTypes?: Record<string, string[]>;
    allowedVariants?: string[];
  } = {}
): void {
  const { required = [], propTypes = {}, allowedVariants = [] } = options;
  
  validateRequiredProps(componentName, props, required);
  
  validatePropTypes(componentName, props, propTypes);
  
  validateSize(componentName, props.size as string | undefined);
  
  validateColor(componentName, props.color as string | undefined);
  
  validateVariant(componentName, props.variant as string | undefined, allowedVariants);
  
  validateId(componentName, props.id as string | undefined);
  
  validateClassName(componentName, props.className as string | undefined);
  
  validateEventHandlers(componentName, {
    onClick: props.onClick as EventHandler,
    onMouseEnter: props.onMouseEnter as EventHandler,
    onMouseLeave: props.onMouseLeave as EventHandler,
    onFocus: props.onFocus as EventHandler,
    onBlur: props.onBlur as EventHandler,
    onChange: props.onChange as EventHandler,
  });
  
  validateChildren(componentName, props.children as React.ReactNode);
  
  validateStyle(componentName, props.style as React.CSSProperties | undefined);
}

export function warnInDevelopment(
  componentName: string,
  message: string
): void {
  if (process.env.NODE_ENV === 'development') {
    console.warn(`[${componentName}] ${message}`);
  }
}

export function errorInDevelopment(
  componentName: string,
  message: string
): void {
  if (process.env.NODE_ENV === 'development') {
    console.error(`[${componentName}] ${message}`);
  }
} 