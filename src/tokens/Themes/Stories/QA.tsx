import React from 'react';
import { Screen } from '@helpers/Screen';
import { SectionTitle } from '@helpers/SectionTitle';
import { Content } from '@helpers/Content';
import { Element } from '@helpers/Element';
import { lightTheme, darkTheme } from '../Theme';
import {
  ColorBlockWrapper,
  ColorPreview,
  ColorLabel,
  ColorValue,
  GradientGridWrapper,
  GradientBlockWrapper,
  GradientPreview,
  GradientLabel,
  GradientValue,
} from './QA.style';

const ColorBlock = ({ color, label }: { color: string; label: string }) => (
  <ColorBlockWrapper>
    <ColorPreview color={color} />
    <ColorLabel>{label}</ColorLabel>
    <ColorValue>{color}</ColorValue>
  </ColorBlockWrapper>
);

const GradientGrid = ({ gradients }: { gradients: Record<string, string> }) => (
  <GradientGridWrapper>
    {Object.entries(gradients).map(([key, value]) => (
      <GradientBlockWrapper key={key}>
        <GradientPreview gradient={value} />
        <GradientLabel>{key}</GradientLabel>
        <GradientValue>{value}</GradientValue>
      </GradientBlockWrapper>
    ))}
  </GradientGridWrapper>
);

export const PresentationColors = () => {
  return (
    <Screen>
      <SectionTitle>Color Presentation</SectionTitle>

      <Content title="Text Colors">
        <Element description="Dark Mode Text">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {Object.entries(darkTheme.colors.text).map(([key, value]) => (
              <ColorBlock
                key={key}
                label={`Text Dark - ${key}`}
                color={value}
              />
            ))}
          </div>
        </Element>
        <Element description="Light Mode Text">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {Object.entries(lightTheme.colors.text).map(([key, value]) => (
              <ColorBlock
                key={key}
                label={`Text Light - ${key}`}
                color={value}
              />
            ))}
          </div>
        </Element>
      </Content>

      <Content title="Background Colors">
        <Element description="">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {Object.entries(lightTheme.colors.background).map(
              ([key, value]) => (
                <ColorBlock
                  key={key}
                  label={`Background Light - ${key}`}
                  color={value}
                />
              ),
            )}
            {Object.entries(darkTheme.colors.background).map(([key, value]) => (
              <ColorBlock
                key={key}
                label={`Background Dark - ${key}`}
                color={value}
              />
            ))}
          </div>
        </Element>
      </Content>

      <Content title="Gradient Colors">
        <Element description="">
          <GradientGrid gradients={lightTheme.colors.gradients} />
        </Element>
      </Content>

      <Content title="Primary & Secondary Colors">
        <Element description="">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {Object.entries(lightTheme.colors.primary).map(([key, value]) => (
              <ColorBlock key={key} label={`Primary - ${key}`} color={value} />
            ))}
            {Object.entries(lightTheme.colors.secondary).map(([key, value]) => (
              <ColorBlock
                key={key}
                label={`Secondary - ${key}`}
                color={value}
              />
            ))}
          </div>
        </Element>
      </Content>
    </Screen>
  );
};
