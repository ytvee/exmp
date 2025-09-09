import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';
import ThemeProvider, { useTheme } from './ThemeProvider';

// Styled components for different theme aspects
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.background.paper1};
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.typography.body.body1.fontFamily};
`;

const Section = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.text.disabled};
  padding: 16px;
  border-radius: 8px;
`;

const ColorBlock = styled.div<{ color: string }>`
  width: 100px;
  height: 100px;
  background-color: ${({ color }) => color};
  border: 1px solid #ccc;
  margin-right: 8px;
`;

const TypographySample = styled.div<{ fontSize: string; lineHeight: string }>`
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${({ theme }) => theme.grid.gutter.desktop};
  background-color: ${({ theme }) => theme.colors.background.paper2};
  padding: ${({ theme }) => theme.grid.margin.desktop};
`;

const GridItem = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-align: center;
  padding: 8px;
  border-radius: 4px;
`;

const meta: Meta = {
  title: 'Providers/ThemeProvider',
  component: ThemeProvider,
};

export default meta;

// Template for the Theme demo component
const Template: StoryFn = () => {
  return (
    <ThemeProvider>
      <ThemeContent />
    </ThemeProvider>
  );
};

const ThemeContent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <h1>Theme Demo</h1>
      <p>Current Theme: {theme.isDark ? 'Dark' : 'Light'}</p>

      <Section>
        <h2>Color Palette</h2>
        <div style={{ display: 'flex' }}>
          <ColorBlock color={theme.colors.primary.main} />
          <ColorBlock color={theme.colors.secondary.red} />
          <ColorBlock color={theme.colors.secondary.green} />
          <ColorBlock color={theme.colors.secondary.blue} />
          <ColorBlock color={theme.colors.secondary.purple} />
        </div>
      </Section>

      <Section>
        <h2>Typography</h2>
        {Object.entries(theme.typography.headlines).map(
          ([key, { fontSize, lineHeight }]) => (
            <TypographySample
              key={key}
              fontSize={fontSize}
              lineHeight={lineHeight}
            >
              {key.toUpperCase()} - Font Size: {fontSize}, Line Height:{' '}
              {lineHeight}
            </TypographySample>
          ),
        )}
      </Section>

      <Section>
        <h2>Grid System</h2>
        <GridContainer>
          {Array.from({ length: 12 }, (_, i) => (
            <GridItem key={i}>Col {i + 1}</GridItem>
          ))}
        </GridContainer>
      </Section>

      <Section>
        <h2>Breakpoints</h2>
        <p>Small (sm): {theme.grid.breakpoints.sm}</p>
        <p>Medium (md): {theme.grid.breakpoints.md}</p>
        <p>Large (lg): {theme.grid.breakpoints.lg}</p>
        <p>Extra Large (xl): {theme.grid.breakpoints.xl}</p>
      </Section>

      <button onClick={toggleTheme}>Toggle Theme</button>
    </Container>
  );
};

// Default story for the Theme component
export const Default = Template.bind({});
