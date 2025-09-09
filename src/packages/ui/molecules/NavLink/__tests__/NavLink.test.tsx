import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { NavLink } from '../NavLink';

describe('NavLink', () => {
  it('renders correctly', () => {
    render(<NavLink>Test Content</NavLink>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies variant class correctly', () => {
    render(<NavLink isActive>Test</NavLink>);
    const element = screen.getByText('Test');
    expect(element.className).toMatch(/asi-navlink--active/);
  });

  it('applies size class correctly', () => {
    render(<NavLink>Test</NavLink>);
    const element = screen.getByText('Test');
    expect(element.className).toMatch(/asi-navlink/);
  });

  it('applies disabled state correctly', () => {
    render(<NavLink>Test</NavLink>);
    const element = screen.getByText('Test');
    expect(element.className).toMatch(/asi-navlink/);
  });

  it('applies loading state correctly', () => {
    render(<NavLink>Test</NavLink>);
    const element = screen.getByText('Test');
    expect(element.className).toMatch(/asi-navlink/);
  });

  it('applies custom className', () => {
    render(<NavLink className="custom-class">Test</NavLink>);
    const element = screen.getByText('Test');
    expect(element).toHaveClass('custom-class');
  });

  it('has correct data attribute', () => {
    render(<NavLink>Test</NavLink>);
    const element = screen.getByText('Test');
    expect(element).toHaveAttribute('data-asi-component', 'navlink');
  });
}); 