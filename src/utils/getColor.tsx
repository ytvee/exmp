import type { ColorPalette } from './../tokens/Themes/Theme.type';

export const getColor = (theme: { colors: ColorPalette }, color: string): string => {
  const keys = color.split('.');
  let value: ColorPalette | Record<string, unknown> | string = theme.colors;

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      const nextValue = (value as Record<string, unknown>)[key];
      value = nextValue as ColorPalette | Record<string, unknown> | string;
    } else {
      return theme.colors.text.primary;
    }
  }

  return typeof value === 'string' ? value : theme.colors.text.primary;
};
