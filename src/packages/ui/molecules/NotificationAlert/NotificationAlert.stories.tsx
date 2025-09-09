import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NotificationAlert } from './NotificationAlert';
import '../../../../storybookStyles.css';

const meta: Meta<typeof NotificationAlert> = {
  title: 'molecules/NotificationAlert',
  component: NotificationAlert,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'NotificationAlert component description',
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'error'], description: 'The variant of the notification' },
    title: { control: 'text', description: 'The title of the notification' },
    description: { control: 'text', description: 'The description text of the notification' },
    linkText: { control: 'text', description: 'The text for the link' },
    linkHref: { control: 'text', description: 'The URL for the link' },
    onClick: { action: 'clicked', description: 'Click handler for the link' },
  },
};

export default meta;
type Story = StoryObj<typeof NotificationAlert>;

export const Info: Story = {
  args: { variant: 'info', title: 'Information', description: 'This is an informational notification with important details.', linkText: 'Learn More', linkHref: '#' },
};

export const Success: Story = {
  args: { variant: 'success', title: 'Success', description: 'Your action was completed successfully.', linkText: 'View Results', linkHref: '#' },
};

export const Warning: Story = {
  args: { variant: 'warning', title: 'Warning', description: 'Please be aware of this important warning.', linkText: 'Take Action', linkHref: '#' },
};

export const Error: Story = {
  args: { variant: 'error', title: 'Error', description: 'Please be aware of this error.', linkText: 'Take Action', linkHref: '#' },
};

export const InfoWithoutLink: Story = {
  args: { variant: 'info', title: 'Information', description: 'This is an informational notification without a link.' },
};

export const TitleOnly: Story = {
  args: { variant: 'warning', title: 'Important Notice' },
};

export const AllVariants: Story = {
  render: () => (
    <div className="asi-story-column">
      <NotificationAlert variant="info" title="Information" description="This is an informational notification with important details." linkText="Learn More" linkHref="#" />
      <NotificationAlert variant="success" title="Success" description="Your action was completed successfully." linkText="View Results" linkHref="#" />
      <NotificationAlert variant="warning" title="Warning" description="Please be aware of this important warning." linkText="Take Action" linkHref="#" />
      <NotificationAlert variant="error" title="Error" description="Please be aware of this error." linkText="Take Action" linkHref="#" />
      <NotificationAlert variant="info" title="Information" description="This is an informational notification without a link." />
      <NotificationAlert variant="warning" title="Important Notice" />
    </div>
  ),
};

