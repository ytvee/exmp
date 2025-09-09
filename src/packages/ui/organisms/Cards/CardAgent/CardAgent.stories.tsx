import type { Meta, StoryObj } from '@storybook/react';
import { CardAgent } from './CardAgent';
import { CardAgentVariant } from './CardAgent.types';

const meta: Meta<typeof CardAgent> = {
  title: 'Organisms/Cards/CardAgent',
  component: CardAgent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.values(CardAgentVariant),
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'agentOverview',
    title: 'Agent Title',
    content: 'This is the card content for an agent. This is the card content for an agent. This is the card content for an agent. This is the card content for an agent.',
    prefix: 'Agent',
    mainImageURL: './Ellipse_18.png',
    benefits: [
      { type: 'comments', value: '3.8K' },
      { type: 'likes', value: '12K' },
    ],
    author: {
      name: 'Ben Goertzel',
      createdAt: '5d ago',
      avatarURL: './avatar.svg',
    },
    variant: "init",
    action: (id: string) => console.log(id, 'clicked'),
  },
};

export const Landing: Story = {
  args: {
    id: 'agentOverview',
    title: 'Agent Title',
    content: 'This is the card content for an agent. This is the card content for an agent. This is the card content for an agent. This is the card content for an agent.',
    prefix: 'Agent',
    mainImageURL: './Ellipse_18.png',
    benefits: [
      { type: 'comments', value: '3.8K' },
      { type: 'likes', value: '12K' },
    ],
    author: {
      name: 'Ben Goertzel',
      createdAt: '5d ago',
      avatarURL: './avatar.svg',
    },
    variant: "landing",
    action: (id: string) => console.log(id, 'clicked'),
  },
};
