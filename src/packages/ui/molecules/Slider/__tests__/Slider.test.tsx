import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { Slider } from '../Slider';
import styles from '../Slider.module.css';

describe('Slider', () => {
  const defaultProps = {
    min: 0,
    max: 100,
    value: 50,
    onChange: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders slider input', () => {
    render(<Slider {...defaultProps} />);
    
    const slider = screen.getByRole('slider');
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveAttribute('min', '0');
    expect(slider).toHaveAttribute('max', '100');
    expect(slider).toHaveAttribute('value', '50');
  });

  it('renders label when provided', () => {
    render(<Slider {...defaultProps} label="Volume" />);
    
    expect(screen.getByText('Volume')).toBeInTheDocument();
  });

  it('renders start and end labels when provided', () => {
    render(<Slider {...defaultProps} startLabel="Min" endLabel="Max" />);
    
    expect(screen.getByText('Min')).toBeInTheDocument();
    expect(screen.getByText('Max')).toBeInTheDocument();
  });

  it('calls onChange when slider value changes', () => {
    render(<Slider {...defaultProps} />);
    
    const slider = screen.getByRole('slider');
    fireEvent.change(slider, { target: { value: '75' } });
    
    expect(defaultProps.onChange).toHaveBeenCalledWith(75);
  });

  it('renders children content', () => {
    render(
      <Slider {...defaultProps}>
        <div data-testid="slider-children">Children content</div>
      </Slider>
    );
    
    expect(screen.getByTestId('slider-children')).toBeInTheDocument();
    expect(screen.getByText('Children content')).toBeInTheDocument();
  });

  it('applies correct variant class', () => {
    const { container } = render(<Slider {...defaultProps} variant="barOnly" />);
    
    const component = container.querySelector('[data-asi-component="slider"]');
    expect(component?.className).toMatch(/asi-slider--barOnly/);
  });

  it('applies correct color variant class', () => {
    const { container } = render(<Slider {...defaultProps} colorVariant="error" />);
    
    const component = container.querySelector('[data-asi-component="slider"]');
    expect(component?.className).toMatch(/asi-slider--error/);
  });

  it('applies disabled class when disabled', () => {
    const { container } = render(<Slider {...defaultProps} disabled />);
    
    const component = container.querySelector('[data-asi-component="slider"]');
    expect(component?.className).toMatch(/asi-slider--disabled/);
  });

  it('applies loading class when loading', () => {
    const { container } = render(<Slider {...defaultProps} loading />);
    
    const component = container.querySelector('[data-asi-component="slider"]');
    expect(component?.className).toMatch(/asi-slider--loading/);
  });

  it('disables slider when disabled', () => {
    render(<Slider {...defaultProps} disabled />);
    
    const slider = screen.getByRole('slider');
    expect(slider).toBeDisabled();
  });

  it('does not call onChange when disabled', () => {
    render(<Slider {...defaultProps} disabled />);
    
    const slider = screen.getByRole('slider');
    fireEvent.change(slider, { target: { value: '75' } });
    
    expect(defaultProps.onChange).not.toHaveBeenCalled();
  });

  it('does not call onChange when loading', () => {
    render(<Slider {...defaultProps} loading />);
    
    const slider = screen.getByRole('slider');
    fireEvent.change(slider, { target: { value: '75' } });
    
    expect(defaultProps.onChange).not.toHaveBeenCalled();
  });

  it('renders value display when variant is withInput', () => {
    render(<Slider {...defaultProps} variant="withInput" unit="%" />);
    
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  it('renders marks when marks is true', () => {
    render(<Slider {...defaultProps} marks min={0} max={5} />);
    
    // Marks are visual elements without text content
    const markElements = document.querySelectorAll(`span.${styles['asi-slider__mark']}`);
    expect(markElements.length).toBeGreaterThan(0);
  });

  it('calls onWheel when wheel event occurs', () => {
    const onWheel = vi.fn();
    render(<Slider {...defaultProps} onWheel={onWheel} />);
    
    const slider = screen.getByRole('slider');
    fireEvent.wheel(slider, { deltaY: 10 });
    
    expect(onWheel).toHaveBeenCalled();
  });

  it('does not call onWheel when disabled', () => {
    const onWheel = vi.fn();
    render(<Slider {...defaultProps} onWheel={onWheel} disabled />);
    
    const slider = screen.getByRole('slider');
    fireEvent.wheel(slider, { deltaY: 10 });
    
    expect(onWheel).not.toHaveBeenCalled();
  });

  it('has correct data-asi-component attribute', () => {
    const { container } = render(<Slider {...defaultProps} />);
    
    expect(container.querySelector('[data-asi-component="slider"]')).toBeInTheDocument();
  });

  it('applies custom step value', () => {
    render(<Slider {...defaultProps} step={5} />);
    
    const slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('step', '5');
  });

  it('updates value when value prop changes', () => {
    const { rerender } = render(<Slider {...defaultProps} />);
    
    let slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('value', '50');
    
    rerender(<Slider {...defaultProps} value={75} />);
    
    slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('value', '75');
  });
}); 