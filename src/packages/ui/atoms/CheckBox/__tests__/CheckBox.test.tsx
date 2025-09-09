import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import CheckBox from '../CheckBox';
import styles from '../CheckBox.module.css';

describe('CheckBox', () => {
  it('renders the label text and the hidden input', () => {
    render(<CheckBox id="chk1" label="Test Label" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('applies the primary variant class', () => {
    render(<CheckBox id="chk2" label="X" variant="primary" />);
    const wrapper = screen.getByText('X').closest('label')!;
    expect(wrapper).toHaveClass(styles['asi-checkbox--primary']);
  });

  it('applies the large size class', () => {
    render(<CheckBox id="chk3" label="Y" size="large" />);
    const wrapper = screen.getByText('Y').closest('label')!;
    expect(wrapper).toHaveClass(styles['asi-checkbox--large']);
  });

  it('applies disabled class and prevents onChange', () => {
    const onChange = vi.fn();
    render(<CheckBox id="chk4" label="Z" disabled onChange={onChange} />);
    const wrapper = screen.getByText('Z').closest('label')!;
    expect(wrapper).toHaveClass(styles['asi-checkbox--disabled']);
    fireEvent.click(wrapper);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('toggles checked state and fires onChange', () => {
    const onChange = vi.fn();
    render(<CheckBox id="chk5" label="W" onChange={onChange} />);
    const input = screen.getByRole('checkbox');
    fireEvent.click(input);
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('has the correct data-asi-component attribute', () => {
    render(<CheckBox id="chk6" label="A" />);
    const wrapper = screen.getByText('A').closest('label')!;
    expect(wrapper).toHaveAttribute('data-asi-component', 'checkbox');
  });
});
