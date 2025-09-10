import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';
import '@/storybookStyles.css';
import React from 'react';

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'body3', 'body4', 'caption', 'overline'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'disabled', 'error', 'success', 'warning', 'info', 'inverse', 'inverse-secondary', 'inverse-disabled'],
    },
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'body1',
    children: 'This is default typography text',
  },
};

export const Headings: Story = {
  render: () => (
    <div className='asi-story-column'>
      <Typography variant="h1">Heading 1 - Main Title</Typography>
      <Typography variant="h2">Heading 2 - Section Title</Typography>
      <Typography variant="h3">Heading 3 - Subsection Title</Typography>
      <Typography variant="h4">Heading 4 - Card Title</Typography>
      <Typography variant="h5">Heading 5 - Small Title</Typography>
      <Typography variant="h6">Heading 6 - Caption Title</Typography>
    </div>
  ),
};

export const BodyText: Story = {
  render: () => (
    <div className='asi-story-column'>
      <Typography variant="body1">
        Body 1 - This is the main body text used for paragraphs and general content. It provides good readability and is suitable for most text content.
      </Typography>
      <Typography variant="body2">
        Body 2 - This is smaller body text used for secondary content, descriptions, and supporting information.
      </Typography>
      <Typography variant="body3">
        Body 3 - This is even smaller text used for fine print, metadata, and less important information.
      </Typography>
      <Typography variant="body4">
        Body 4 - This is the smallest body text, used for very small labels and metadata.
      </Typography>
    </div>
  ),
};

export const SpecialVariants: Story = {
  render: () => (
    <div className='asi-story-column'>
      <Typography variant="caption">
        Caption - This is caption text, typically used for image captions or small notes.
      </Typography>
      <Typography variant="overline">
        Overline - This is overline text, used for labels and small headings.
      </Typography>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className='asi-story-column'>
      <Typography variant="body1" color="primary">Primary color text</Typography>
      <Typography variant="body1" color="secondary">Secondary color text</Typography>
      <Typography variant="body1" color="tertiary">Tertiary color text</Typography>
      <Typography variant="body1" color="disabled">Disabled color text</Typography>
      <Typography variant="body1" color="error">Error color text</Typography>
      <Typography variant="body1" color="success">Success color text</Typography>
      <Typography variant="body1" color="warning">Warning color text</Typography>
      <Typography variant="body1" color="info">Info color text</Typography>
    </div>
  ),
};

export const InverseColors: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '1rem',
      backgroundColor: '#1a1a1a',
      padding: '2rem',
      borderRadius: '8px'
    }}>
      <Typography variant="body1" color="inverse">Inverse color text</Typography>
      <Typography variant="body1" color="inverse-secondary">Inverse secondary color text</Typography>
      <Typography variant="body1" color="inverse-disabled">Inverse disabled color text</Typography>
    </div>
  ),
};

export const CustomElement: Story = {
  render: () => (
    <div className='asi-story-column'>
      <Typography variant="h3" as="span">
        This is an h3 variant rendered as a span element
      </Typography>
      <Typography variant="body1" as="div">
        This is body1 variant rendered as a div element
      </Typography>
      <Typography variant="body2" as="h1">
        This is body2 variant rendered as an h1 element
      </Typography>
    </div>
  ),
};

export const Responsive: Story = {
  render: () => (
    <div className='asi-story-column'>
      <Typography variant="h1">
        Responsive Heading - This will scale down on mobile devices
      </Typography>
      <Typography variant="h2">
        Another responsive heading
      </Typography>
      <Typography variant="body1">
        This body text will also adjust for different screen sizes.
      </Typography>
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}; 