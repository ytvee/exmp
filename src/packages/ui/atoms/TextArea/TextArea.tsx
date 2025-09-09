import React from 'react';
import styles from './TextArea.module.css';
import { TextAreaProps } from './TextArea.types';

export const TextArea: React.FC<TextAreaProps> = ({
  id,
  name,
  label,
  value,
  onChange,
  placeholder,
  helperText,
  rows = 4,
  disabled = false,
  autoFocus = false,
  error = false,
  className,
}) => {
  const textareaClass = [
    styles['asi-textarea'],
    error && styles['asi-textarea--error'],
    disabled && styles['asi-textarea--disabled'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const labelClass = [
    styles['asi-label'],
    disabled && styles['asi-label--disabled'],
  ]
    .filter(Boolean)
    .join(' ');

  const helperClass = [
    styles['asi-helpertext'],
    disabled && styles['asi-helpertext--disabled'],
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={styles['asi-textareagroup']} data-asi-component="textarea">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        className={textareaClass}
        value={value}
        onChange={(e) => onChange?.(e)}
        placeholder={placeholder}
        disabled={disabled}
        autoFocus={autoFocus}
        rows={rows}
      />
      {helperText && (
        <label htmlFor={id} className={helperClass}>
          {helperText}
        </label>
      )}
    </div>
  );
};

export default React.memo(TextArea);
