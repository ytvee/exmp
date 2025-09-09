import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import InputField from '../InputField';
import styles from '../InputField.module.css';

const baseProps = { id: 'input', label: 'Label' };

describe('InputField Component', () => {
  it('renders base elements with classes and data attribute', () => {
    const { container } = render(<InputField {...baseProps} />);
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveClass(styles['asi-inputgroup']);
    expect(root).toHaveAttribute('data-asi-component', 'inputfield');

    expect(screen.getByText('Label')).toHaveClass(styles['asi-label']);
    expect(screen.getByLabelText('Label')).toHaveClass(styles['asi-input']);
  });

  it('renders a clickable start icon with tooltip', () => {
    const onClick = vi.fn();
    render(
      <InputField
        {...baseProps}
        startIcon={<span data-testid="start-icon">S</span>}
        startIconToolTip="Start tip"
        onStartIconClick={onClick}
      />
    );
    const input = screen.getByLabelText('Label');
    const wrapper = input.parentElement as HTMLElement;
    expect(wrapper).toHaveClass(styles['asi-inputwrapper--hasStartIcon']);

    const iconWrapper = screen.getByTestId('start-icon').parentElement as HTMLElement;
    expect(iconWrapper).toHaveClass(styles['asi-iconwrapper']);
    expect(iconWrapper).toHaveClass(styles['asi-iconwrapper--start']);
    expect(iconWrapper).toHaveClass(styles['asi-iconwrapper--clickable']);

    // Tooltip container
    const tooltipContainer = screen.getByText('Start tip').parentElement as HTMLElement;
    expect(tooltipContainer).toHaveClass(styles['asi-tooltip']);

    fireEvent.click(iconWrapper);
    expect(onClick).toHaveBeenCalled();
  });

  it('renders an end icon', () => {
    render(
      <InputField
        {...baseProps}
        endIcon={<span data-testid="end-icon" />}
      />
    );
    const input = screen.getByLabelText('Label');
    const wrapper = input.parentElement as HTMLElement;
    expect(wrapper).toHaveClass(styles['asi-inputwrapper--hasEndIcon']);

    const iconWrapper = screen.getByTestId('end-icon').parentElement as HTMLElement;
    expect(iconWrapper).toHaveClass(styles['asi-iconwrapper']);
    expect(iconWrapper).toHaveClass(styles['asi-iconwrapper--end']);
  });

  it('shows helper text with variant class', () => {
    render(
      <InputField
        {...baseProps}
        helperText="Help"
        helperTextVariant="success"
      />
    );
    const helper = screen.getByText('Help');
    expect(helper).toHaveClass(styles['asi-helpertext']);
    expect(helper).toHaveClass(styles['asi-helpertext--success']);
  });

  it('applies error and success classes to the input element', () => {
    const { rerender } = render(<InputField {...baseProps} error />);
    expect(screen.getByLabelText('Label')).toHaveClass(styles['asi-input--error']);

    rerender(<InputField {...baseProps} success />);
    expect(screen.getByLabelText('Label')).toHaveClass(styles['asi-input--success']);
  });
});
