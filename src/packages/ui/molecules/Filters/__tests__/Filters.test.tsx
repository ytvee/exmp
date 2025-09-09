import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Filters } from '../Filters';

describe('Filters', () => {
  it('renders correctly', () => {
    render(<Filters>Test Content</Filters>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies variant class correctly', () => {
    render(<Filters variant="primary">Test</Filters>);
    const element = screen.getByText('Test');
    expect(element.className).toMatch(/asi-filters--primary/);
  });

  it('applies size class correctly', () => {
    render(<Filters size="large">Test</Filters>);
    const element = screen.getByText('Test');
    expect(element.className).toMatch(/asi-filters--large/);
  });

  it('applies disabled state correctly', () => {
    render(<Filters disabled>Test</Filters>);
    const element = screen.getByText('Test');
    expect(element.className).toMatch(/asi-filters--disabled/);
  });

  it('applies loading state correctly', () => {
    render(<Filters loading>Test</Filters>);
    const element = screen.getByText('Test');
    expect(element.className).toMatch(/asi-filters--loading/);
  });

  it('applies custom className', () => {
    render(<Filters className="custom-class">Test</Filters>);
    const element = screen.getByText('Test');
    expect(element).toHaveClass('custom-class');
  });

  it('has correct data attribute', () => {
    render(<Filters>Test</Filters>);
    const element = screen.getByText('Test');
    expect(element).toHaveAttribute('data-asi-component', 'filters');
  });
}); 