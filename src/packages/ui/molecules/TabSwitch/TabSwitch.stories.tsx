import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TabSwitch } from './TabSwitch';
import Icon from '../../atoms/Icon/Icon';
import { useState } from 'react';
import '../../../../storybookStyles.css';

const meta: Meta<typeof TabSwitch> = {
  title: 'molecules/TabSwitch',
  component: TabSwitch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'TabSwitch component description',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary'],
      description: 'Component variant',
    },
  },
};

export default meta
type Story = StoryObj<typeof TabSwitch>

// Sample options for the stories
const sampleOptions = [
  {
    label: "Home",
    icon: <Icon name="Home" />,
    value: "home",
  },
  {
    label: "Settings",
    icon: <Icon name="Settings" />,
    value: "settings",
  },
]

export const Full: Story = {
  args: {
    options: sampleOptions,
    selected: 0,
    variant: "full",
  },
}

export const Small: Story = {
  args: {
    options: sampleOptions,
    selected: 0,
    variant: "small",
  },
}

export const Mobile: Story = {
  args: {
    options: sampleOptions,
    selected: 0,
    variant: "mobile",
  },
}

export const SelectedSecondTab: Story = {
  args: {
    options: sampleOptions,
    selected: 1,
    variant: "full",
  },
}

export const ThreeTabs: Story = {
  args: {
    options: [
      ...sampleOptions,
      {
        label: "Profile",
        icon: <Icon name="Home" />,
        value: "profile",
      },
    ],
    selected: 0,
    variant: "full",
  },
}

export const AllVariants: Story = {
  render: () => {
    const [selected, setSelected] = useState(0);
    return (
      <div className='asi-story-column'>
        <h3>Full</h3>
        <TabSwitch options={sampleOptions} selected={selected} onChange={setSelected} variant="full" />
        <h3>Small</h3>
        <TabSwitch options={sampleOptions} selected={0} variant="small" />
        <h3>Mobile</h3>
        <TabSwitch options={sampleOptions} selected={0} variant="mobile" />
        <h3>Three Tabs</h3>
        <TabSwitch options={[...sampleOptions, { label: 'Profile', icon: <Icon name="Home" />, value: 'profile' }]} selected={0} variant="full" />
      </div>
    );
  },
};

