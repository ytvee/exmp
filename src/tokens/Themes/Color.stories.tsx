import { Meta, StoryObj } from '@storybook/react';
import { lightTheme, darkTheme } from './Theme';
import React from 'react';
import { PresentationColors } from './Stories/QA';

// Meta configuration for Storybook
const meta: Meta = {
  title: 'Tokens/Color Palette',
  parameters: {
    docs: {
      description: {
        component:
          'Color system with different variants for text, background, gradients, and more.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof lightTheme> & StoryObj<typeof darkTheme>;

export const QA: StoryObj = {
  render: () => <PresentationColors />,
};

// Function to display colors as blocks with their names
const ColorBlock = ({ color, label }: { color: string; label: string }) => (
  <div
    style={{
      display: 'flex',
      gap: '10px',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <div
      style={{
        backgroundColor: color,
        padding: '20px',
        borderRadius: '5px',
        width: '150px',
        height: '50px',
      }}
    />
    <p style={{ fontSize: '16px', margin: 0 }}>{label}</p>
    <p style={{ fontSize: '16px', margin: 0 }}>{color}</p>
  </div>
);

// Display text colors for different text variants
export const TextColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {Object.entries(lightTheme.colors.text).map(([textColor, colorValue]) => (
        <ColorBlock key={textColor} label={`Text Dark`} color={colorValue} />
      ))}
      {Object.entries(darkTheme.colors.text).map(([textColor, colorValue]) => (
        <ColorBlock key={textColor} label={`Text Light`} color={colorValue} />
      ))}
    </div>
  ),
};

// Display background colors for different background variants
export const BackgroundColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {Object.entries(lightTheme.colors.background).map(
        ([backgroundColor, colorValue]) => (
          <ColorBlock
            key={backgroundColor}
            label={`Background Light`}
            color={colorValue}
          />
        ),
      )}
      {Object.entries(darkTheme.colors.background).map(
        ([backgroundColor, colorValue]) => (
          <ColorBlock
            key={backgroundColor}
            label={`Background Dark`}
            color={colorValue}
          />
        ),
      )}
    </div>
  ),
};

// Display gradient colors for different gradient variants
export const Gradients: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {Object.entries(lightTheme.colors.gradients).map(
        ([gradient, colorValue]) => (
          <div
            key={gradient}
            style={{
              display: 'flex',
              gap: '10px',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                background: colorValue,
                padding: '20px',
                borderRadius: '5px',
                width: '150px',
                height: '50px',
              }}
            />
            <p style={{ fontSize: '16px', margin: 0 }}>
              {gradient.replace(/([A-Z])/g, ' $1')}
            </p>
          </div>
        ),
      )}
    </div>
  ),
};

// Display primary and secondary colors based on type
export const PrimaryAndSecondaryColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {Object.entries(lightTheme.colors.primary).map(([key, value]) => (
        <ColorBlock
          key={`primary-${key}`}
          label={`Primary ${key}`}
          color={value}
        />
      ))}
      {Object.entries(lightTheme.colors.secondary).map(
        ([secondaryColor, colorValue]) => (
          <ColorBlock
            key={secondaryColor}
            label={`Secondary ${secondaryColor.charAt(0).toUpperCase() + secondaryColor.slice(1)}`}
            color={colorValue}
          />
        ),
      )}
    </div>
  ),
};
