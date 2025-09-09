import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { Button } from '../Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Test Content</Button>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies variant class correctly', () => {
    render(<Button variant="primary">Test</Button>);
    const element = screen.getByText('Test').closest('button');
    expect(element?.className).toMatch(/asi-button--primary/);
  });

  it('applies size class correctly', () => {
    render(<Button size="large">Test</Button>);
    const element = screen.getByText('Test').closest('button');
    expect(element?.className).toMatch(/asi-button--large/);
  });

  it('applies shape class correctly', () => {
    render(<Button shape="circle">Test</Button>);
    const element = screen.getByText('Test').closest('button');
    expect(element?.className).toMatch(/asi-button--circle/);
  });

  it('applies disabled state correctly', () => {
    render(<Button disabled>Test</Button>);
    const element = screen.getByText('Test').closest('button');
    expect(element).toBeDisabled();
    expect(element?.className).toMatch(/asi-button--disabled/);
  });

  it('shows spinner and disables when loading', () => {
    render(<Button loading>Test</Button>);
    const element = screen.getByText('Test').closest('button');
    expect(element).toBeDisabled();
    expect(element?.className).toMatch(/asi-button--loading/);
    expect(element?.querySelector('[class*="asi-button__spinner"]')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with start icon', () => {
    const startIcon = <span data-testid="start-icon">🚀</span>;
    render(<Button startIcon={startIcon}>Test</Button>);
    expect(screen.getByTestId('start-icon')).toBeInTheDocument();
  });

  it('renders with end icon', () => {
    const endIcon = <span data-testid="end-icon">🎯</span>;
    render(<Button endIcon={endIcon}>Test</Button>);
    expect(screen.getByTestId('end-icon')).toBeInTheDocument();
  });

  it('applies custom width when provided', () => {
    render(<Button width="200px">Test</Button>);
    const element = screen.getByText('Test').closest('button');
    expect(element).toHaveStyle({ width: '200px' });
  });

  it('applies custom className when provided', () => {
    render(<Button className="custom-class">Test</Button>);
    const element = screen.getByText('Test').closest('button');
    expect(element?.className).toMatch(/custom-class/);
  });

  it('applies custom style when provided', () => {
    render(<Button style={{ borderWidth: '3px' }}>Test</Button>);
    const element = screen.getByText('Test').closest('button');
    expect(element).toHaveStyle({ borderWidth: '3px' });
  });

  it('renders with all variants', () => {
    const variants = ['primary', 'secondary', 'danger', 'outlined', 'text'] as const;
    
    variants.forEach(variant => {
      const { unmount } = render(<Button variant={variant}>Test {variant}</Button>);
      const element = screen.getByText(`Test ${variant}`).closest('button');
      expect(element?.className).toMatch(new RegExp(`asi-button--${variant}`));
      unmount();
    });
  });

  it('renders with all sizes', () => {
    const sizes = ['small', 'medium', 'large'] as const;
    
    sizes.forEach(size => {
      const { unmount } = render(<Button size={size}>Test {size}</Button>);
      const element = screen.getByText(`Test ${size}`).closest('button');
      expect(element?.className).toMatch(new RegExp(`asi-button--${size}`));
      unmount();
    });
  });

  it('renders with all shapes', () => {
    const shapes = ['rectangle', 'circle'] as const;
    
    shapes.forEach(shape => {
      const { unmount } = render(<Button shape={shape}>Test {shape}</Button>);
      const element = screen.getByText(`Test ${shape}`).closest('button');
      expect(element?.className).toMatch(new RegExp(`asi-button--${shape}`));
      unmount();
    });
  });

  it('combines multiple modifiers correctly', () => {
    render(
      <Button variant="primary" size="large" shape="circle" disabled>
        Test
      </Button>
    );
    const element = screen.getByText('Test').closest('button');
    expect(element?.className).toMatch(/asi-button--primary/);
    expect(element?.className).toMatch(/asi-button--large/);
    expect(element?.className).toMatch(/asi-button--circle/);
    expect(element?.className).toMatch(/asi-button--disabled/);
  });
}); 