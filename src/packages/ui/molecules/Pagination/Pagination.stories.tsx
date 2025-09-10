import React, { useState } from 'react';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';
import type { PaginationProps } from './Pagination.types';
import '@/storybookStyles.css';

const meta: Meta<typeof Pagination> = {
  title: 'molecules/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Pagination component description',
      },
    },
  },
};

export default meta;

// Story type based on component props
type Story = StoryObj<typeof Pagination>;

export const Variants: Story = {
  render: () => {
    const pageCounts = [5, 20];
    const handlePageChange = () => {};

    return (
      <div className="asi-story-column">
        <h1>Q&A - Pagination</h1>
        {pageCounts.map((count, index) => (
          <div key={index} title={`${count} pages`}>
            <Pagination onPageChange={handlePageChange} currentPage={1} totalPages={count} />
          </div>
        ))}
      </div>
    );
  },
};

const Template: StoryFn<PaginationProps> = (args) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    args.onPageChange(page);
  };

  return <Pagination {...args} currentPage={currentPage} onPageChange={handlePageChange} />;
};

export const Default = Template.bind({});
Default.args = {
  currentPage: 1,
  totalPages: 5,
};

Default.parameters = {
  docs: {
    storyDescription:
      'A basic pagination component that allows navigation between pages. The current page is highlighted.',
  },
};

export const CustomPageCount = Template.bind({});
CustomPageCount.args = {
  currentPage: 3,
  totalPages: 20,
};

CustomPageCount.parameters = {
  docs: {
    storyDescription:
      'Pagination with more pages. Users can navigate from page 1 to page 20.',
  },
};

export const WithCustomPageSize: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    pageSize: 25,
    onPageChange: (page: number) => console.log('Page changed to:', page),
    onPageSizeChange: (size: number) => console.log('Page size changed to:', size),
  },
};
