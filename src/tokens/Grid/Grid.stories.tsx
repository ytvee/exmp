import type { Meta, StoryObj } from '@storybook/react';
import Grid from './Grid'; // Import the Grid component
import GridItem from './GridItem';
import styled from 'styled-components';
import React from 'react';
import { QAGrid } from './Stories/QAGrid';

const meta: Meta<typeof Grid> = {
  title: 'Tokens/Grid',
  component: Grid,
};

export default meta;

type Story = StoryObj<typeof Grid>;

export const QA: StoryObj = {
  render: () => <QAGrid />,
};

const StyledItem = styled(GridItem)`
  background-color: #e0e0e0;
  padding: 16px;
  text-align: center;
  border-radius: 8px;
  box-sizing: border-box;
`;

export const DefaultGrid: Story = {
  render: () => (
    <Grid>
      <StyledItem xs={6} sm={4} md={4} lg={3}>
        Item 1
      </StyledItem>
      <StyledItem xs={6} sm={4} md={4} lg={3}>
        Item 2
      </StyledItem>
      <StyledItem xs={6} sm={4} md={4} lg={3}>
        Item 3
      </StyledItem>
      <StyledItem xs={6} sm={4} md={4} lg={3}>
        Item 4
      </StyledItem>
    </Grid>
  ),
};

export const ResponsiveGrid: Story = {
  render: () => (
    <Grid>
      <StyledItem xs={6} sm={4} md={4} lg={2}>
        Responsive Item 1
      </StyledItem>
      <StyledItem xs={6} sm={4} md={4} lg={2}>
        Responsive Item 2
      </StyledItem>
      <StyledItem xs={6} sm={4} md={4} lg={2}>
        Responsive Item 3
      </StyledItem>
      <StyledItem xs={6} sm={4} md={4} lg={2}>
        Responsive Item 4
      </StyledItem>
      <StyledItem xs={6} sm={4} md={4} lg={2}>
        Responsive Item 5
      </StyledItem>
      <StyledItem xs={6} sm={4} md={4} lg={2}>
        Responsive Item 6
      </StyledItem>
    </Grid>
  ),
};
