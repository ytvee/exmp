import React, { useEffect, useRef, useState } from 'react';
import styles from './DropDown.module.css';
import { DropDownProps, SelectOption } from './DropDown.types';
import { Icon } from '@atoms/Icon';
import classNames from 'classnames';
import { Typography } from '@atoms/Typography';
import '@/storybookStyles.css';

export const DropDown: React.FC<DropDownProps> = ({
  options,
  value,
  onChange,
  onSelect,
  label,
  placeholder = 'Select an option',
  disabled = false,
  variant = 'primary',
  error = false,
  required = false,
  defaultOpen = false,
  helperText,
  startIcon,
  endIcon,
  isArrowHidden = false,
  defaultPlaceHolder,
  popUpPlacement = 'bottom',
  CategoryOptionsList,
  className,
  trigger,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [selectedValue, setSelectedValue] = useState(value);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const handleSelect = (optionValue: string) => {
    if (!disabled) {
      setSelectedValue(optionValue);
      onChange?.(optionValue);
      onSelect?.(optionValue);
      setIsOpen(false);
    }
  };

  const selectedOption = options.find((o) => o.value === selectedValue);

  const containerClasses = classNames(
    styles['asi-dropdown'],
    disabled && styles['asi-dropdown--disabled'],
    error && styles['asi-dropdown--error'],
    isOpen && styles['asi-dropdown--open'],
    className,
  );

  const valueClasses = classNames(
    styles['asi-dropdown__value'],
    !selectedOption && styles['placeholder'],
  );

  const labelClasses = classNames(
    styles['asi-label'],
    disabled && styles['asi-label--disabled'],
  );

  const helperClasses = classNames(
    styles['asi-helpertext'],
    disabled && styles['asi-helpertext--disabled'],
  );

  const popUpMenuClasses = classNames(
    styles['asi-dropdown__menu'],
    styles[`asi-dropdown__menu--${popUpPlacement}`],
  );

  const arrowClasses = (arrowType: "up" | "down") => {
    return classNames(
      styles['asi-dropdown-arrow'],
      styles[`asi-dropdown-arrow--${arrowType}`],
      styles[`asi-dropdown-arrow--${popUpPlacement}`],
    )
  }

  const DropDownArrow = () => {
    return <Icon name='ArrowRightOutlined' className={arrowClasses(isOpen ? "up" : "down")} />
  }

  const DropDownOption: React.FC<{ option: SelectOption }> = ({ option }) => (
    <div
      key={option.value}
      onClick={() => !option.disabled && handleSelect(option.value)}
      className={classNames(
        styles['asi-dropdown__option'],
        option.disabled && styles['disabled'],
        selectedValue === option.value &&
        styles['asi-selectvalue'])}
      role="option"
      aria-selected={selectedValue === option.value}
      aria-disabled={option.disabled}
    >
      {option?.iconName && <Icon name={option.iconName} />}
      <Typography variant='h5' color='secondary'>{option.label}</Typography>
      {option?.additionalComponent}
    </div>
  )

  // If trigger is provided, render a custom trigger
  if (trigger) {
    return (
      <div
        ref={wrapperRef}
        className={containerClasses}
        data-asi-component="dropdown"
        {...props}
      >
        <div onClick={() => !disabled && setIsOpen(!isOpen)}>
          {trigger}
        </div>
        {isOpen && !disabled && (
          <div className={popUpMenuClasses} role="listbox">
            {options.map((option) => (
              <DropDownOption key={option.value} option={option} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      ref={wrapperRef}
      className={containerClasses}
      data-asi-component="dropdown"
      {...props}
    >
      {label && (
        <label className={labelClasses}>
          {label}
          {required && (
            <span className={styles['asi-dropdown__required']}>*</span>
          )}
        </label>
      )}
      <div
        className={classNames(styles['asi-select'], styles[`asi-select--${variant}`])}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-labelledby={label}
        aria-required={required}
        aria-invalid={error}
      >
        {startIcon && (
          <div className={styles['asi-dropdown__starticon']}>{startIcon}</div>
        )}
        <div className={valueClasses}>
          {defaultPlaceHolder ? defaultPlaceHolder : selectedOption ? selectedOption.label : placeholder}
        </div>
        {isArrowHidden ? <span>{endIcon}</span> : <DropDownArrow />}
      </div>
      {isOpen && !disabled && (
        <div className={popUpMenuClasses} role="listbox">
          {CategoryOptionsList ? CategoryOptionsList : options.map((option) => (
            <DropDownOption
              key={option.value}
              option={option}
            />
          ))}
        </div>
      )}
      {helperText && !isOpen && (
        <label className={helperClasses}>{helperText}</label>
      )}
    </div>
  );
};

export default DropDown;
