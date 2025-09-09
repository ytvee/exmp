import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { Icon } from '../Icon';
import { StatusChip } from '../StatusChip';
import React from 'react';

const meta: Meta<typeof Table> = {
  title: 'atoms/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Table component description',
      },
    },
  },
  argTypes: {
    children: {
      description: 'Content to be rendered inside the component',
      control: false,
    },
    caption: {
      description: 'Table caption text',
      control: 'text',
    },
    header: {
      description: 'Table header rows (array of cell objects)',
      control: 'object',
    },
    body: {
      description: 'Table body rows (2D array of cell objects)',
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    header: [
      { content: 'first column' },
      { content: <StatusChip status="active" label="Running" /> },
    ],
    body: [
      [
        { content: <StatusChip status="active" label="Running" /> },
        { content: <Icon name="Cloud" /> },
      ],
      [
        { content: <Icon name="Cloud" /> },
        { content: 'first column' },
      ],
      [
        { content: 'first column' },
        { content: <StatusChip status="active" label="Running" /> },
      ],
    ],
  },
};

export const WithCaption: Story = {
  args: {
    ...Default.args,
    caption: 'This is a table caption',
  },
};

export const WithoutHeader: Story = {
  args: {
    body: [
      [
        { content: 'first column' },
        { content: 'second column' },
        { content: 'third column' },
      ],
      [
        { content: 'first column' },
        { content: 'second column' },
        { content: 'third column' },
      ],
    ],
  },
};