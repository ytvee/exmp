import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CheckBox from './CheckBox';
import '../../../../storybookStyles.css';

const meta: Meta<typeof CheckBox> = {
    title: 'atoms/CheckBox',
    component: CheckBox,
    tags: ['autodocs'],
    parameters: {
        docs: {
            layout: 'centered',
            description: {
                component: 'CheckBox component for toggling a boolean value with optional description, variants, sizes, and loading state.',
            },
        },
    },
    argTypes: {
        id: { control: 'text', description: 'Unique identifier for the checkbox input' },
        label: { control: 'text', description: 'Label text displayed next to the checkbox' },
        description: { control: 'text', description: 'Optional description text below the label' },
        checked: { control: 'boolean', description: 'Checked state of the checkbox' },
        disabled: { control: 'boolean', description: 'Whether the checkbox is disabled' },
        loading: { control: 'boolean', description: 'Whether to show loading state' },
        variant: {
            control: { type: 'select' },
            options: ['default', 'primary', 'secondary'],
            description: 'Style variant'
        },
        size: { control: { type: 'select' }, options: ['small', 'medium', 'large'], description: 'Size of checkbox' },
        onChange: { action: 'changed', description: 'Fired when state changes' },
        className: { table: { disable: true } },
    },
};

export default meta;

type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {
    name: 'Default',
    render: () => {
        const [state, setState] = useState(false);
        return (
            <CheckBox
                id="chk-default"
                label="Default Checkbox"
                checked={ state }
                onChange={ setState }
            />
        );
    },
};

export const Checked: Story = {
    args: {
        ...Default.args,
        id: 'chk-checked',
        label: 'Checked Checkbox',
        checked: true,
    },
};

export const Disabled: Story = {
    args: {
        id: 'chk-disabled',
        label: 'Disabled Checkbox',
        checked: false,
        disabled: true,
    },
};

export const WithDescription: Story = {
    args: {
        id: 'chk-desc',
        label: 'Checkbox with description',
        description: 'Additional information about this option.',
    },
};

export const Variants: Story = {
    render: () => {
        const [state, setState] = useState(false);
        return (
            <div className="asi-story-column">
                <CheckBox id="chk-var-default" label="Default" variant="default" checked={ state } onChange={ setState }/>
                <CheckBox id="chk-var-default" label="Default" variant="default" checked={ state } disabled onChange={ setState }/>

                <CheckBox id="chk-var-default" label="Checkbox with description" description='Additional information about this option.' checked={ state } onChange={ setState }/>
                <CheckBox id="chk-var-default" label="Checkbox with description" description='Additional information about this option.' checked={ state } disabled onChange={ setState }/>
            </div>
        )
    },
    name: 'All Variants',
};

export const Interactive: Story = {
    render: () => {
        const [state, setState] = useState(false);
        return (
            <CheckBox
                id="chk-interactive"
                label="Interactive Checkbox"
                checked={ state }
                onChange={ setState }
            />
        );
    },
    name: 'Interactive',
};

export const AllStates: Story = {
    render: () => (
        <div className="asi-story-row">
            <CheckBox id="all-default" label="Default"/>
            <CheckBox id="all-checked" label="Checked" checked/>
            <CheckBox id="all-disabled" label="Disabled" disabled/>
            <CheckBox id="all-desc" label="With Desc" description="Desc text"/>
        </div>
    ),
    name: 'All States',
};
