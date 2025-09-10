import React, { useState } from 'react';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { NavLink } from './NavLink';
import { Icon } from '@atoms/Icon';
import { NavLinkProps } from './NavLink.types';

const meta: Meta<typeof NavLink> = {
  title: 'molecules/NavLink',
  component: NavLink,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'NavLink component description',
      },
    },
  },
  argTypes: {
    isActive: {
      control: 'boolean',
      description: 'Indicates whether the link is currently active',
    },
    href: {
      control: 'text',
      description: 'The URL that the link points to',
    },
    onClick: {
      action: 'clicked',
      description: 'Callback fired when the link is clicked',
    },
  },
};

export default meta;

type Story = StoryObj<NavLinkProps>;

const Template: StoryFn<NavLinkProps> = (args) => {
  const [isActive, setIsActive] = useState(args.isActive);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setIsActive(!isActive);
    args.onClick?.(event);
  };

  return <NavLink {...args} isActive={isActive} onClick={handleClick} />;
};

export const Base: Story = {
  render: Template,
  args: {
    isActive: false,
    icon: <Icon name="Dashboard" />,
    label: 'Dashboard',
  },
};

export const Active: Story = {
  render: Template,
  args: {
    ...Base.args,
    isActive: true,
  },
};
