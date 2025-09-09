import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TableCard } from './TableCard';
import { Icon } from '../../../atoms/Icon';
import { StatusChip } from '../../../atoms/StatusChip';

const meta: Meta<typeof TableCard> = {
  title: 'organisms/Cards/TableCard',
  component: TableCard,
  parameters: {
    docs: {
      description: {
        component:
            'Card that showcases a product, dataset or AI‑agent with cover image, key metrics, and author info.',
      },
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

const baseAuthor = {
  avatarURL: './avatar.svg',
  name: 'Ben Goertzel',
  createdAt: '5d ago',
};

const table = {
  header: [
        {content: 'first column'},
        {content: <Icon name="Cloud" />}, 
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
}

export const Default: Story = {
  args: {
    id: 'data‑card‑1',
    title: 'YieldMax',
    mainImageURL: './YieldMax.png',
    // description:
    //     'A goal agent designed to optimize staking and yield farming, maximizing returns across platforms.',
    machineStatus: "running",
    table: table,
    author: baseAuthor,
    action: (id: string | number) => console.log(id, 'clicked'),
  },
};