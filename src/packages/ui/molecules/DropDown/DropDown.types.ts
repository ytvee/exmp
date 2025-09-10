import React from 'react';
import { IconName } from '@atoms/Icon/Icon.types';

export type SelectSize = 'small' | 'medium' | 'large';

export type SelectVariant = 'primary' | 'secondary';

export type PopUpPlacement = 'bottom' | 'top';

export interface SelectOption {
  value: string;
  label: string | React.JSX.Element;
  disabled?: boolean;
  iconName?: IconName;
  additionalComponent?: React.ReactNode;
}

export interface DropDownProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onSelect'> {
  /** Available options */
  options: SelectOption[];

  /** Current value */
  value?: string;

  /** Change handler */
  onChange?: (value: string) => void;

  /** Select handler */
  onSelect?: (value: string) => void;

  /** Field label */
  label?: string;

  /** Placeholder text */
  placeholder?: string | React.ReactNode;

  /** Placeholder by default */
  defaultPlaceHolder?: string | React.ReactNode;

  /** Disabled state */
  disabled?: boolean;

  /** Component size */
  size?: SelectSize;

  /** Visual variant */
  variant?: SelectVariant;

  /** Placement of drop downs list */
  popUpPlacement?: PopUpPlacement

  /** Display error state */
  error?: boolean;

  /** Required indicator */
  required?: boolean;

  /** Initial open state */
  defaultOpen?: boolean;

  /** Helper text */
  helperText?: string;

  /** Icon at the start of the control */
  startIcon?: React.ReactNode;

  /** Icon at the start of the control */
  endIcon?: React.ReactNode;

  /** Additional CSS class name */
  className?: string;

  isArrowHidden?: boolean;

  /** Custom trigger element */
  trigger?: React.ReactNode;

  /** Custom options list content */
  CategoryOptionsList?: React.ReactNode;
}
