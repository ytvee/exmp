import React from 'react';
import { StyledTypography } from './Typography.styles';
import type { TypographyProps } from './Typography.type';
import { useTheme } from 'styled-components';
import { getColor } from '@utils/getColor';
import { lightTheme } from '@tokens/Themes/Theme';

const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  children,
  color,
  ...props
}) => {
  const Component = variant.startsWith('h') ? variant : 'div';
  const theme = useTheme() || lightTheme;
  const themeColor = color ? getColor(theme, color) : undefined;

  return (
    <StyledTypography
      as={Component}
      variant={variant}
      $color={themeColor}
      $textAlign={props.textAlign}
      theme={theme}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
