import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import RadioButton from './RadioButton';
import { action } from '@storybook/addon-actions';
import '../../../../storybookStyles.css';

const meta: Meta<typeof RadioButton> = {
    title: 'atoms/RadioButton',
    component: RadioButton,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'RadioButton component to select one option among many. Supports variants, disabled state, and optional description.',
            },
        },
    },
    argTypes: {
        id: { control: 'text', description: 'Unique identifier for the radio input' },
        value: { control: 'text', description: 'Value of this radio button' },
        label: { control: 'text', description: 'Label text next to the radio' },
        description: { control: 'text', description: 'Optional description below the label' },
        checked: { control: 'boolean', description: 'Whether this radio is selected' },
        disabled: { control: 'boolean', description: 'Whether this radio is disabled' },
        variant: {
            control: { type: 'select' },
            options: ['default', 'primary', 'secondary'],
            description: 'Visual variant'
        },
        onChange: { action: 'changed', description: 'Fired when selection changes, provides the value' },
        className: { table: { disable: true } },
    },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
    args: {
        id: 'radio-default',
        value: 'default',
        label: 'Default Option',
        checked: false,
        onChange: action('changed'),
    },
};

export const Checked: Story = {
    name: 'Checked',
    args: {
        id: 'radio-checked',
        value: 'checked',
        label: 'Checked Option',
        checked: true,
        onChange: action('changed'),
    },
};

export const Disabled: Story = {
    name: 'Disabled',
    args: {
        id: 'radio-disabled',
        value: 'disabled',
        label: 'Disabled Option',
        checked: false,
        disabled: true,
        onChange: action('changed'),
    },
};

export const WithDescription: Story = {
    name: 'With Description',
    args: {
        id: 'radio-desc',
        value: 'desc',
        label: 'Option with Description',
        description: 'Additional details about this option.',
        checked: false,
        onChange: action('changed'),
    },
};

export const Primary: Story = {
    name: 'Primary Variant',
    args: {
        id: 'radio-primary',
        value: 'primary',
        label: 'Primary Option',
        variant: 'primary',
        checked: false,
        onChange: action('changed'),
    },
};

export const Secondary: Story = {
    name: 'Secondary Variant',
    args: {
        id: 'radio-secondary',
        value: 'secondary',
        label: 'Secondary Option',
        variant: 'secondary',
        checked: false,
        onChange: action('changed'),
    },
};

export const AllVariants: Story = {
    name: 'All Variants',
    render: () => (
        <div className="asi-story-column">
            <RadioButton id="var-default" value="var-default" label="Default" checked={ false }
                         onChange={ action('changed') }/>
            <RadioButton id="var-primary" value="var-primary" label="Primary" variant="primary" checked={ false }
                         onChange={ action('changed') }/>
            <RadioButton id="var-secondary" value="var-secondary" label="Secondary" variant="secondary"
                         checked={ false } onChange={ action('changed') }/>
        </div>
    ),
};

export const AllStates: Story = {
    name: 'All States',
    render: () => (
        <div className="asi-story-column">
            <RadioButton id="state-default" value="state-default" label="Default" checked={ false }
                         onChange={ action('changed') }/>
            <RadioButton id="state-checked" value="state-checked" label="Checked" checked
                         onChange={ action('changed') }/>
            <RadioButton id="state-disabled" value="state-disabled" label="Disabled" checked={ false } disabled
                         onChange={ action('changed') }/>
            <RadioButton id="state-desc" value="state-desc" label="With Desc" description="A description."
                         checked={ false } onChange={ action('changed') }/>
        </div>
    ),
};

export const InteractiveGroup: Story = {
    name: 'Interactive Group',
    render: () => {
        const [selected, setSelected] = useState('opt1');
        return (
            <div className="asi-story-column">
                <RadioButton
                    id="opt1"
                    value="opt1"
                    label="Option 1"
                    checked={ selected === 'opt1' }
                    onChange={ setSelected }
                />
                <RadioButton
                    id="opt2"
                    value="opt2"
                    label="Option 2"
                    checked={ selected === 'opt2' }
                    onChange={ setSelected }
                />
                <RadioButton
                    id="opt3"
                    value="opt3"
                    label="Option 3"
                    checked={ selected === 'opt3' }
                    onChange={ setSelected }
                />
            </div>
        );
    },
};
