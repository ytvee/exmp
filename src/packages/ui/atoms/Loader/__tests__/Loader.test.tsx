import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Loader } from '../Loader';
import styles from '../Loader.module.css';

describe('Loader', () => {
  it('renders with default props', () => {
    render(<Loader />);
    
    expect(screen.getByTestId('loader')).toBeInTheDocument();
    expect(screen.getByTestId('loader')).toHaveAttribute('data-asi-component', 'loader');
  });

  it('applies small size class by default', () => {
    render(<Loader />);
    
    expect(screen.getByTestId('loader')).toHaveClass(styles['asi-loader--small']);
  });

  it('applies large size class when specified', () => {
    render(<Loader size="large" />);
    
    expect(screen.getByTestId('loader')).toHaveClass(styles['asi-loader--large']);
  });

  it('renders circle element', () => {
    render(<Loader />);
    
    const circle = screen.getByTestId('loader').querySelector(`.${styles['asi-loader__circle']}`);
    expect(circle).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Loader className="custom-class" />);
    
    expect(screen.getByTestId('loader')).toHaveClass('custom-class');
  });

  it('applies custom data-testid', () => {
    render(<Loader data-testid="custom-test-id" />);
    
    expect(screen.getByTestId('custom-test-id')).toBeInTheDocument();
  });

  it('renders with all size variants', () => {
    const sizes = ['small', 'large'] as const;
    
    sizes.forEach(size => {
      const { unmount } = render(<Loader size={size} />);
      expect(screen.getByTestId('loader')).toHaveClass(styles[`asi-loader--${size}`]);
      unmount();
    });
  });

  it('has correct positioning classes', () => {
    render(<Loader />);
    
    const loader = screen.getByTestId('loader');
    expect(loader).toHaveClass(styles['asi-loader']);
  });

  it('applies additional props', () => {
    render(<Loader id="test-loader" aria-label="Loading" />);
    
    const loader = screen.getByTestId('loader');
    expect(loader).toHaveAttribute('id', 'test-loader');
    expect(loader).toHaveAttribute('aria-label', 'Loading');
  });
});
