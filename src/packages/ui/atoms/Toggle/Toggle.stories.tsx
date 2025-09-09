import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Toggle from './Toggle';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Toggle> = {
    title: 'atoms/Toggle',
    component: Toggle,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Toggle component for boolean input. Supports checked, disabled, label, and labelPosition props.',
            },
        },
    },
    argTypes: {
        checked: { control: 'boolean', description: 'Whether the toggle is on' },
        disabled: { control: 'boolean', description: 'Whether the toggle is disabled' },
        label: { control: 'text', description: 'Label text next to the toggle' },
        helperText: { control: 'text', description: 'Helper text next to the toggle' },
        labelPosition: {
            control: { type: 'select' },
            options: ['left', 'right'],
            description: 'Position of label relative to toggle'
        },
        onChange: { action: 'toggled', description: 'Callback fired with new checked state' },
        className: { table: { disable: true } },
    },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
    name: 'Default (Interactive)',
    render: () => {
        const [state, setState] = useState(false);
        return (
            <Toggle
                checked={ state }
                onChange={ setState }
                label="Enable feature"
            />
        );
    },
};

export const Checked: Story = {
    name: 'Checked',
    args: {
        checked: true,
        onChange: action('toggled'),
        label: 'Checked Toggle',
    },
};

export const Disabled: Story = {
    name: 'Disabled',
    args: {
        checked: false,
        disabled: true,
        onChange: action('toggled'),
        label: 'Disabled Toggle',
    },
};

export const LabelLeft: Story = {
    name: 'Label Left',
    args: {
        checked: false,
        onChange: action('toggled'),
        label: 'Left Label',
        labelPosition: 'left',
    },
};

export const LabelRight: Story = {
    name: 'Label Right',
    args: {
        checked: false,
        onChange: action('toggled'),
        label: 'Right Label',
        labelPosition: 'right',
    },
};

export const HelperText: Story = {
    name: 'Helper Text',
    args: {
        checked: false,
        onChange: action('toggled'),
        label: 'I am a Toggle label',
        helperText: 'I try to help you',
    },
};

export const AllStates: Story = {
    name: 'All States',
    render: () => (
        <div className="asi-story-row">
            <Toggle checked={ false } onChange={ action('toggled') } label="Default"/>
            <Toggle checked={ true } onChange={ action('toggled') } label="Checked"/>
            <Toggle checked={ false } onChange={ action('toggled') } disabled label="Disabled"/>
            <Toggle checked={ false } onChange={ action('toggled') } label="Helper text" helperText='Description'/>
            <Toggle checked={ false } onChange={ action('toggled') } label="Left Label" labelPosition="left"/>
        </div>
    ),
};
