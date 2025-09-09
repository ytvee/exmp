import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';
import '../../../../storybookStyles.css';
import React from 'react';

const meta: Meta<typeof Loader> = {
  title: 'Atoms/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Компонент для отображения состояния загрузки. Поддерживает два размера: small и large.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'large'],
      description: 'Размер лоадера',
    },
    className: {
      control: { type: 'text' },
      description: 'Дополнительный CSS класс',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Large: Story = {
  render: () => (
    <div className='asi-story-relative-conteiner'>
        <Loader size="large" />
      </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className='asi-story-row'>
      <div className='asi-story-relative-conteiner'>
        <Loader size="small" />
      </div>
      <div className='asi-story-relative-conteiner'>
        <Loader size="large" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Сравнение размеров лоадера.',
      },
    },
  },
};

export const InlineLoader: Story = {
  render: () => (
    <div className='asi-story-row'>
      <span>Loading...</span>
      <div className='asi-story-relative-conteiner'>
        <Loader size="small" className="asi-loader--inline" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Лоадер встроенный в текст.',
      },
    },
  },
};

export const WithCustomStyling: Story = {
  render: () => (
    <div className='asi-story-relative-conteiner'>
      <Loader size="large" className="custom-loader" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Лоадер с кастомным контейнером.',
      },
    },
  },
};
