import type { Meta, StoryObj } from '@storybook/react';
import TextArea from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'atoms/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Textarea with label and helper text.'
      }
    }
  },
  argTypes: {
    id: { control: 'text', description: 'Unique identifier' },
    name: { control: 'text', description: 'Name attribute' },
    label: { control: 'text', description: 'Label text' },
    value: { control: 'text', description: 'Value of the textarea' },
    onChange: { action: 'changed', description: 'Change handler' },
    placeholder: { control: 'text', description: 'Placeholder text' },
    helperText: { control: 'text', description: 'Helper text' },
    disabled: { control: 'boolean', description: 'Disabled state' },
    autoFocus: { control: 'boolean', description: 'Auto focus on mount' },
    error: { control: 'boolean', description: 'Error state' },
  }
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    id: 'textarea-default',
    label: 'Label',
    value: '',
    placeholder: 'Enter text',
  }
};

export const Focused: Story = {
  args: {
    ...Default.args,
    id: 'textarea-focus',
    autoFocus: true,
    placeholder: 'This textarea is focused'
  }
};

export const WithError: Story = {
  args: {
    ...Default.args,
    id: 'textarea-error',
    error: true,
    helperText: 'Helper text'
  }
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    id: 'textarea-disabled',
    disabled: true,
    value: 'Disabled text'
  }
};
