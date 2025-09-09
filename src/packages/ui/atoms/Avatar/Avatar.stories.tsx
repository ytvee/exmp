import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import '../../../../storybookStyles.css';
import React from "react";

const meta: Meta<typeof Avatar> = {
    title: 'atoms/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Avatar component. Renders a circular image that can be sized via preset keywords or a manual pixel value.',
            },
        },
    },
    argTypes: {
        src: {
            control: 'text',
            description: 'Image source URL',
            type: { name: 'string', required: true },
        },
        alt: {
            control: 'text',
            description: 'Alternative text for the image',
            type: { name: 'string', required: true },
        },
        manualSize: {
            control: 'text',
            description: "Manual override for width/height (e.g. '80px')",
        },
        size: {
            control: { type: 'select' },
            options: ['extraSmall', 'small', 'medium', 'large'],
            description: 'Preset size keyword',
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Disabled state (no pointer events)',
        },
        loading: {
            control: { type: 'boolean' },
            description: 'Loading state (e.g. apply opacity or spinner)',
        },
        onClick: {
            action: 'clicked',
            description: 'Click handler callback',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    args: {
        src: 'avatar.svg',
        alt: 'User avatar',
        size: 'medium',
    },
};

export const ExtraSmall: Story = {
    name: 'Extra Small',
    args: {
        src: 'avatar.svg',
        alt: 'User avatar',
        size: 'extraSmall',
    },
};

export const Small: Story = {
    args: {
        src: 'avatar.svg',
        alt: 'User avatar',
        size: 'small',
    },
};

export const Medium: Story = {
    args: {
        src: 'avatar.svg',
        alt: 'User avatar',
        size: 'medium',
    },
};

export const Large: Story = {
    args: {
        src: 'avatar.svg',
        alt: 'User avatar',
        size: 'large',
    },
};

export const ManualSize: Story = {
    name: 'Manual Size (80px)',
    args: {
        src: 'avatar.svg',
        alt: 'User avatar',
        manualSize: '80px',
    },
};

export const AllVariants: Story = {
    render: () => {
        const Component = Avatar;
        return (
            <div className="asi-story-row">
                <Component src={ 'avatar.svg' } alt={ 'User avatar' } size="extraSmall"/>
                <Component src={ 'avatar.svg' } alt={ 'User avatar' } size="small"/>
                <Component src={ 'avatar.svg' } alt={ 'User avatar' } size="medium"/>
                <Component src={ 'avatar.svg' } alt={ 'User avatar' } size="large"/>
                <Component src={ 'avatar.svg' } alt={ 'User avatar' } manualSize="120px"/>
            </div>
        );
    },
};
