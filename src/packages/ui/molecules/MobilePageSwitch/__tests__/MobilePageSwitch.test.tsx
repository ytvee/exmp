import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MobilePageSwitch } from '../MobilePageSwitch';

// Mock the Icon component
vi.mock('../../atoms/Icon', () => ({
  Icon: ({ name, className, ...props }: { name: string; className?: string; [key: string]: unknown }) => (
    <span data-testid={`icon-${name}`} className={className} {...props} />
  ),
}));

describe('MobilePageSwitch', () => {
  const defaultProps = {
    currentPageId: 'home',
    onPageChange: vi.fn(),
    onBackClick: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly', () => {
    render(<MobilePageSwitch {...defaultProps} />);
    
    expect(screen.getByText('Back')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByTestId('icon-ArrowLeft')).toBeInTheDocument();
    expect(screen.getByTestId('icon-ArrowDropDown')).toBeInTheDocument();
    expect(screen.getByTestId('icon-MoreHoriz')).toBeInTheDocument();
  });

  it('calls onBackClick when back button is clicked', () => {
    render(<MobilePageSwitch {...defaultProps} />);
    
    const backButton = screen.getByText('Back').closest('button');
    fireEvent.click(backButton!);
    
    expect(defaultProps.onBackClick).toHaveBeenCalledTimes(1);
  });

  it('calls onPageChange when home button is clicked', () => {
    render(<MobilePageSwitch {...defaultProps} />);
    
    const homeButton = screen.getByText('Home').closest('button');
    fireEvent.click(homeButton!);
    
    expect(defaultProps.onPageChange).toHaveBeenCalledWith('home');
  });

  it('applies disabled state correctly', () => {
    render(<MobilePageSwitch {...defaultProps} disabled={true} />);
    
    const component = screen.getByTestId('icon-ArrowLeft').closest('[data-asi-component="mobilepageswitch"]');
    expect(component?.className).toContain('asi-mobile-page-switch--disabled');
  });

  it('applies custom className', () => {
    render(<MobilePageSwitch {...defaultProps} className="custom-class" />);
    
    const component = screen.getByTestId('icon-ArrowLeft').closest('[data-asi-component="mobilepageswitch"]');
    expect(component).toHaveClass('custom-class');
  });

  it('has correct data attribute', () => {
    render(<MobilePageSwitch {...defaultProps} />);
    
    const component = screen.getByTestId('icon-ArrowLeft').closest('[data-asi-component="mobilepageswitch"]');
    expect(component).toHaveAttribute('data-asi-component', 'mobilepageswitch');
  });

  it('renders children content', () => {
    render(
      <MobilePageSwitch {...defaultProps}>
        <div data-testid="child-content">Child Content</div>
      </MobilePageSwitch>
    );
    
    expect(screen.getByTestId('child-content')).toBeInTheDocument();
  });
});