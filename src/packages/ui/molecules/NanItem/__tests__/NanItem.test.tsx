import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { NanItem } from '../NanItem';

describe('NanItem', () => {
  it('renders correctly', () => {
    render(<NanItem type="base">Test Content</NanItem>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies variant class correctly', () => {
    render(<NanItem type="base" checked>Test</NanItem>);
    const element = screen.getByText('Test');
    expect(element.className).toMatch(/asi-nanitem--checked/);
  });

  it('applies size class correctly', () => {
    render(<NanItem type="base">Test</NanItem>);
    const element = screen.getByText('Test');
    expect(element.className).toMatch(/asi-nanitem/);
  });

  it('applies disabled state correctly', () => {
    render(<NanItem type="base">Test</NanItem>);
    const element = screen.getByText('Test');
    expect(element.className).toMatch(/asi-nanitem/);
  });

  it('applies loading state correctly', () => {
    render(<NanItem type="base">Test</NanItem>);
    const element = screen.getByText('Test');
    expect(element.className).toMatch(/asi-nanitem/);
  });

  it('applies custom className', () => {
    render(<NanItem type="base" className="custom-class">Test</NanItem>);
    const element = screen.getByText('Test');
    expect(element).toHaveClass('custom-class');
  });

  it('has correct data attribute', () => {
    render(<NanItem type="base">Test</NanItem>);
    const element = screen.getByText('Test');
    expect(element).toHaveAttribute('data-asi-component', 'nanitem');
  });
}); 