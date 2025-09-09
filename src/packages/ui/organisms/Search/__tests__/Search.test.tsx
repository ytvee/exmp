import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Search } from '../Search';

describe('Search', () => {
  it('renders correctly', () => {
    render(<Search placeholder="Test Content" />);
    expect(screen.getByPlaceholderText('Test Content')).toBeInTheDocument();
  });

  it('applies disabled state correctly', () => {
    render(<Search disabled />);
    const element = screen.getByRole('textbox');
    expect(element).toBeDisabled();
  });

  it('applies loading state correctly', () => {
    render(<Search loading />);
    const element = screen.getByRole('button');
    expect(element).toBeDisabled();
  });

  it('applies custom className', () => {
    render(<Search className="custom-class" />);
    const element = screen.getByRole('textbox').closest('[data-asi-component="search"]');
    expect(element?.className).toMatch(/custom-class/);
  });

  it('has correct data attribute', () => {
    render(<Search />);
    const element = screen.getByRole('textbox').closest('[data-asi-component="search"]');
    expect(element).toHaveAttribute('data-asi-component', 'search');
  });
}); 