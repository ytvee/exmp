import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from '../Counter';

describe('Counter', () => {
  it('renders with initial value', () => {
    render(<Counter initialValue={5} />);
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('increments and decrements', () => {
    render(<Counter initialValue={1} />);
    const increment = screen.getByLabelText('increment');
    const decrement = screen.getByLabelText('decrement');

    fireEvent.click(increment);
    expect(screen.getByText('2')).toBeInTheDocument();
    fireEvent.click(decrement);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('disables buttons at limits', () => {
    render(<Counter initialValue={5} min={5} max={6} />);
    const increment = screen.getByLabelText('increment');
    const decrement = screen.getByLabelText('decrement');

    expect(decrement).toBeDisabled();
    expect(increment).not.toBeDisabled();

    fireEvent.click(increment);
    expect(increment).toBeDisabled();
  });

  it('has correct data attribute', () => {
    render(<Counter />);
    const element = screen.getByLabelText('increment').parentElement as HTMLElement;
    expect(element).toHaveAttribute('data-asi-component', 'counter');
  });
});
