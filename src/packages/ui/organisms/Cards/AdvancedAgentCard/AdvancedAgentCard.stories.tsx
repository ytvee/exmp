import type { Meta, StoryObj } from '@storybook/react';
import { AdvancedAgentCard } from './AdvancedAgentCard';

const meta: Meta<typeof AdvancedAgentCard> = {
  title: 'organisms/Cards/AdvancedAgentCard',
  component: AdvancedAgentCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AdvancedAgentCard>;

export const Default: Story = {
  args: {
    avatarSrc: '/avatar.svg',
    title: 'Sophi ExmapleAGI',
    isHosted: true,
    isRunning: true,
    editedAt: '1 days ago',
    space: "Greggle's\nTradeSentinel",
    address: 'test-agent://\nagent1[...]',
    agentsCount: 4,
    componentsCount: 99,
    totalCost: '$0.0109/hr',
    isPrimary: true,
  },
};


