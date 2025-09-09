import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DropDown } from './DropDown';
import { Icon } from '../../atoms/Icon';
import { StatusChip } from '../../atoms/StatusChip';
import { SelectOption } from './DropDown.types';

const meta: Meta<typeof DropDown> = {
  title: 'molecules/DropDown',
  component: DropDown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'DropDown component with options, labels and optional start icon',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'Visual variant of the dropdown',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the dropdown',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
    error: {
      control: { type: 'boolean' },
      description: 'Error state',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Show required indicator',
    },
    label: {
      control: { type: 'text' },
      description: 'Field label',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    startIcon: {
      control: false,
      description: 'Icon displayed at the start of the dropdown',
    },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof DropDown>;

const options: SelectOption[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2', additionalComponent: <StatusChip /> },
  { value: 'option3', label: 'Option 3', iconName: 'Memory' },
  { value: 'option4', label: 'Option 4 (disabled)', disabled: true },
];

export const Default: Story = {
  args: {
    options,
    variant: 'primary',
    size: 'medium',
    placeholder: 'Select an option',
  },
};

export const WithStartIcon: Story = {
  args: {
    options,
    size: 'medium',
    placeholder: 'Search…',
    startIcon: <Icon name='Search' />,
  },
};

export const WithEndIcon: Story = {
  args: {
    options,
    size: 'medium',
    placeholder: 'Search…',
    isArrowHidden: true,
    endIcon: <Icon name='ArrowRight' />,
  },
};

export const WithHelperText: Story = {
  args: {
    helperText: "Helper text",
    options,
    placeholder: 'DropDown'
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="asi-story-row">
      <DropDown options={options} variant="primary" placeholder="Primary" />
      <DropDown options={options} variant="secondary" placeholder="Secondary" />
    </div>
  ),
};
