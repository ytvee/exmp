import styled from 'styled-components';
import type { HeadlineVariant, BodyVariant } from './Typography.type';
import { lightTheme } from './../Themes/Theme';

export const StyledTypography = styled.div<{
  variant: HeadlineVariant | BodyVariant;
  $color?: string;
  $textAlign?: string;
  theme: typeof lightTheme;
}>`
  margin: 0;
  padding: 0;
  font-style: normal;
  color: ${(props) => props.$color || 'inherit'};
  text-align: ${(props) => props.$textAlign || 'center'};

  ${({ theme = lightTheme, variant }) => {
    const typographyStyle = variant.startsWith('h')
      ? theme.typography.headlines[variant as HeadlineVariant]
      : theme.typography.body[variant as BodyVariant];

    return `
      font-size: ${typographyStyle.fontSize};
      line-height: ${typographyStyle.lineHeight};
      letter-spacing: ${typographyStyle.letterSpacing};
      font-family: ${typographyStyle.fontFamily};
      font-weight: ${typographyStyle.fontWeight};
    `;
  }}
`;
