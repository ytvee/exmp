import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DropdownImages } from './DropdownImages';
import { Option } from './DropdownImages.types';
import { Icon } from '@atoms/Icon';

const meta: Meta<typeof DropdownImages> = {
  title: 'molecules/DropdownImages',
  component: DropdownImages,
  globals: {
    backgrounds: { value: '#ddd' }
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Dropdown with search, categories and image icons',
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
    searchable: {
      control: { type: 'boolean' },
    },
    onChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<typeof DropdownImages>;

const sampleOptions: Option[] = [
  { icon: <Icon name='SmartToy' />, label: 'Project Alpha', description: 'Main development project', value: 'Alpha', category: 'public' },
  { icon: <Icon name='SmartToy' />, label: 'Project Beta', description: 'Testing environment', value: 'Beta', category: 'public' },
  { icon: <Icon name='SmartToy' />, label: 'Project Epsilon', description: 'Experimental features', value: 'Epsilon', category: 'public' },
  { icon: <Icon name='SmartToy' />, label: 'Project Gamma', description: 'Internal tools', value: 'Gamma', category: 'private' },
  { icon: <Icon name='SmartToy' />, label: 'Project Delta', description: 'Client implementation', value: 'Delta', category: 'private' },
];

export const Default: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Select a project',
    searchable: true,
  },
};

export const WithDefaultValue: Story = {
  args: {
    options: sampleOptions,
    value: 'Alpha',
  },
};

export const EmptyOptions: Story = {
  args: {
    options: [],
    placeholder: 'No projects available',
  },
};
