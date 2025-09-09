import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ConfigAgentsCard } from '../ConfigAgentsCard';
import { describe, it, expect } from 'vitest'

describe('ConfigAgentsCard', () => {
  it('renders correctly', () => {
    render(<ConfigAgentsCard title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<ConfigAgentsCard className="custom-class" title="Test" />);
    const element = screen.getByText('Test').closest('[data-asi-component="config-agents-card"]');
    expect(element?.className).toMatch(/custom-class/);
  });
}); 