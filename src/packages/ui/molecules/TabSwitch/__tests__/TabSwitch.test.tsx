import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { TabSwitch } from '../TabSwitch';

describe('TabSwitch', () => {
  const defaultProps = {
    options: [
      {
        label: 'Tab 1',
        icon: <span data-testid="icon-1">📊</span>,
        value: 'tab1',
      },
      {
        label: 'Tab 2',
        icon: <span data-testid="icon-2">📈</span>,
        value: 'tab2',
      },
      {
        label: 'Tab 3',
        icon: <span data-testid="icon-3">📉</span>,
        value: 'tab3',
      },
    ],
    selected: 0,
    onChange: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all tabs', () => {
    render(<TabSwitch {...defaultProps} />);
    
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
    expect(screen.getByText('Tab 3')).toBeInTheDocument();
  });

  it('renders icons', () => {
    render(<TabSwitch {...defaultProps} />);
    
    expect(screen.getByTestId('icon-1')).toBeInTheDocument();
    expect(screen.getByTestId('icon-2')).toBeInTheDocument();
    expect(screen.getByTestId('icon-3')).toBeInTheDocument();
  });

  it('calls onChange when tab is clicked', () => {
    const { getByText } = render(<TabSwitch {...defaultProps} />);
    const tab2 = getByText('Tab 2');
    
    fireEvent.click(tab2);
    
    expect(defaultProps.onChange).toHaveBeenCalledWith(1, defaultProps.options[1]);
  });

  it('applies correct CSS classes', () => {
    const { container } = render(<TabSwitch {...defaultProps} />);
    
    const tabSwitch = container.querySelector('[data-asi-component="tabswitch"]');
    expect(tabSwitch?.className).toMatch(/asi-tab-switch/);
  });
}); 