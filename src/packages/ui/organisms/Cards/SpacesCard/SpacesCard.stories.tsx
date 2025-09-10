import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SpacesCard } from './SpacesCard';
import type { SpacesCardProps, DataCardAuthor, SpacesCardBenefits } from './SpacesCard.types';
import type { TableProps } from '@atoms/Table';
import StatusChip from '@atoms/StatusChip/StatusChip';

const meta: Meta<typeof SpacesCard> = {
  title: 'organisms/Cards/SpacesCard',
  component: SpacesCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
            'Card that showcases a product, dataset or AI-agent with cover image, key metrics, and author info.',
      },
    },
  },
  argTypes: {
    action: { action: 'card clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const baseBenefits: SpacesCardBenefits = {
  count: 3800,
  label: 'views',
  amount: 1300,
  likes: 0,
};

const likesBenefits: SpacesCardBenefits = {
  ...baseBenefits,
  likes: 250,
  isLiked: true,
  onLikeClick: () => console.log('click on like')
};

const baseAuthor: DataCardAuthor = {
  avatarURL: './avatar.svg',
  name: 'Ben Goertzel',
  createdAt: '5d ago',
};

const table: TableProps = {
  header: [
    {content: <StatusChip status={'active'} label={'Published'} />}, 
    {content: 'Edited 1 days ago'}],
  body: [
    [{ content:  '4 agents'}, { content: '4 datasets' }],
    [{ content: '4 agents' }, { content: '4 datasets' }],
  ],
  caption: undefined,
};

const emptyTable: TableProps = {
  header: [],
  body: [],
  caption: undefined,
};

export const Default: Story = {
  args: {
    id: 'data-card-1',
    title: 'YieldMax',
    mainImageURL: './YieldMax.png',
    description:
        'A goal agent designed to optimize staking and yield farming, maximizing returns across platforms.',
    benefits: baseBenefits,
    isActiveBenefits: true,
    withTableStub: false,
    table: table,
    author: baseAuthor,
    action: (id: string | number) => console.log(id, 'clicked'),
  } as SpacesCardProps,
};

export const DocumentationCard: Story = {
  args: {
    id: 'data-card-1',
    title: 'YieldMax',
    description:
        'A goal agent designed to optimize staking and yield farming, maximizing returns across platforms.',
    withTableStub: false,
    benefits: baseBenefits,
    additionalButtons: [
      {
        variant: 'text' as const,
        label: 'Edit',
        onClick: (id: string | number) => console.log(id, 'clicked'),
      },
    ],
  } as Partial<SpacesCardProps> & { id: string | number; withTableStub: boolean; table: TableProps },
};

export const SubtitleCard: Story = {
  args: {
    id: 'data-card-1',
    mainImageURL: './YieldMax.png',
    subtitle: 'YieldMax',
    description:
        'A goal agent designed to optimize staking and yield farming, maximizing returns across platforms.',
    withTableStub: false,
    additionalButtons: [
      {
        variant: 'text' as const,
        label: 'Read more',
        onClick: (id: string | number) => console.log(id, 'clicked'),
      },
    ],
  } as Partial<SpacesCardProps> & { id: string | number; withTableStub: boolean; table: TableProps },
};


export const WithImageAndCustomAction: Story = {
  args: {
    id: 'data-card-3',
    title: 'YieldMax Pro',
    mainImageURL: './YieldMax.png',
    description: 'Cover and custom action.',
    benefits: baseBenefits,
    isActiveBenefits: true,
    withTableStub: true,
    table: table,
    author: baseAuthor,
    action: (id: string | number) => alert(`Clicked on ${id}`),
    additionalButtons: [
      {
        label: 'Preview',
        variant: 'primary' as const,
        onClick: (id: string | number) => console.log('preview', id),
      },
      {
        label: 'Delete',
        variant: 'danger' as const,
        onClick: (id: string | number) => console.log('delete', id),
        disabled: true,
      },
    ],
  } as SpacesCardProps,
};

export const VariationsGrid: Story = {
  render: (args) => (
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', maxWidth: 1200 }}>
        <div style={{ width: 360 }}>
          <SpacesCard {...(args as SpacesCardProps)} id="v1" title="Active Benefits" />
        </div>
        <div style={{ width: 360 }}>
          <SpacesCard
              {...(args as SpacesCardProps)}
              id="v2"
              title="Inactive Benefits"
              isActiveBenefits={false}
          />
        </div>
        <div style={{ width: 360 }}>
          <SpacesCard
              {...(args as SpacesCardProps)}
              id="v3"
              title="No Author"
              author={undefined}
              additionalButtons={[
                { label: 'Custom', onClick: () => {}, variant: 'text' as const },
              ]}
          />
        </div>
        <div style={{ width: 360 }}>
          <SpacesCard
              {...(args as SpacesCardProps)}
              id="v4"
              title="Only Stub Table"
              benefits={undefined}
              isActiveBenefits={true}
              withTableStub={true}
              table={table}
          />
        </div>
      </div>
  ),
  args: {
    id: 'variations-space-cards',
    description: 'Combined card for comparing variants.',
    benefits: baseBenefits,
    isActiveBenefits: true,
    withTableStub: true,
    table: table,
    author: baseAuthor,
    action: () => { },
  } as SpacesCardProps,
};

export const TableOnly: Story = {
  args: {
    id: 'data-card-4',
    title: 'Data Only',
    description: 'With table and without standard stub wrapper.',
    benefits: baseBenefits,
    isActiveBenefits: true,
    withTableStub: false,
    table: {
      header: [{content: 'Name'}, {content: 'Status'}, {content: 'Score'}],
      body: [
        [{ content: 'Project A' }, { content: 'Live' }, { content: '98' }],
        [{ content: 'Project B' }, { content: 'Draft' }, { content: '42' }],
      ],
      caption: 'Current projects',
    },
    author: baseAuthor,
    action: () => {},
  } as SpacesCardProps,
};

export const CustomButtonsAndLayout: Story = {
  render: (args) => (
      <div style={{ maxWidth: 500, padding: 16 }}>
        <SpacesCard
            {...(args as SpacesCardProps)}
            id="space-custom"
            title="Mix & Match"
            additionalButtons={[
              {
                id: 'a1',
                label: 'First',
                variant: 'primary' as const,
                onClick: (id: string | number) => console.log('first', id),
              },
              {
                id: 'a2',
                label: 'Second',
                variant: 'secondary' as const,
                onClick: (id: string | number) => console.log('second', id),
              },
              {
                id: 'a3',
                label: 'More',
                variant: 'text' as const,
                onClick: (id: string | number) => console.log('more', id),
                disabled: false,
              },
            ]}
        />
      </div>
  ),
  args: {
    id: "spaceCard1",
    description: 'Complex combined state with multiple buttons and metrics.',
    benefits: baseBenefits,
    isActiveBenefits: true,
    withTableStub: true,
    table: table,
    author: baseAuthor,
    action: () => {},
  } as SpacesCardProps,
};

export const NoBenefitsWithStubOnly: Story = {
  args: {
    id: 'data-card-5',
    title: 'Stub Only Space',
    description: 'No benefits, only stub table placeholder.',
    isActiveBenefits: false,
    withTableStub: true,
    benefits: undefined,
    table: table, // required, but stub will show
    author: baseAuthor,
    action: () => {},
  } as Partial<SpacesCardProps> & { id: string | number; withTableStub: boolean; table: TableProps },
};

export const InactiveBenefitsNoStub: Story = {
  args: {
    id: 'data-card-6',
    title: 'Inactive Metrics',
    description: 'Benefits present but inactive, no table stub.',
    benefits: baseBenefits,
    isActiveBenefits: false,
    withTableStub: false,
    table: table,
    author: baseAuthor,
    action: () => {},
  } as SpacesCardProps,
};

export const OnlyCoverClickable: Story = {
  args: {
    id: 'data-card-7',
    title: 'Clickable Cover',
    mainImageURL: './YieldMax.png',
    benefits: undefined,
    description: undefined,
    isActiveBenefits: false,
    withTableStub: false,
    table: emptyTable,
    author: undefined,
    action: (id: string | number) => console.log('cover clicked', id),
  } as Partial<SpacesCardProps> & { id: string | number; withTableStub: boolean; table: TableProps },
};

export const LikesNonZero: Story = {
  args: {
    id: 'data-card-8',
    title: 'Popular Agent',
    description: 'Agent with non-zero likes to surface engagement.',
    benefits: likesBenefits,
    isActiveBenefits: true,
    withTableStub: false,
    table: table,
    author: baseAuthor,
    action: () => {},
  } as SpacesCardProps,
};

export const AdditionalButtonsOnly: Story = {
  args: {
    id: 'data-card-9',
    title: 'Actionable Card',
    description: 'Only additional buttons, no author or table.',
    benefits: undefined,
    isActiveBenefits: false,
    author: undefined,
    additionalButtons: [
      {
        label: 'Share',
        variant: 'secondary' as const,
        onClick: (id: string | number) => console.log('share', id),
      },
      {
        label: 'Duplicate',
        variant: 'text' as const,
        onClick: (id: string | number) => console.log('duplicate', id),
      },
    ],
    action: () => {},
  }
};
