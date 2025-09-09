import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';
import { TVariant, TColorVariant } from './Slider.types';
import React from 'react';

const variants: TVariant[] = ['default', 'barOnly', 'withInput'];
const colorVariants: TColorVariant[] = ["primary", "secondary", "error", "warning"];

const meta: Meta<typeof Slider> = {
  title: 'Molecules/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: variants,
    },
    colorVariant: {
      control: { type: 'select' },
      options: colorVariants,
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    unit: {
      control: { type: 'text' }
    },
    label: {
      control: { type: 'text' }
    },
    startLabel: {
      control: { type: 'text' }
    },
    endLabel: {
      control: { type: 'text' }
    },
    step: {
      control: {
        type: 'number',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    marks: {
      control: { type: 'boolean' }
    },
    value: {
      control: {
        type: 'number',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    onChange: {
      action: 'changed',
      description: 'Callback fired when the slider value changes',
    },
    onWheel: {
      action: 'onWheel',
      description: 'Callback fired when the slider value changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    value: 50,
    variant: 'default',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Volume',
    min: 0,
    max: 100,
    value: 75,
    unit: 'dB',
    variant: 'default',
  },
};

export const BarOnly: Story = {
  args: {
    label: 'Brightness',
    min: 0,
    max: 100,
    value: 60,
    variant: 'barOnly',
  },
};

export const WithInput: Story = {
  args: {
    label: 'Size (GB)*',
    min: 2,
    max: 1024,
    value: 2,
    unit: '',
    variant: 'withInput',
    startLabel: undefined,
    endLabel: undefined,
    marks: true,
    marksCount: 4,
    showMinMaxLabels: true,
  },
};

export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 78, width: 900 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Slider min={0} max={100} value={100}  variant="withInput" marks marksCount={5} startLabel="name" endLabel="name" label='Size (GB)*' showMinMaxLabels onChange={() => {}}/>
        <br />
        <Slider min={0} max={100} value={80} onChange={() => {}}/>
        <br />
        <Slider min={0} max={100} value={50} onChange={() => {}}/>
        <br />
        <Slider min={0} max={100} value={25} onChange={() => {}}/>
        <br />
        <Slider min={0} max={100} value={5} onChange={() => {}}/>
      </div>
      <div >
        <Slider min={0} max={100} value={100} variant="withInput" marks marksCount={5} startLabel="name" endLabel="name" label='Size (GB)*' showMinMaxLabels onChange={() => {}}/>
        <br />
        <Slider min={0} max={100} value={80}  marks marksCount={5} startLabel="name" endLabel="name" onChange={() => {}}/>
        <br />
        <Slider min={0} max={100} value={50} marks marksCount={5} startLabel="name" endLabel="name" onChange={() => {}}/>
        <br />
        <Slider min={0} max={100} value={25} marks marksCount={5} startLabel="name" endLabel="name" onChange={() => {}}/>
        <br />
        <Slider min={0} max={100} value={5} marks marksCount={5} startLabel="name" endLabel="name" onChange={() => {}}/>
      </div>
    </div>
  ),
};

export const Range: Story = {
  args: {
    label: 'Price Range',
    min: 0,
    max: 1000,
    value: [200, 800],
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Slider',
    min: 0,
    max: 100,
    value: 30,
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading Slider',
    min: 0,
    max: 100,
    value: 50,
    loading: true,
  },
};

export const Primary: Story = {
  args: {
    label: 'Primary Slider',
    min: 0,
    max: 100,
    value: 80,
    colorVariant: 'primary'
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Slider',
    min: 0,
    max: 100,
    value: 80,
    colorVariant: 'secondary'
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning Slider',
    min: 0,
    max: 100,
    value: 90,
    colorVariant: 'warning',
  },
};

export const Error: Story = {
  args: {
    label: 'Error Slider',
    min: 0,
    max: 100,
    value: 95,
    colorVariant: 'error',
  },
};
  