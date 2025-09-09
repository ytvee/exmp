import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import TextArea from '../TextArea';
import styles from '../TextArea.module.css';

describe('TextArea Component', () => {
  const baseProps = {
    id: 'test',
    label: 'Label',
    value: '',
    onChange: vi.fn(),
  };

  it('renders textarea element', () => {
    render(<TextArea {...baseProps} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveClass(styles['asi-textarea']);
  });

  it('renders label with correct class', () => {
    render(<TextArea {...baseProps} />);
    const label = screen.getByText('Label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass(styles['asi-label']);
  });

  it('renders helper text when provided', () => {
    render(<TextArea {...baseProps} helperText="Help" />);
    const helper = screen.getByText('Help');
    expect(helper).toBeInTheDocument();
    expect(helper).toHaveClass(styles['asi-helpertext']);
  });

  it('sets placeholder attribute', () => {
    render(<TextArea {...baseProps} placeholder="Enter text" />);
    const textarea = screen.getByPlaceholderText('Enter text');
    expect(textarea).toBeInTheDocument();
  });

  it('applies error class when error prop is true', () => {
    render(<TextArea {...baseProps} error />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass(styles['asi-textarea--error']);
  });

  it('applies disabled class and attribute when disabled', () => {
    render(<TextArea {...baseProps} disabled />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('disabled');
    expect(textarea).toHaveClass(styles['asi-textarea--disabled']);
  });
});
