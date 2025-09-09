import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { DropDown } from '../DropDown';

const baseProps = {
  label: 'Label',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ],
  value: 'option1',
  onChange: () => {},
};

describe('DropDown', () => {
  it('renders base elements', () => {
    const { container } = render(<DropDown {...baseProps} />);
    const root = container.firstChild as HTMLElement;
    expect(root.className).toMatch(/asi-dropdown/);
    expect(root).toHaveAttribute('data-asi-component', 'dropdown');
    expect(screen.getByText('Label')).toBeInTheDocument();
  });

  it('applies disabled state class', () => {
    const { container } = render(
      <DropDown {...baseProps} disabled />
    );
    const root = container.firstChild as HTMLElement;
    expect(root.className).toMatch(/asi-dropdown--disabled/);
  });

  it('calls onChange when an option is selected', () => {
    const handleChange = vi.fn();
    render(<DropDown {...baseProps} onChange={handleChange} />);
    // Add test implementation here
  });

  it('applies custom className', () => {
    const { container } = render(<DropDown {...baseProps} className="custom-class" />);
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveClass('custom-class');
  });
});
