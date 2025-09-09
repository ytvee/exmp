import React from 'react';

/**
 * Represents an individual filter item.
 */
export interface FilterItem {
  /** Unique identifier for the filter */
  id: string;
  /** Display label for the filter */
  label: string;
}

/**
 * Available variants for the Filters component
 */
export type FiltersVariant = 'primary' | 'secondary' | 'error' | 'success' | 'warning';

/**
 * Available sizes for the Filters component
 */
export type FiltersSize = 'small' | 'medium' | 'large';

/**
 * Props for the Filters component
 */
export interface FiltersProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Placeholder text for the search input */
  searchPlaceholder?: string;
  /** Controlled value of the search input */
  searchValue: string;
  /** Handler called when the search input value changes */
  onSearchChange: (value: string) => void;
  /** Handler called when the filter button is clicked */
  onFilterClick: () => void;
  /** Array of active filters to display as tags */
  activeFilters?: FilterItem[];
  /** Handler called when a filter tag's remove icon is clicked */
  onFilterRemove: (id: string) => void;
  /** Handler called when the "Clear All" button is clicked */
  onClearAll?: () => void;
  /** Icon element to render inside the filter button */
  filterButtonIcon?: React.ReactNode;
  /** Text to display inside the filter button */
  filterButtonText?: string;
  /** Text to display on the "Clear All" button */
  clearAllText?: string;
  /** Visual variant of the component */
  variant?: FiltersVariant;
  /** Size of the component */
  size?: FiltersSize;
  /** Whether the component is disabled */
  disabled?: boolean;
  /** Whether the component is in loading state */
  loading?: boolean;
  /** Whether the filter button is in active state */
  filterButtonActive?: boolean;
}
