import type { Meta, StoryObj } from '@storybook/react';
import SideBar from './SideBar';

const meta: Meta<typeof SideBar> = {
  title: 'Organisms/SideBar',
  component: SideBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sections: [
      {
        sectionHeader: 'Main Navigation',
        items: [
          {
            label: 'Dashboard',
            value: 'dashboard',
            path: '/dashboard',
            type: 'base',
          },
          {
            label: 'Projects',
            value: 'projects',
            path: '/projects',
            type: 'base',
          },
        ],
      },
    ],
    onItemClick: (item) => {
      console.log('Item clicked:', item);
    },
  },
};

export const WithCheckboxes: Story = {
  args: {
    sections: [
      {
        sectionHeader: 'Settings',
        items: [
          {
            label: 'Notifications',
            value: 'notifications',
            path: '/settings/notifications',
            type: 'checkbox',
            checked: true,
          },
          {
            label: 'Privacy',
            value: 'privacy',
            path: '/settings/privacy',
            type: 'checkbox',
            checked: false,
          },
        ],
      },
    ],
    onItemClick: (item) => {
      console.log('Item clicked:', item);
    },
  },
};

export const WithBackButton: Story = {
  args: {
    sections: [
      {
        sectionHeader: 'Navigation',
        items: [
          {
            iconName: 'Home',
            label: 'Home',
            value: 'home',
            path: '/home',
            type: 'base',
            active: true
          },
          {
            iconName: 'Memory',
            label: 'Data',
            value: 'data',
            path: '/data',
            type: 'base',
            active: false
          },
        ],
      },
      {
        sectionHeader: 'Navigation 2',
        items: [
          {
            iconName: 'Home',
            label: 'Home2',
            value: 'home2',
            path: '/home2',
            type: 'base',
            active: true
          },
          {
            iconName: 'Memory',
            label: 'Data 2',
            value: 'data2',
            path: '/data2',
            type: 'base',
            active: false
          },
        ],
      },
    ],
    onItemClick: (item) => {
      console.log('Item clicked:', item);
    },
    onBackClick: () => {},
    withBackButton: true,
  },
};

export const MultipleSections: Story = {
  args: {
    sections: [
      {
        sectionHeader: 'Main',
        items: [
          {
            label: 'Dashboard',
            value: 'dashboard',
            path: '/dashboard',
            type: 'base',
          },
        ],
      },
      {
        sectionHeader: 'Settings',
        items: [
          {
            label: 'Profile',
            value: 'profile',
            path: '/settings/profile',
            type: 'base',
          },
        ],
      },
    ],
    onItemClick: (item) => {
      console.log('Item clicked:', item);
    },
  },
}; 