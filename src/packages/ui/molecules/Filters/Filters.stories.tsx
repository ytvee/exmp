import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Filters } from './Filters';
import type { FilterItem } from './Filters.types';
import '../../../../storybookStyles.css';

const sampleFilters: FilterItem[] = [
  { id: '1', label: 'Red' },
  { id: '2', label: 'Blue' },
  { id: '3', label: 'Green' },
];

const meta: Meta<typeof Filters> = {
  title: 'molecules/Filters',
  component: Filters,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Filters component with search input, filter button, and active tags.',
      },
    },
  },
  argTypes: {
    searchPlaceholder: {
      control: 'text',
      description: 'Placeholder text for the search input',
    },
    searchValue: {
      control: 'text',
      description: 'Current search input value',
    },
    onSearchChange: { action: 'search changed' },
    onFilterClick: { action: 'filter clicked' },
    activeFilters: {
      control: 'object',
      description: 'Array of active filters (tags to show)',
    },
    onFilterRemove: { action: 'filter removed' },
    onClearAll: { action: 'clear all' },
    filterButtonText: {
      control: 'text',
      description: 'Text inside the filter button',
    },
    clearAllText: {
      control: 'text',
      description: 'Text inside the clear-all button',
    },
    filterButtonActive: {
      control: 'boolean',
      description: 'Whether the filter button is in active state',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Filters>;

export const Default: Story = {
  args: {
    searchPlaceholder: 'Search…',
    searchValue: '',
    onSearchChange: () => {},
    onFilterClick: () => {},
    activeFilters: [],
    onFilterRemove: () => {},
    onClearAll: undefined,
    filterButtonText: 'Filter',
    clearAllText: 'Clear All',
  },
};

export const WithActiveFilters: Story = {
  render: () => {
    const [filter, setFilter] = useState<FilterItem[]>(sampleFilters);
    const [filterInput, setFilterInput] = useState<string>('');

  const args = {
    ...Default.args,
    searchValue: filterInput,
    activeFilters: filter,
    onClearAll: () => setFilter([]),
    filterButtonText: 'Apply Filters',
    onSearchChange: (filters) => setFilterInput(filters),
    onFilterClick: () => {
      setFilter([...filter, { id: String(++filter.length), label: filterInput}]);
      setFilterInput('');
    },
    onFilterRemove: (filterId: string) => {
      const updateFilter = filter;
      const removingFilter = filter.find(filter => filter.id === filterId);
      const removingFilterIndex = removingFilter ? filter.indexOf(removingFilter) : -1;
      if (removingFilterIndex > -1) {
        updateFilter.splice(removingFilterIndex, 1);
        setFilter([...updateFilter]);
      }
    },
  };

  return <Filters {...args} />
}
};

export const WithActiveFiltersNoClear: Story = {
  args: {
    ...Default.args!,
    searchValue: 'Bl',
    activeFilters: sampleFilters,
    onClearAll: undefined,
  },
};

export const CustomTexts: Story = {
  args: {
    ...Default.args!,
    searchPlaceholder: 'Find items…',
    filterButtonText: 'Search',
    clearAllText: 'Reset',
  },
};

export const ActiveState: Story = {
  args: {
    ...Default.args!,
    filterButtonActive: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="asi-story-column">
      <Filters {...Default.args} />
      <Filters {...CustomTexts.args} />
      <Filters {...ActiveState.args} />
      { WithActiveFilters?.render?.() }
    </div>
  ),
};
