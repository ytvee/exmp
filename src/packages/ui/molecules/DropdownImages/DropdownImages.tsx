import React, { useState } from 'react';
import { DropdownImagesProps } from './DropdownImages.types';
import styles from './DropdownImages.module.css';
import classNames from 'classnames';
import DropDown from '@molecules/DropDown/DropDown';
import CategoryOptionsList from './CategoryOptionsList';

export const DropdownImages: React.FC<DropdownImagesProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  searchPlaceholder = 'Search...',
  disabled = false,
  searchable = false,
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['public', 'private'];
  const [selectedCategory] = useState<string>(categories[0]);

  const filteredOptions = options.filter(option => {
    const matchesSearch = !searchable || !searchTerm ||
      option.label.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'public' || option.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSelect = (optionValue: string) => {
    if (!disabled) {
      onChange?.(optionValue);
      setIsOpen(false);
      setSearchTerm('');
    }
  };


  const componentClasses = classNames(
    styles['asi-dropdown-images'],
    disabled && styles['asi-dropdown-images--disabled'],
    isOpen && styles['asi-dropdown-images--open'],
    className,
  );




  return (
    <div className={componentClasses} data-testid="dropdown-images">
      <DropDown
        options={filteredOptions}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        defaultOpen={isOpen}
        CategoryOptionsList={
          <CategoryOptionsList
            handleSelect={handleSelect}
            searchable={searchable}
            options={options}
            searchPlaceholder={searchPlaceholder}
            value={value}
          />
        }
        {...props}
      />

    </div>
  );
};

export default DropdownImages;
