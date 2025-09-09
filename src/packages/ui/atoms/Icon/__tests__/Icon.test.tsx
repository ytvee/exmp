import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi, expect, describe, it } from 'vitest';
import '@testing-library/jest-dom';
import { Icon } from '../Icon';
import type { IconSize } from '../Icon.types';
import { ICON_NAMES } from '../Icon.stories';

describe('Icon', () => {
  it('renders correctly with default props', () => {
    render(<Icon name="Settings" />);
    const icon = screen.getByTestId('icon-Settings');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('data-asi-component', 'icon');
  });

  it('renders correctly with default props for all icons', () => {
    ICON_NAMES.forEach(iconName => {
    render(<Icon name={iconName} />);
    const icon = screen.getByTestId(`icon-${iconName}`);
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('data-asi-component', 'icon');})
  });

  it('applies size class correctly', () => {
    render(<Icon name="Settings" size="lg" />);
    const icon = screen.getByTestId('icon-Settings');
    expect(icon.className).toMatch(/asi-icon--lg/);
  });

  it('applies custom className', () => {
    render(<Icon name="Settings" className="custom-class" />);
    const icon = screen.getByTestId('icon-Settings');
    expect(icon).toHaveClass('custom-class');
  });

  it('applies color style correctly', () => {
    render(<Icon name="Settings" color="red" />);
    const icon = screen.getByTestId('icon-Settings');
    expect(icon).toHaveStyle({ color: 'rgb(255, 0, 0)' });
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Icon name="Settings" onClick={handleClick} />);
    const icon = screen.getByTestId('icon-Settings');
    
    fireEvent.click(icon);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders different icons correctly', () => {
    const { rerender } = render(<Icon name="Settings" />);
    expect(screen.getByTestId('icon-Settings')).toBeInTheDocument();

    rerender(<Icon name="Home" />);
    expect(screen.getByTestId('icon-Home')).toBeInTheDocument();
  });

  it('uses custom test id when provided', () => {
    render(<Icon name="Settings" data-testid="custom-test-id" />);
    expect(screen.getByTestId('custom-test-id')).toBeInTheDocument();
  });

  it('handles all size variants', () => {
    const sizes: IconSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
    sizes.forEach(size => {
      const { unmount } = render(<Icon name="Settings" size={size} />);
      const icon = screen.getByTestId('icon-Settings');
      expect(icon.className).toMatch(new RegExp(`asi-icon--${size}`));
      unmount();
    });
  });

  it('returns null for invalid icon name', () => {
    // @ts-expect-error - testing invalid icon name
    const { container } = render(<Icon name="InvalidIcon" />);
    expect(container.firstChild).toBeNull();
  });

  it('applies clickable class when onClick is provided', () => {
    const handleClick = vi.fn();
    render(<Icon name="Settings" onClick={handleClick} />);
    const icon = screen.getByTestId('icon-Settings');
    expect(icon.className).toMatch(/asi-icon--clickable/);
  });
}); 