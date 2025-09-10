import React from 'react';
import styles from './Filters.module.css';
import Badge from '@atoms/Badge/Badge';
import { FiltersProps } from './Filters.types';
import { Icon } from '@atoms/Icon';

export const Filters: React.FC<FiltersProps> = ({
  children,
  searchPlaceholder = 'Search...',
  searchValue,
  onSearchChange,
  onFilterClick,
  activeFilters = [],
  onFilterRemove,
  onClearAll,
  filterButtonText = 'Filter',
  clearAllText = 'Clear All',
  className,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  filterButtonActive = false,
  ...props
}) => {
  const componentClasses = [
    styles['asi-filters'],
    styles[`asi-filters--${variant}`],
    styles[`asi-filters--${size}`],
    disabled && styles['asi-filters--disabled'],
    loading && styles['asi-filters--loading'],
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      className={componentClasses}
      data-asi-component="filters"
      {...props}
    >
      {children}
      <div className={styles['asi-filters__search-bar']}>
        <div className={styles['asi-filters__search-input-wrapper']}>
          <Icon name='Search' className={styles['asi-filters__search-icon']} />
          <input
            id="filters-search"
            name="filters-search"
            value={searchValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSearchChange?.(e.target.value)}
            placeholder={searchPlaceholder}
            className={styles['asi-filters__search-input']}
          />
          <button
            className={[
              styles['asi-filters__filter-button'],
              filterButtonActive && styles['asi-filters__filter-button--active']
            ].filter(Boolean).join(' ')}
            onClick={onFilterClick}
          >
            <Icon name='Filter' className={styles['asi-filters__filter-button-icon']} />
            {filterButtonText}
          </button>
        </div>
      </div>

      {activeFilters.length > 0 && (
        <div className={styles['asi-filters__tags-container']}>
          {onClearAll && (
            <button
              className={styles['asi-filters__clear-all-button']}
              onClick={onClearAll}
            >
              <Icon name='Close' className={styles['asi-filters__clear-all-icon']} />
              {clearAllText}
            </button>
          )}
          {activeFilters.map(filter => (
            <Badge
              key={filter.id}
              text={filter.label}
              variant="gray"
              size="small"
              icon={
                <Icon name='Close' className={styles['asi-filters__tag-clear']} size="sm" />
              }
              onIconClick={
                () => onFilterRemove?.(filter.id)
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Filters;
