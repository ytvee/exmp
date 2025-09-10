import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ConfigAgentsCard from './ConfigAgentsCard';
import Button from '@atoms/Button/Button';
import Icon from '@atoms/Icon/Icon';

const meta: Meta<typeof ConfigAgentsCard> = {
  title: 'organisms/Cards/ConfigAgentsCard',
  component: ConfigAgentsCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
            'Card that showcases a product, dataset or AI-agent with cover image, key metrics, and author info.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'data-card-1',
    title: 'YieldMax',
    mainImageURL: './YieldMax.png',
    description:
        'A goal agent designed to optimize staking and yield farming, maximizing returns across platforms.',
    additionalButtons: [
      { key: 'btn3', text: 'Button 1', onClick: () => {} },
      { key: 'btn4', text: 'Button 2', onClick: () => {} },
    ],
    status: <Button variant='secondary' startIcon={<Icon name='Android' />}>Basic</Button>,
  },
}

export const WithGradient: Story = {
  args: {
    id: 'data-card-1',
    title: 'YieldMax',
    mainGradient: 'linear-gradient(180deg, #F35D82 0%, #E3D26F 100%)',
    description:
        'A goal agent designed to optimize staking and yield farming, maximizing returns across platforms.',
    additionalButtons: [<div key="gradient-btn"><Button variant='primary' startIcon={<Icon name='Add' />}>Create</Button></div>],
    status: <Button variant='secondary' startIcon={<Icon name='SmartToy' />}>Basic</Button>,
  },
}

export const WithImageTitle: Story = {
  args: {
    id: 'data-card-1',
    title: 'YieldMax',
    mainImageURL: './YieldMax.png',
    imgTitle: 'Coming Soon',
    description:
        'A goal agent designed to optimize staking and yield farming, maximizing returns across platforms.',
    additionalButtons: [<div key="img-title-btn"><Button disabled={true} variant='primary' startIcon={<Icon name='Add' />}>Create</Button></div>],
    status: <Button variant='secondary' startIcon={<Icon name='Rocket' />}>Basic</Button>,
  }
};