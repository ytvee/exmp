import type { Meta, StoryObj } from '@storybook/react';
import AvatarGroup from './AvatarGroup';

const meta: Meta<typeof AvatarGroup> = {
  title: 'Organisms/AvatarGroup',
  component: AvatarGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    avatars: {
      control: 'object',
      description: 'Array of avatar image URLs',
    },
    maxVisible: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Maximum number of avatars to display',
    },
    remainingAvatars: {
      control: { type: 'number', min: 0, max: 100 },
      description: 'Number of remaining avatars to show in the +N indicator',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    avatars: [
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    ],
    maxVisible: 5,
    remainingAvatars: 3,
  },
};

export const FewAvatars: Story = {
  args: {
    avatars: [
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    ],
    maxVisible: 5,
    remainingAvatars: 0,
  },
};

export const ManyAvatars: Story = {
  args: {
    avatars: [
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    ],
    maxVisible: 3,
    remainingAvatars: 4,
  },
};

export const LargeRemainingCount: Story = {
  args: {
    avatars: [
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    ],
    maxVisible: 2,
    remainingAvatars: 99,
  },
};

export const SingleAvatar: Story = {
  args: {
    avatars: [
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    ],
    maxVisible: 5,
    remainingAvatars: 0,
  },
};

export const EmptyState: Story = {
  args: {
    avatars: [],
    maxVisible: 5,
    remainingAvatars: 5,
  },
}; 