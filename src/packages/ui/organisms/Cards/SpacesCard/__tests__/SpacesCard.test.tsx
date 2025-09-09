import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SpacesCard } from '../SpacesCard';

describe('SpacesCard', () => {
  it('renders correctly', () => {
    render(<SpacesCard title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<SpacesCard className="custom-class" title="Test" />);
    const element = screen.getByText('Test').closest('[data-asi-component="spacescard"]');
    expect(element?.className).toMatch(/custom-class/);
  });

  it('has correct data attribute', () => {
    render(<SpacesCard title="Test" />);
    const element = screen.getByText('Test').closest('[data-asi-component="spacescard"]');
    expect(element).toHaveAttribute('data-asi-component', 'spacescard');
  });
}); 