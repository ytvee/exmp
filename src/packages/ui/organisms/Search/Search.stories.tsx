import React, { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Search } from './Search';
import type { IconName } from '../../atoms/Icon/Icon.types';

const meta: Meta<typeof Search> = {
  title: 'organisms/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      control: 'select',
      options: ['Search', 'Filter', 'Home', 'Menu'] as IconName[],
    },
    buttonIconName: {
      control: 'select',
      options: ['Filter', 'Add', 'Close', 'MoreHoriz'] as IconName[],
    },
    buttonText: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    width: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    buttonAction: {
      action: 'button clicked',
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconName: 'Search' as IconName,
    buttonIconName: 'Filter' as IconName,
    buttonText: 'Filter',
    placeholder: 'Search 16, 400 spacer',
    // width: '445px',
    disabled: false,
    loading: false,
    buttonAction: () => {},
  },
};

export const CustomPlaceholderAndButton: Story = {
  render: (args) => (
      <Search
          {...args}
          placeholder="Find users or projects..."
          buttonText="Refine"
          buttonIconName={ "MoreHoriz" as IconName }
      />
  ),
  args: {
    width: '500px',
    iconName: 'Search' as IconName,
    disabled: false,
    loading: false,
    buttonAction: () => {},
  },
};

export const DisabledAndLoading: Story = {
  render: (args) => (
      <div style={{ display: 'flex', gap: 24 }}>
        <Search {...args} placeholder="Disabled" disabled />
        <Search {...args} placeholder="Loading" loading />
      </div>
  ),
  args: {
    iconName: 'Search' as IconName,
    buttonIconName: 'Filter' as IconName,
    buttonText: 'Filter',
    width: '400px',
    buttonAction: () => {},
  },
};

export const CustomWidth: Story = {
  render: (args) => (
      <div style={{ display: 'flex', gap: 16, flexDirection: 'column' }}>
        <Search {...args} width="300px" placeholder="Narrow" />
        <Search {...args} width="600px" placeholder="Wide" />
      </div>
  ),
  args: {
    iconName: 'Search' as IconName,
    buttonIconName: 'Filter' as IconName,
    buttonText: 'Filter',
    disabled: false,
    loading: false,
    buttonAction: () => {},
  },
};

export const WithAction: Story = {
  args: {
    iconName: 'Search' as IconName,
    buttonIconName: 'Filter' as IconName,
    buttonText: 'Apply',
    placeholder: 'Type to search...',
    width: '480px',
    buttonAction: () => alert('Filter applied'),
    disabled: false,
    loading: false,
  },
};

export const CustomIcons: Story = {
  render: () => {
    const [data, setData] = useState('');
    const variants = ['Search', 'Filter', 'Home', 'Menu'];

    useEffect(() => {
      console.log(data)
    }, [data]);

    return (
        <div style={ { maxWidth: 800, padding: 16, display: 'flex', flexDirection: 'column', gap: 16 } }>
          <div style={ { display: 'flex', gap: 16, flexWrap: 'wrap' } }>
            { variants.map((name) => (
                <Search
                    onChange={setData}
                    key={ name }
                    iconName={ name as IconName }
                    buttonIconName="Filter"
                    buttonText="Go"
                    placeholder={ `Using ${ name }` }
                    width="350px"
                    buttonAction={ () => {
                    } }
                />
            )) }
          </div>
        </div>
    );
  },
};
