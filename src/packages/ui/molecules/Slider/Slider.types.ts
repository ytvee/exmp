import React from 'react';

export type TVariant = 'default' | 'barOnly' | 'withInput';
export type TColorVariant = "primary" | "secondary" | "error" | "warning";

export interface SliderProps {
  /** Optional id for the input element */
  id?: string;
  /** Label displayed above the slider */
  label?: string;
  /** Aria label if no visible label provided */
  ariaLabel?: string;

  startLabel?: string;
  endLabel?: string;
  step?: number;
  /** Show tick marks along the bar */
  marks?: boolean;
  /** Number of equal-spaced marks (excluding ends). Default: 4 */
  marksCount?: number;

  /** Minimum value of the slider */
  min?: number;

  /** Maximum value of the slider */
  max?: number;

  /** Current value of the slider */
  value: number;

  /** Callback fired when the slider value changes */
  onChange: (value: number) => void;

  /** Visual variant of the slider */
  variant?: TVariant;

  /** Color variant of the component */
  colorVariant?: TColorVariant;

  /** Disabled state */
  disabled?: boolean;

  /** Loading state */
  loading?: boolean;

  /** Children content */
  children?: React.ReactNode;

  /** Callback fired on mouse wheel event */
  onWheel?: (e: React.WheelEvent<HTMLInputElement>) => void;

  /** Unit displayed next to the value */
  unit?: string;

  /** Show textual min/max labels under the bar */
  showMinMaxLabels?: boolean;

  /**
   * Number of visual progress steps (default 100 → 1%).
   * Используется только для ширины прогресс-бара (классы p0..p100),
   * не влияет на реальный step инпута.
   */
  steps?: number;

  /** Additional CSS class name */
  className?: string;
} 