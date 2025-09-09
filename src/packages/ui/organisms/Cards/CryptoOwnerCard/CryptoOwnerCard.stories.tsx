import type { Meta, StoryObj } from '@storybook/react';
import { CryptoOwnerCard } from './CryptoOwnerCard';

const meta: Meta<typeof CryptoOwnerCard> = {
  title: 'organisms/Cards/CryptoOwnerCard',
  component: CryptoOwnerCard,
  parameters: {
    docs: {
      description: {
        component: 'Card that shows an NFT/crypto owner avatar, title, stats and optional bag icon.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['extended', 'large', 'large-content'],
      description: 'Visual variant of the card',
    },
    cardId: {
      control: { type: 'text' },
      description: 'ID shown in the corner',
    },
    imageURL: {
      control: { type: 'text' },
      description: 'Avatar image URL',
    },
    title: {
      control: { type: 'text' },
      description: 'Card title',
    },
    isBagIconShown: {
      control: { type: 'boolean' },
      description: 'Show shopping‑bag icon',
    },
    count: {
      control: { type: 'number' },
      description: 'Numeric counter',
    },
    description: {
      control: { type: 'text' },
      description: 'Counter description text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Extended: Story = {
  args: {
    variant: 'extended',
    cardId: '1',
    imageURL: './Ellipse_18.png',
    title: '0xD70B..9idG8',
      count: 299,
      description: 'total sales',
    action: (id: string) => console.log(id, 'clicked'),
  },
};

export const Large: Story = {
  args: {
    variant: 'large',
    cardId: '2',
    imageURL: './Ellipse_18.png',
    title: 'Alice',
    count: 120,
    description: 'items sold',
    action: (id: string) => console.log(id, 'clicked'),
  },
};

export const LargeContent: Story = {
  args: {
    variant: 'large-content',
    cardId: '3',
    imageURL: './Ellipse_18.png',
    title: 'Bob',
    count: 512,
    description: 'Commits',
    action: (id: string) => console.log(id, 'clicked'),
  },
};

export const WithoutBagIcon: Story = {
  args: {
    variant: 'extended',
    cardId: '4',
    imageURL: './Ellipse_18.png',
    title: 'Charlie',
    count: 42,
    description: 'KB connectors',
    isBagIconShown: false,
    action: (id: string) => console.log(id, 'clicked'),
  },
};

export const WithoutId: Story = {
  args: {
    variant: 'extended',
    imageURL: './Ellipse_18.png',
    title: 'Charlie',
    count: 42,
    description: 'KB connectors',
    isBagIconShown: false,
    action: (id: string) => console.log(id, 'clicked'),
  },
};
