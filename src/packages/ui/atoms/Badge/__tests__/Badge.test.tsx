import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { Badge } from '../Badge';

describe('Badge', () => {
  it('renders when text is provided', () => {
    render(<Badge text="7" />);
    expect(screen.getByText('7')).toBeInTheDocument();
  });

  it('returns null when text is empty', () => {
    const { container } = render(<Badge text="" />);
    expect(container.firstChild).toBeNull();
  });

  it('clamps numbers greater than or equal to 9999', () => {
    render(<Badge text={10000} />);
    expect(screen.getByText('9999')).toBeInTheDocument();
  });

  it('applies custom className and data attribute', () => {
    render(<Badge text="1" className="custom" />);
    const element = screen.getByText('1').parentElement as HTMLElement;
    expect(element).toHaveClass('custom');
    expect(element).toHaveAttribute('data-asi-component', 'badge');
  });

  it('renders with different variants', () => {
    const variants = ['blue', 'red', 'green', 'purple', 'gray'] as const;
    
    variants.forEach(variant => {
      const { unmount } = render(<Badge text="99" variant={variant} />);
      const element = screen.getByText('99').parentElement as HTMLElement;
      expect(element?.className).toMatch(new RegExp(`asi-badge--${variant}`));
      unmount();
    });
  });

  it('renders with different sizes', () => {
    const sizes = ['small', 'medium', 'large'] as const;
    
    sizes.forEach(size => {
      const { unmount } = render(<Badge text="99" size={size} />);
      const element = screen.getByText('99').parentElement as HTMLElement;
      expect(element?.className).toMatch(new RegExp(`asi-badge--${size}`));
      unmount();
    });
  });

  it('applies double-digit class for numbers 10-99', () => {
    render(<Badge text="99" size="small" />);
    const element = screen.getByText('99').parentElement as HTMLElement;
    expect(element?.className).toMatch(/asi-badge--double-digit/);
  });

  it('does not apply double-digit class for single digit numbers', () => {
    render(<Badge text="5" size="small" />);
    const element = screen.getByText('5').parentElement as HTMLElement;
    expect(element?.className).not.toMatch(/asi-badge--double-digit/);
  });

  it('does not apply double-digit class for string content', () => {
    render(<Badge text="New" size="small" />);
    const element = screen.getByText('New').parentElement as HTMLElement;
    expect(element?.className).not.toMatch(/asi-badge--double-digit/);
  });

  it('renders with icon', () => {
    const icon = <span data-testid="test-icon">🚀</span>;
    render(<Badge text="99" icon={icon} />);
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('handles icon click correctly', () => {
    const onIconClick = vi.fn();
    const icon = <span data-testid="test-icon">🚀</span>;
    
    render(<Badge text="99" icon={icon} onIconClick={onIconClick} />);
    
    fireEvent.click(screen.getByTestId('test-icon'));
    expect(onIconClick).toHaveBeenCalledTimes(1);
  });

  it('handles main badge click correctly', () => {
    const onClick = vi.fn();
    render(<Badge text="99" onClick={onClick} />);
    
    fireEvent.click(screen.getByText('99').parentElement as HTMLElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders with start icon placement', () => {
    const icon = <span data-testid="test-icon">🚀</span>;
    render(<Badge text="99" icon={icon} iconPlacement="start" />);
    
    const element = screen.getByText('99').parentElement as HTMLElement;
    expect(element).toHaveStyle({ flexDirection: 'row-reverse' });
  });

  it('renders with end icon placement by default', () => {
    const icon = <span data-testid="test-icon">🚀</span>;
    render(<Badge text="99" icon={icon} />);
    
    const element = screen.getByText('99').parentElement as HTMLElement;
    expect(element).toHaveStyle({ flexDirection: 'row' });
  });
});
