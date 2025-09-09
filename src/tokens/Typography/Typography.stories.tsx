import type { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';
import React from 'react';
import { QAStory } from './Stories/QA';

const meta: Meta<typeof Typography> = {
  title: 'Tokens/Typography',
  component: Typography,
};

export default meta;

type Story = StoryObj<typeof Typography>;
export const QA: StoryObj = {
  render: () => <QAStory></QAStory>,
};
export const Headlines: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography variant="h1" color="secondary.red">
        Headline1
      </Typography>
      <Typography variant="h2" color="primary.main">
        Headline2
      </Typography>
      <Typography variant="h3" color="text.secondary">
        Headline3
      </Typography>
      <Typography variant="h4">Headline4</Typography>
      <Typography variant="h5">Headline5</Typography>
    </div>
  ),
};

export const BodyText: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography variant="body1">Body1</Typography>
      <Typography variant="body2">Body2</Typography>
      <Typography variant="body3">Body3</Typography>
      <Typography variant="body4">Body4</Typography>
    </div>
  ),
};
