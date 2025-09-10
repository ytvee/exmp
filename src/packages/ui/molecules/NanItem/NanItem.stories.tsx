import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NanItem } from './NanItem';
import type { NanItemProps } from './NanItem.types';
import '@/storybookStyles.css';

const meta: Meta<typeof NanItem> = {
  title: 'molecules/NanItem',
  component: NanItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'NanItem component description',
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'The label for the item.' },
    checked: { control: 'boolean', description: 'Defines if the item is checked (for checkbox/radio).' },
    count: { control: 'number', description: 'Optional badge count.' },
    onChange: { action: 'onChange', description: 'Callback for checkbox or radio selection changes.' },
    onClick: { action: 'onClick', description: 'Callback for item click events.' },
  },
};

export default meta;

type Story = StoryObj<typeof NanItem>;

export const Base: Story = (args) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return <NanItem {...args} checked={isActive} onClick={() => setIsActive((prev) => !prev)} />;
};

Base.args = { type: 'base', label: 'Base Item (Icon)', iconName: 'Home', value: 'base', count: 25 };

export const BaseWithAvatar: Story = (args) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return <NanItem {...args} checked={isActive} onClick={() => setIsActive((prev) => !prev)} />;
};

BaseWithAvatar.args = { type: 'avatar', label: 'Base Item (Avatar)', count: 10, value: 'avatar', avatarSrc: '/avatar.svg' };

export const Checkbox: Story = (args) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <NanItem
      {...args}
      checked={isChecked}
      onChange={(value) => {
        if (typeof value === 'boolean') setIsChecked(value);
      }}
    />
  );
};

Checkbox.args = { type: 'checkbox', value: 'checkbox', label: 'Checkbox Item', count: 25 };

export const Radio: Story = (args) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const isChecked = args.value === selectedValue;
  return <NanItem {...args} checked={isChecked} onChange={(value) => setSelectedValue(isChecked ? null : String(value))} />;
};

Radio.args = { type: 'radio', label: 'Radio Item', value: 'radio1' };

export const AllVariants: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    const variantArgs: NanItemProps[] = [
      Base.args as NanItemProps,
      BaseWithAvatar.args as NanItemProps,
      Checkbox.args as NanItemProps,
      Radio.args as NanItemProps,
    ];

    return (
      <div className="asi-story-column">
        {variantArgs.map((arg, idx) => {
          const isChecked = arg.value === selectedValue;
          return (
            <NanItem
              key={idx}
              {...arg}
              type={arg.type || 'base'}
              label={arg.label || 'Default'}
              value={arg.value || 'default'}
              checked={isChecked}
              onClick={() => setSelectedValue(isChecked ? null : arg.value || 'default')}
            />
          );
        })}
      </div>
    );
  },
};