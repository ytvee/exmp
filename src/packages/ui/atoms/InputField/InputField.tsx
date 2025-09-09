import React, { MouseEvent } from 'react';
import styles from './InputField.module.css';
import { InputFieldProps } from './InputField.types';

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  label,
  required = false,
  type = 'text',
  value,
  onChange,
  placeholder,
  disabled = false,
  autoFocus = false,
  error = false,
  success = false,
  startIcon,
  startIconToolTip,
  onStartIconClick,
  endIcon,
  endIconTooltip,
  endButton,
  onEndIconClick,
  helperText,
  helperTextVariant,
  belowText,
  className,
}) => {
  const containerClass = [
    styles['asi-inputgroup'],
    className
  ]
    .filter(Boolean)
    .join(' ');

  const labelClass = [
    styles['asi-label'],
    disabled && styles['asi-label--disabled'],
  ]
    .filter(Boolean)
    .join(' ');

  const wrapperClass = [
    styles['asi-inputwrapper'],
    startIcon && styles['asi-inputwrapper--hasStartIcon'],
    (endIcon || endButton) && styles['asi-inputwrapper--hasEndIcon'],
  ]
    .filter(Boolean)
    .join(' ');

  const inputClass = [
    styles['asi-input'],
    error && styles['asi-input--error'],
    success && styles['asi-input--success'],
    disabled && styles['asi-input--disabled'],
  ]
    .filter(Boolean)
    .join(' ');

  const helperTextClass = [
    styles['asi-helpertext'],
    disabled && styles['asi-helpertext--disabled'],
    helperTextVariant && styles[`asi-helpertext--${helperTextVariant}`],
  ]
    .filter(Boolean)
    .join(' ');

  const renderIcon = (
    icon: React.ReactNode,
    onClick?: (e: MouseEvent<HTMLDivElement>) => void,
    tooltip?: string,
    position: 'start' | 'end' = 'start'
  ) => (
    <div
      className={[
        styles['asi-iconwrapper'],
        styles[`asi-iconwrapper--${position}`],
        onClick && styles['asi-iconwrapper--clickable'],
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={onClick}
      tabIndex={onClick ? 0 : undefined}
    >
      {icon}
      {tooltip && (
        <div className={styles['asi-tooltip']}>
          <div className={styles['asi-tooltip__text']}>{tooltip}</div>
          <div className={styles['asi-tooltiparrow']} />
        </div>
      )}
    </div>
  );

  return (
    <div
      className={containerClass}
      data-asi-component="inputfield"
    >
      {label && <label htmlFor={id} className={labelClass}>
        {label}
        {required && <span className={styles['asi-label__required']}>*</span>}
      </label>}

      <div className={wrapperClass}>
        {startIcon && renderIcon(startIcon, onStartIconClick, startIconToolTip, 'start')}

        <input
          id={id}
          name={name}
          type={type}
          className={inputClass}
          value={value}
          onChange={(e) => onChange?.(e)}
          placeholder={placeholder}
          disabled={disabled}
          autoFocus={autoFocus}
        />

        {endButton ? (
          <div
            className={[
              styles['asi-buttonwrapper'],
              styles['asi-buttonwrapper--end'],
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {endButton}
          </div>
        ) : (
          endIcon && renderIcon(endIcon, onEndIconClick, endIconTooltip, 'end')
        )}
      </div>

      {helperText && (
        <label htmlFor={id} className={helperTextClass}>
          {helperText}
        </label>
      )}

      {belowText && <div className={styles['asi-belowtext']}>{belowText}</div>}
    </div>
  );
};

InputField.displayName = 'InputField';
export default React.memo(InputField);
