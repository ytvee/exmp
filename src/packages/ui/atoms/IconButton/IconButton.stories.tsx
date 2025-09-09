import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import '../../../../storybookStyles.css';

const meta: Meta<typeof IconButton> = {
    component: IconButton,
    title: 'Atoms/IconButton',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'IconButton component with configurable size, color variants, background states, and interactive states.',
            },
        },
    },
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['large', 'medium', 'small'],
            description: 'Size of the icon button (40px, 34px, 28px).',
            table: { defaultValue: { summary: 'medium' } },
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'blue', 'red'],
            description: 'Color variant of the icon button.',
            table: { defaultValue: { summary: 'default' } },
        },
        hasBackground: {
            control: { type: 'boolean' },
            description: 'Whether the button has a circular background.',
        },
        active: {
            control: { type: 'boolean' },
            description: 'Whether the button is in active state.',
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Whether the button is disabled.',
        },
        iconName: {
            control: { type: 'select' },
            options: ['Settings', 'Home', 'Person', 'Menu', 'MoreVert'],
            description: 'Name of the icon to display.',
        },
        onClick: {
            action: 'clicked',
            description: 'Click handler callback.',
        },
        className: { 
            control: 'text', 
            description: 'Additional CSS class name.' 
        },
    },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

// Default story
export const Default: Story = {
    args: {
        size: 'medium',
        variant: 'default',
        hasBackground: false,
        active: false,
        disabled: false,
        iconName: 'Settings',
    },
};

// Size variants
export const Sizes: Story = {
    args: {
        iconName: 'Settings',
    },
    render: (args) => (
        <div className='asi-story-row'>
            <div className='asi-story-content'>
                <div>Large (40px)</div>
                <IconButton {...args} size="large" />
            </div>
            <div className='asi-story-content'>
                <div>Medium (34px)</div>
                <IconButton {...args} size="medium" />
            </div>
            <div className='asi-story-content'>
                <div>Small (28px)</div>
                <IconButton {...args} size="small" />
            </div>
        </div>
    ),
};

// Color variants
export const ColorVariants: Story = {
    args: {
        iconName: 'Settings',
    },
    render: (args) => (
        <div className='asi-story-row'>
            <div className='asi-story-content'>
                <div>Default</div>
                <IconButton {...args} variant="default" />
            </div>
            <div className='asi-story-content'>
                <div>Blue</div>
                <IconButton {...args} variant="blue" />
            </div>
            <div className='asi-story-content'>
                <div>Red</div>
                <IconButton {...args} variant="red" />
            </div>
        </div>
    ),
};

// Background variants
export const BackgroundVariants: Story = {
    args: {
        iconName: 'Settings',
    },
    render: (args) => (
        <div className='asi-story-row'>
            <div className='asi-story-content'>
                <div>No Background</div>
                <IconButton {...args} hasBackground={false} />
            </div>
            <div className='asi-story-content'>
                <div>With Background</div>
                <IconButton {...args} hasBackground={true} />
            </div>
        </div>
    ),
};

// States
export const States: Story = {
    args: {
        iconName: 'Settings',
    },
    render: (args) => (
        <div className='asi-story-row'>
            <div className='asi-story-content'>
                <div>Active</div>
                <IconButton {...args} active={true} />
            </div>
            <div className='asi-story-content'>
                <div>Disabled</div>
                <IconButton {...args} disabled={true} />
            </div>
        </div>
    ),
};
