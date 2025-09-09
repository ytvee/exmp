import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StatusChip } from './StatusChip';
import '../../../../storybookStyles.css';
import { StatusType } from './StatusChip.types';

const statuses: StatusType[] = ['active', 'rejected', 'pending', 'default', 'private']

const meta: Meta<typeof StatusChip> = {
  title: 'Atoms/StatusChip',
  component: StatusChip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Component for displaying status with an icon and text. Supports three states: active, rejected, pending.',
      },
    },
  },
  argTypes: {
    status: {
      control: { type: 'select' },
      options: statuses,
      description: 'Component status',
    },
    label: {
      control: { type: 'text' },
      description: 'Custom chip label',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS class',
    },
    iconName: {
      description: 'Name for custom icon',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Active: Story = {
  args: {
    status: 'active',
  },
};

export const Rejected: Story = {
  args: {
    status: 'rejected',
  },
};

export const Pending: Story = {
  args: {
    status: 'pending',
  },
};

export const WithCustomLabelAndIcon: Story = {
  args: {
    status: 'active',
    label: 'Running',
    iconName: 'SmartToy'
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className='asi-story-column'>
      {statuses.map(status => (
        <StatusChip key={status} status={status} />  
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All variants of statuses in vertical layout.',
      },
    },
  },
};

export const HorizontalLayout: Story = {
  render: () => (
    <div className='asi-story-row'>
      {statuses.map(status => (
        <StatusChip key={status} status={status} />  
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All variants of statuses in horizontal layout.',
      },
    },
  },
};
