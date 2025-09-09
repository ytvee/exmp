import type { Meta, StoryObj } from '@storybook/react';
import { Counter } from './Counter';

const meta: Meta<typeof Counter> = {
  title: 'atoms/Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
  },
  globals: {
    backgrounds: {value: '#ddd'}
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Counter>;

export const Default: Story = {};

export const WithInitialValue: Story = {
  args: { initialValue: 5 },
};

export const CustomStep: Story = {
  args: { step: 10 },
};

export const WithLimits: Story = {
  args: { initialValue: 5, min: 3, max: 6 },
};

export const WithLabel: Story = {
  args: { label: 'Label' },
};
