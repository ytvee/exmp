export type HeadlineVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
export type BodyVariant = 'body1' | 'body2' | 'body3' | 'body4';

export interface TypographyProps {
  variant?: HeadlineVariant | BodyVariant;
  children: React.ReactNode;
  color?: string;
  textAlign?: string;
}
