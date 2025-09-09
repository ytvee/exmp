import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import RadioButton from '../RadioButton';
import styles from '../RadioButton.module.css';

describe('RadioButton Component', () => {
  const baseProps = {
    label: 'Option',
    value: 'a',
    checked: false,
    onChange: () => {},
  };

  it('renders input[type=radio] and associates label correctly', () => {
    render(<RadioButton {...baseProps} />);
    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
    expect(radio).toHaveAttribute('value', 'a');

    const label = screen.getByText('Option').closest('label')!;
    expect(label).toHaveClass(styles['asi-radiobutton']);
  });

  it('applies the primary variant class', () => {
    render(<RadioButton {...baseProps} variant="primary" />);
    const label = screen.getByText('Option').closest('label')!;
    expect(label).toHaveClass(styles['asi-radiobutton--primary']);
  });

  it('reflects checked state when checked prop is true', () => {
    render(<RadioButton {...baseProps} checked />);
    const radio = screen.getByRole('radio');
    expect(radio).toBeChecked();
  });

  it('calls onChange with the correct value when clicked', () => {
    const handleChange = vi.fn();
    render(<RadioButton {...baseProps} onChange={handleChange} />);
    const radio = screen.getByRole('radio');
    fireEvent.click(radio);
    expect(handleChange).toHaveBeenCalledWith('a');
  });

  it('does not call onChange when disabled', () => {
    const handleChange = vi.fn();
    render(<RadioButton {...baseProps} disabled onChange={handleChange} />);
    const radio = screen.getByRole('radio');
    fireEvent.click(radio);
    expect(handleChange).not.toHaveBeenCalled();
  });
});
