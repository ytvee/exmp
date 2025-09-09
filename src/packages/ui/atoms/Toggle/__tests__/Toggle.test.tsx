import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Toggle } from '../Toggle';
import { vi } from 'vitest';

describe('Toggle', () => {
  it('renders label on left and right according to labelPosition', () => {
    render(<Toggle label="Label" labelPosition="left" checked={false} onChange={() => {}} data-testid="toggle" />);
    let container = screen.getByTestId('toggle');
    expect(container.className).toMatch(/asi-toggle--left/);
    expect(container.firstChild).toHaveTextContent('Label');

    render(<Toggle label="Right" labelPosition="right" checked={false} onChange={() => {}} data-testid="toggle2" />);
    container = screen.getByTestId('toggle2');
    expect(container.className).toMatch(/asi-toggle--right/);
    expect(screen.getByText('Right')).toBeInTheDocument();
  });

  it('toggles value when clicked and not disabled', () => {
    const handleChange = vi.fn();
    render(<Toggle checked={false} onChange={handleChange} data-testid="toggle" />);
    fireEvent.click(screen.getByTestId('toggle'));
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('does not call onChange when disabled', () => {
    const handleChange = vi.fn();
    render(<Toggle checked={false} disabled onChange={handleChange} data-testid="toggle" />);
    fireEvent.click(screen.getByTestId('toggle'));
    expect(handleChange).not.toHaveBeenCalled();
  });
});
