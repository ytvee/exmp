import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { IconButton } from '../IconButton';

describe('IconButton', () => {
  it('renders correctly with default props', () => {
    render(<IconButton />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button.className).toMatch(/asi-iconbutton/);
  });

  it('applies size classes correctly', () => {
    render(<IconButton size="large" />);
    const button = screen.getByRole('button');
    expect(button.className).toMatch(/asi-iconbutton--large/);
  });

  it('applies variant classes correctly', () => {
    render(<IconButton variant="blue" />);
    const button = screen.getByRole('button');
    expect(button.className).toMatch(/asi-iconbutton--blue/);
  });

  it('applies background class when hasBackground is true', () => {
    render(<IconButton hasBackground />);
    const button = screen.getByRole('button');
    expect(button.className).toMatch(/asi-iconbutton--with-background/);
  });

  it('applies active class when active is true', () => {
    render(<IconButton active />);
    const button = screen.getByRole('button');
    expect(button.className).toMatch(/asi-iconbutton--active/);
  });

  it('applies disabled class and disables button when disabled is true', () => {
    render(<IconButton disabled />);
    const button = screen.getByRole('button');
    expect(button.className).toMatch(/asi-iconbutton--disabled/);
    expect(button).toBeDisabled();
  });

  it('renders provided icon', () => {
    render(
      <IconButton icon={<span data-testid="custom-icon">icon</span>} />
    );
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  it('renders icon by name', () => {
    render(<IconButton iconName="Settings" />);
    // Icon component should be rendered
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('supports custom className', () => {
    render(<IconButton className="extra" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('extra');
  });

  it('has correct data attribute', () => {
    render(<IconButton />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('data-asi-component', 'iconbutton');
  });

  it('combines multiple props correctly', () => {
    render(
      <IconButton 
        size="small" 
        variant="red" 
        hasBackground 
        active 
        disabled 
        className="custom"
      />
    );
    const button = screen.getByRole('button');
    expect(button.className).toMatch(/asi-iconbutton--small/);
    expect(button.className).toMatch(/asi-iconbutton--red/);
    expect(button.className).toMatch(/asi-iconbutton--with-background/);
    expect(button.className).toMatch(/asi-iconbutton--active/);
    expect(button.className).toMatch(/asi-iconbutton--disabled/);
    expect(button).toHaveClass('custom');
    expect(button).toBeDisabled();
  });
});
