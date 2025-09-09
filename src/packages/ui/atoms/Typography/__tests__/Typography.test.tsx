import React from 'react';
import { render, screen } from '@testing-library/react';
import { Typography } from '../Typography';

describe('Typography', () => {
  it('renders with default props', () => {
    render(<Typography>Test text</Typography>);
    const element = screen.getByText('Test text');
    
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('P');
    expect(element.className).toMatch(/asi-typography--body1/);
    expect(element.className).toMatch(/asi-typography--primary/);
  });

  it('renders with custom variant', () => {
    render(<Typography variant="h1">Heading</Typography>);
    const element = screen.getByText('Heading');
    
    expect(element.tagName).toBe('H1');
    expect(element.className).toMatch(/asi-typography--h1/);
  });

  it('renders with custom color', () => {
    render(<Typography color="error">Error text</Typography>);
    
    const element = screen.getByText('Error text');
    expect(element.className).toMatch(/asi-typography--error/);
  });

  it('renders with custom element', () => {
    render(<Typography variant="h2" as="span">Custom element</Typography>);
    const element = screen.getByText('Custom element');
    
    expect(element.tagName).toBe('SPAN');
    expect(element.className).toMatch(/asi-typography--h2/);
  });

  it('renders all heading variants', () => {
    const headingVariants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    
    headingVariants.forEach(variant => {
      const { unmount } = render(
        <Typography variant={variant as unknown as TypographyVariant}>
          Heading {variant}
        </Typography>
      );
      
      const element = screen.getByText(`Heading ${variant}`);
      expect(element.className).toMatch(new RegExp(`asi-typography--${variant}`));
      expect(element.tagName).toBe(variant.toUpperCase());
      
      unmount();
    });
  });

  it('renders all body variants', () => {
    const bodyVariants = ['body1', 'body2', 'body3', 'body4'];
    
    bodyVariants.forEach(variant => {
      const { unmount } = render(
        <Typography variant={variant as unknown as TypographyVariant}>
          Body {variant}
        </Typography>
      );
      
      const element = screen.getByText(`Body ${variant}`);
      expect(element.className).toMatch(new RegExp(`asi-typography--${variant}`));
      expect(element.tagName).toBe('P');
      
      unmount();
    });
  });

  it('renders special variants', () => {
    render(<Typography variant="caption">Caption text</Typography>);
    expect(screen.getByText('Caption text').className).toMatch(/asi-typography--caption/);
    
    render(<Typography variant="overline">Overline text</Typography>);
    expect(screen.getByText('Overline text').className).toMatch(/asi-typography--overline/);
  });

  it('renders all color variants', () => {
    const colors = [
      'primary', 'secondary', 'tertiary', 'disabled',
      'error', 'success', 'warning', 'info',
      'inverse', 'inverse-secondary', 'inverse-disabled'
    ];
    
    colors.forEach(color => {
      const { unmount } = render(
        <Typography color={color as unknown as TypographyColor}>
          {color} text
        </Typography>
      );
      
      const element = screen.getByText(`${color} text`);
      expect(element.className).toMatch(new RegExp(`asi-typography--${color}`));
      
      unmount();
    });
  });

  it('forwards additional props', () => {
    render(
      <Typography 
        data-testid="typography"
      >
        Test
      </Typography>
    );
    
    const element = screen.getByTestId('typography');
    expect(element).toHaveAttribute('data-testid', 'typography');
  });

  it('renders with custom style prop', () => {
    const customStyle = { color: 'red', fontSize: '20px' };
    render(<Typography style={customStyle}>Custom Style</Typography>);
    const element = screen.getByText('Custom Style');
    expect(element).toHaveStyle('color: rgb(255, 0, 0)');
    expect(element).toHaveStyle('font-size: 20px');
  });

  it('renders with custom className prop', () => {
    const customClass = 'custom-class';
    render(<Typography className={customClass}>Custom Class</Typography>);
    const element = screen.getByText('Custom Class');
    expect(element).toHaveClass(customClass);
  });

  it('renders with custom data attributes', () => {
    const customData = { 'data-testid': 'custom-typography', 'data-custom': 'value' } as Record<string, unknown>;
    render(<Typography {...customData}>Custom Data</Typography>);
    const element = screen.getByTestId('custom-typography');
    expect(element).toHaveAttribute('data-custom', 'value');
  });
}); 