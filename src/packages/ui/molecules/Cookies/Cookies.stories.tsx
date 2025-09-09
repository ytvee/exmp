import React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Cookies } from './Cookies';

const meta: Meta<typeof Cookies> = {
  title: 'molecules/Cookies',
  component: Cookies,
  tags: ['autodocs'],
  argTypes: {
    onAccept: { action: 'Accepted' },
    onReject: { action: 'Rejected' },
  },
  parameters: {
    docs: {
      description: {
        component: 'The Cookies component displays a consent banner allowing users to accept or reject cookies.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Cookies>;

const Template: StoryFn<typeof Cookies> = (args) => <Cookies {...args} />;

export const Default: Story = {
  render: Template,
};

export const QA: Story = {
  render: () => <Cookies onAccept={() => {}} onReject={() => {}} />,
};
