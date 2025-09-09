import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { StatusChip } from '../StatusChip';
import styles from '../StatusChip.module.css';

describe('StatusChip', () => {
  it('renders with default status', () => {
    render(<StatusChip />);
    
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByTestId('statuschip')).toHaveAttribute('data-asi-component', 'statuschip');
  });

  it('renders with custom status', () => {
    render(<StatusChip status="pending" />);
    
    expect(screen.getByText('Pending')).toBeInTheDocument();
    expect(screen.getByTestId('statuschip')).toHaveClass(styles['asi-statuschip--pending']);
  });

  it('renders with custom label', () => {
    render(<StatusChip status="rejected" label="Custom Label" />);
    
    expect(screen.getByText('Custom Label')).toBeInTheDocument();
    expect(screen.getByTestId('statuschip')).toHaveClass(styles['asi-statuschip--rejected']);
  });

  it('renders correct icon for each status', () => {
    const { rerender } = render(<StatusChip status="active" />);
    expect(screen.getByTestId('status-icon')).toBeInTheDocument();

    rerender(<StatusChip status="rejected" />);
    expect(screen.getByTestId('status-icon')).toBeInTheDocument();

    rerender(<StatusChip status="pending" />);
    expect(screen.getByTestId('status-icon')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<StatusChip className="custom-class" />);
    
    expect(screen.getByTestId('statuschip')).toHaveClass('custom-class');
  });

  it('applies custom data-testid', () => {
    render(<StatusChip data-testid="custom-test-id" />);
    
    expect(screen.getByTestId('custom-test-id')).toBeInTheDocument();
  });

  it('renders with all status variants', () => {
    const statuses = ['active', 'rejected', 'pending'] as const;
    
    statuses.forEach(status => {
      const { unmount } = render(<StatusChip status={status} />);
      expect(screen.getByTestId('statuschip')).toHaveClass(styles[`asi-statuschip--${status}`]);
      unmount();
    });
  });

  it('has correct default labels for each status', () => {
    const testCases = [
      { status: 'active' as const, expectedLabel: 'Active' },
      { status: 'rejected' as const, expectedLabel: 'Rejected' },
      { status: 'pending' as const, expectedLabel: 'Pending' },
    ];

    testCases.forEach(({ status, expectedLabel }) => {
      const { unmount } = render(<StatusChip status={status} />);
      expect(screen.getByText(expectedLabel)).toBeInTheDocument();
      unmount();
    });
  });
});
