import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { Avatar } from '../Avatar';
import styles from '../Avatar.module.css';


describe('Avatar Component', () => {
  it('should render an <img> with correct src, alt, and CSS module class', () => {
    render(<Avatar src="test.png" alt="Avatar alt" />);
    const img = screen.getByAltText('Avatar alt');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'test.png');
    expect(img).toHaveClass(styles['asi-avatar-image']);
  });

  it('should apply module base and size classes to the wrapper', () => {
    render(<Avatar src="" alt="" size="large" />);
    const wrapper = screen.getByAltText('').parentElement!;
    expect(wrapper).toHaveClass(styles['asi-avatar']);
    expect(wrapper).toHaveClass(styles['large']);
  });

  it('should apply a custom className alongside module classes', () => {
    render(<Avatar src="" alt="" className="custom-class" />);
    const wrapper = screen.getByAltText('').parentElement!;
    expect(wrapper).toHaveClass(styles['asi-avatar']);
    expect(wrapper).toHaveClass('custom-class');
  });

  it('should override dimensions via manualSize inline style', () => {
    render(<Avatar src="" alt="" manualSize="100px" />);
    const wrapper = screen.getByAltText('').parentElement!;
    expect(wrapper).toHaveStyle({ width: '100px', height: '100px' });
  });

  it('should use default dimensions when manualSize is not provided', () => {
    // Default size is 'medium' => 60px x 60px
    render(<Avatar src="" alt="" />);
    const wrapper = screen.getByAltText('').parentElement!;
    expect(wrapper).toHaveStyle({ width: '60px', height: '60px' });
  });

  it('should call onClick handler when wrapper is clicked', () => {
    const handleClick = vi.fn();
    render(<Avatar src="" alt="" onClick={handleClick} />);
    const wrapper = screen.getByAltText('').parentElement!;
    fireEvent.click(wrapper);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should set the correct data-asi-component attribute on the wrapper', () => {
    render(<Avatar src="" alt="test-alt" />);
    const wrapper = screen.getByAltText('test-alt').parentElement!;
    expect(wrapper).toHaveAttribute('data-asi-component', 'avatar');
  });
});
