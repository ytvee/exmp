import React from 'react';
import styles from './Slider.module.css';
import { SliderProps } from './Slider.types';

export const Slider: React.FC<SliderProps> = ({
  id,
  label,
  ariaLabel,
  startLabel,
  endLabel,
  step = 1,
  marks = false,
  marksCount = 4,
  min = 0,
  max = 100,
  value,
  variant = 'default',
  colorVariant = "primary",
  disabled = false,
  loading = false,
  children,
  unit,
  className,
  showMinMaxLabels = false,
  steps = 100,
  onWheel,
  onChange,
}) => {
  const componentClasses = [
    styles['asi-slider'],
    styles[`asi-slider--${variant}`],
    styles[`asi-slider--${colorVariant}`],
    disabled && styles['asi-slider--disabled'],
    loading && styles['asi-slider--loading'],
    className,
  ].filter(Boolean).join(' ');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && !loading) {
      onChange(Number(e.target.value));
    }
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    if (!disabled && !loading) {
      const target = e.currentTarget;
      onChange(Number(target.value));
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLInputElement>) => {
    if (!disabled && !loading) {
      onWheel?.(e);
    }
  };

  const safeMin = Number.isFinite(min) ? min : 0;
  const safeMax = Number.isFinite(max) ? max : 100;
  const clampedValue = Math.min(Math.max(value, safeMin), safeMax);
  const denominator = safeMax - safeMin || 1;
  const percentage = ((clampedValue - safeMin) / denominator) * 100;
  const totalSteps = Math.max(1, Math.min(100, steps));
  const stepSize = 100 / totalSteps;
  const pctStep = Math.max(0, Math.min(100, Math.round(percentage / stepSize) * stepSize));
  const progressWidthStyle = pctStep === 0 ? '12px' : `${pctStep}%`;

  const inputId = id || (label ? `slider-${label.replace(/\s+/g, '-')}` : undefined);

  return (
    <div className={componentClasses} data-asi-component="slider">
      {children}
      {label && (
        <label className={styles['asi-slider__label']} htmlFor={inputId}>
          {label}
        </label>
      )}
      <div className={styles['asi-slider__container']}>
        <div className={styles['asi-slider__track']}>
          <div className={styles['asi-slider-background-bar']} />
          <div className={styles['asi-slider-foreground-bar']} style={{ width: progressWidthStyle }} />
          {marks && (
            <div className={styles['asi-slider__marks']} aria-hidden>
              {Array.from({ length: Math.max(2, marksCount) }, (_, i) => (
                <span key={i} className={styles['asi-slider__mark']} />
              ))}
            </div>
          )}
          <input
          type="range"
          min={safeMin}
          max={safeMax}
          value={clampedValue}
          step={step}
          onChange={handleChange}
          onInput={handleInput}
          onWheel={handleWheel}
          disabled={disabled}
          className={styles['asi-slider__input']}
          id={inputId}
          aria-label={label ? undefined : ariaLabel}
          aria-valuemin={safeMin}
          aria-valuemax={safeMax}
          aria-valuenow={clampedValue}
          />
        </div>
        {(showMinMaxLabels || startLabel || endLabel) && (
          <div className={styles['asi-slider__labels-row']} aria-hidden>
            <span className={styles['asi-slider__start-label']}>
              {showMinMaxLabels ? `min ${safeMin}` : startLabel}
            </span>
            <span className={styles['asi-slider__end-label']}>
              {showMinMaxLabels ? `Max ${safeMax}` : endLabel}
            </span>
          </div>
        )}
        {variant === 'withInput' && (
          <div className={styles['asi-slider__value-display']}>
            <span>{clampedValue}{unit}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider; 