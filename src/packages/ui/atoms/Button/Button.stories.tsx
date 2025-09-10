import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Icon } from '../Icon';
import '@/storybookStyles.css';

const meta: Meta<typeof Button> = {
  title: 'atoms/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Button component with all variants and functionality',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'text',
        'danger',
        'outlined',
      ],
      description: 'Button variant',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    shape: {
      control: { type: 'select' },
      options: ['rectangle', 'circle'],
      description: 'Button shape',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Loading state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Text Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger Button',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Outlined Button',
  },
};

export const WithIconsButton: Story = {
  args: {
    variant: 'text',
    children: 'With Icons Button',
    startIcon: <Icon name="SmartToy" />,
    endIcon: <Icon name="SmartToy" />,
  },
};

export const AllVariants: Story = {
  render: () => (
      <div className="asi-story-column">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="text">Text</Button>
      </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
      <div className="asi-story-column">
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
  ),
};

export const AllShapes: Story = {
  render: () => (
      <div className="asi-story-column">
        <Button variant='primary' shape="rectangle">Rectangle</Button>
        <Button variant='primary' shape="circle">Circle</Button>
      </div>
  ),
};

export const AllVariantsWithShapes: Story = {
  render: () => (
      <div className="asi-story-column">
        <div>
          <h4>Rectangle Form</h4>
          <div className="asi-story-row">
            <Button variant="primary" shape="rectangle">Primary</Button>
            <Button variant="secondary" shape="rectangle">Secondary</Button>
            <Button variant="danger" shape="rectangle">Danger</Button>
          </div>
        </div>
        <div>
          <h4>Circle/Pill Form</h4>
          <div className="asi-story-row">
            <Button variant="primary" shape="circle">Primary</Button>
            <Button variant="secondary" shape="circle">Secondary</Button>
            <Button variant="danger" shape="circle">Danger</Button>
          </div>
        </div>
      </div>
  ),
};

export const AllSizesWithShapes: Story = {
  render: () => (
      <div className="asi-story-column">
        <div>
          <h4>Rectangle Form</h4>
          <div className="asi-story-row">
            <Button variant="primary" size="small" shape="rectangle">Small</Button>
            <Button variant="primary" size="medium" shape="rectangle">Medium</Button>
            <Button variant="primary" size="large" shape="rectangle">Large</Button>
          </div>
        </div>
        <div>
          <h4>Circle/Pill Form</h4>
          <div className="asi-story-row">
            <Button variant="primary" size="small" shape="circle">Small</Button>
            <Button variant="primary" size="medium" shape="circle">Medium</Button>
            <Button variant="primary" size="large" shape="circle">Large</Button>
          </div>
        </div>
      </div>
  ),
};

export const Disabled: Story = {
  render: () => (
      <div className="asi-story-column">
        <Button variant="primary" disabled={true}>Primary</Button>
        <Button variant="secondary" disabled={true}>Secondary</Button>
        <Button variant="outlined" disabled={true}>Outlined</Button>
        <Button variant="danger" disabled={true}>Danger</Button>
        <Button variant="text" disabled={true}>Text</Button>
      </div>
  ),
};

export const DisabledWithShapes: Story = {
  render: () => (
      <div className="asi-story-column">
        <div>
          <h4>Rectangle Form - Disabled</h4>
          <div className="asi-story-row">
            <Button variant="primary" shape="rectangle" disabled={true}>Primary</Button>
            <Button variant="secondary" shape="rectangle" disabled={true}>Secondary</Button>
            <Button variant="danger" shape="rectangle" disabled={true}>Danger</Button>
          </div>
        </div>
        <div>
          <h4>Circle/Pill Form - Disabled</h4>
          <div className="asi-story-row">
            <Button variant="primary" shape="circle" disabled={true}>Primary</Button>
            <Button variant="secondary" shape="circle" disabled={true}>Secondary</Button>
            <Button variant="danger" shape="circle" disabled={true}>Danger</Button>
          </div>
        </div>
      </div>
  ),
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading Button',
  },
};

export const LoadingWithShapes: Story = {
  render: () => (
      <div className="asi-story-column">
        <div>
          <h4>Rectangle Form - Loading</h4>
          <div className="asi-story-row">
            <Button variant="primary" shape="rectangle" loading={true}>Primary</Button>
            <Button variant="secondary" shape="rectangle" loading={true}>Secondary</Button>
            <Button variant="danger" shape="rectangle" loading={true}>Danger</Button>
          </div>
        </div>
        <div>
          <h4>Circle/Pill Form - Loading</h4>
          <div className="asi-story-row">
            <Button variant="primary" shape="circle" loading={true}>Primary</Button>
            <Button variant="secondary" shape="circle" loading={true}>Secondary</Button>
            <Button variant="danger" shape="circle" loading={true}>Danger</Button>
          </div>
        </div>
      </div>
  ),
};