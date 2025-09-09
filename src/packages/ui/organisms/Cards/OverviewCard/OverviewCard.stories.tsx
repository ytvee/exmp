import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OverviewCard } from './OverviewCard';

const meta: Meta<typeof OverviewCard> = {
  title: 'organisms/Cards/OverviewCard',
  component: OverviewCard,
  parameters: {
    docs: {
      description: {
        component:
            'Card that showcases a product, dataset or AI‑agent with cover image, key metrics, and author info.',
      },
    },
  },
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const baseStats = [
    {
        count: 3800,
        text: 'Views',
    },
    {
        count: 121,
        text: 'Likes',
    },
    {
        count: 121,
        text: 'Total views',
    }
];


export const Default: Story = {
  args: {
    id: 'data‑card‑1',
    title: 'YieldMax',
    iconName: "Cloud",
    // description:
    //     'A goal agent designed to optimize staking and yield farming, maximizing returns across platforms.',
    stats: baseStats,
    action: (id: string | number) => console.log(id, 'clicked'),
    buttons: [
      {
        id: 'edit-button',
        label: 'Edit',
        variant: 'text',
        onClick: (id: string | number) => console.log(id, 'clicked'),
      },
    ],
  },
};

export const ManyItems: Story = {
    render: () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            <OverviewCard index={0} {...Default.args} title={Default.args?.title ?? 'Default Title'} />
            <OverviewCard index={1} {...Default.args} title="Another Card" />
            <OverviewCard index={10} {...Default.args} title="Yet Another Card" iconName="Settings" />
        </div>
    ),
}
