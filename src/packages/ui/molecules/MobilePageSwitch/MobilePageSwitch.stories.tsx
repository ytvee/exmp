import type { Meta, StoryObj } from '@storybook/react';
import { MobilePageSwitch } from './MobilePageSwitch';
import '@/storybookStyles.css';
import React from 'react';

const meta: Meta<typeof MobilePageSwitch> = {
  title: 'molecules/MobilePageSwitch',
  component: MobilePageSwitch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Mobile Page Switch component for mobile navigation',
      },
    },
  },
  argTypes: {
    currentPageId: {
      control: "text",
      description: "Currently selected page ID",
    },
    onPageChange: {
      action: "page changed",
      description: "Callback when a page is selected",
    },
    onBackClick: {
      action: "back clicked",
      description: "Callback when back button is clicked",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
  },
};

export default meta;
type Story = StoryObj<typeof MobilePageSwitch>;

export const Default: Story = {
  args: {
    currentPageId: "home",
  },
}

export const Disabled: Story = {
  args: {
    currentPageId: "home",
    disabled: true,
  },
}

export const QA: Story = {
  render: () => (
    <div className='asi-story-column'>
      <h3>Default</h3>
      <MobilePageSwitch 
        currentPageId="home" 
        onPageChange={() => { }} 
        onBackClick={() => { }} 
      />
      <h3>Disabled</h3>
      <MobilePageSwitch 
        currentPageId="home" 
        onPageChange={() => { }} 
        onBackClick={() => { }} 
        disabled={true}
      />
    </div>
  ),
}