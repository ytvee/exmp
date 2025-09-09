import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { DropdownImages } from '../DropdownImages';

describe('DropdownImages', () => {
  const options = [
    { value: 'option1', label: 'Option 1', image: '/image1.jpg', category: 'public' },
    { value: 'option2', label: 'Option 2', image: '/image2.jpg', category: 'private' },
  ];

  it('renders correctly', () => {
    render(<DropdownImages options={options} />);
    const dropdown = screen.getByTestId('dropdown-images');
    expect(dropdown).toBeInTheDocument();
  });

  it('opens and closes dropdown', () => {
    render(<DropdownImages options={options} searchable />);
    const trigger = screen.getByText('Select an option');
    fireEvent.click(trigger);
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    fireEvent.click(trigger);
    expect(screen.queryByPlaceholderText('Search...')).not.toBeInTheDocument();
  });

  it('switches categories', () => {
    render(<DropdownImages options={options} searchable />);
    const trigger = screen.getByText('Select an option');
    fireEvent.click(trigger);
    fireEvent.click(screen.getByText('Private'));
    expect(screen.getByText('Private')).toBeInTheDocument();
  });

  it('filters options with search', () => {
    render(<DropdownImages options={options} searchable />);
    const trigger = screen.getByText('Select an option');
    fireEvent.click(trigger);
    fireEvent.change(screen.getByPlaceholderText('Search...'), { target: { value: 'Option 2' } });
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('calls onChange when option selected', () => {
    const handleChange = vi.fn();
    render(<DropdownImages options={options} onChange={handleChange} searchable />);
    const trigger = screen.getByText('Select an option');
    fireEvent.click(trigger);
    fireEvent.click(screen.getByText('Option 2'));
    expect(handleChange).toHaveBeenCalledWith('option2');
  });
});
