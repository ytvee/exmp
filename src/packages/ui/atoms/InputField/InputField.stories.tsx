import type { Meta, StoryObj } from '@storybook/react';
import InputField from './InputField';
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import { ICON_NAMES } from '../Icon/Icon.stories';
import { THelperTextVariant } from './InputField.types';
import React from 'react';

const helperTextVariants: THelperTextVariant[] = ['default', 'error', 'success'];

const listTypeOptions = [
        "button",
        "checkbox",
        "color",
        "date",
        "datetime-local",
        "email",
        "file",
        "hidden",
        "image",
        "month",
        "number",
        "password",
        "radio",
        "range",
        "reset",
        "search",
        "submit",
        "tel",
        "text",
        "time",
        "url",
        "week",
]

const meta: Meta<typeof InputField> = {
  title: 'Atoms/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    type: {
      control: { type: 'select' },
      options: listTypeOptions,
    },
    value: {
      control: { type: 'text' },
    },
    onChange: {
      action: 'onChange',
      description: 'Callback for input changes.',
    },
    placeholder: {
      control: { type: 'text' },
    },
    startIcon: {
      control: { type: 'select' },
      options: ICON_NAMES,
    },
    startIconToolTip: {
      control: { type: 'text' },
    },
    onStartIconClick: {
      action: 'onClick',
      description: 'Callback for input changes.',
    },
    endIcon: {
      control: { type: 'select' },
      options: ICON_NAMES,
    },
    endIconTooltip: {
      control: { type: 'text' },
    },
    endButton: {
      description: 'Button node rendered at the end of the input',
      control: false,
    },
    onEndIconClick: {
      action: 'onClick',
      description: 'Callback for input changes.',
    },
    helperText: {
      control: { type: 'text' },
    },
    helperTextVariant: {
      control: { type: 'select' },
      options: helperTextVariants,
    },
    belowText: {
      description: 'Content rendered below the entire component',
      control: false,
    },
    required: {
      control: { type: 'boolean' },
    },
    autoFocus: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    success: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    helperText: 'Must be at least 8 characters long',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    error: 'Please enter a valid email address',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
  },
};

export const WithStartIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search for something...',
    startIcon: <Icon name='Search' />
  },
};

export const WithEndIcon: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
    endIcon:  <Icon name="Reload" />,
  },
};

export const WithEndButton: Story = {
  args: {
    label: 'URL',
    placeholder: 'Enter URL',
    endButton: <Button variant='primary'>Go</Button>,
  },
};