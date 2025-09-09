import type { Meta, StoryObj } from '@storybook/react';
import { TopNav } from './TopNav';

const meta: Meta<typeof TopNav> = {
  title: 'organisms/TopNav',
  component: TopNav,
  parameters: {
    docs: {
      description: {
        component:
            'Top navigation bar that includes logo, menu links, user actions, and authentication buttons depending on user state.',
      },
    },
  },
  argTypes: {
    onTabClick: { action: 'tab clicked' },
    onLogoClick: { action: 'logo clicked' },
    onIconClick: { action: 'notification clicked' },
    onAvatarClick: { action: 'avatar clicked' },
    onHamburgerClick: { action: 'hamburger clicked' },
    onLoginClick: { action: 'login clicked' },
    onSignUpClick: { action: 'sign up clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const navMenu = [
  {
    iconName: 'Dashboard',
    label: 'Dashboard',
    action: () => console.log('Dashboard clicked'),
  },
  {
    iconName: 'Chat',
    label: 'AI Chat',
    action: () => console.log('AI Chat clicked'),
  },
  {
    iconName: 'DeployedCode',
    label: 'Spaces',
    action: () => console.log('Spaces clicked'),
  },
  {
    iconName: 'Memory',
    label: 'Agents',
    action: () => console.log('Agents clicked'),
  },
  {
    iconName: 'DataBase',
    label: 'Data',
    action: () => console.log('Data clicked'),
  },
];

export const Default: Story = {
  args: {
    disabled: false,
    loading: false,
    userStatus: 'unauthorized',
    activeTab: 'Dashboard',
    navMenu,
  },
};

export const Authorized: Story = {
  args: {
    size: 'medium',
    disabled: false,
    loading: false,
    userStatus: 'authorized',
    activeTab: 'AI Chat',
    navMenu,
  },
};
