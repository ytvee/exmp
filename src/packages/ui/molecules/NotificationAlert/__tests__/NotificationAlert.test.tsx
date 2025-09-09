import React from 'react';
import { render, screen } from '@testing-library/react';
import { NotificationAlert } from '../NotificationAlert';

describe('NotificationAlert', () => {
  it('renders children content', () => {
    render(<NotificationAlert>Test Content</NotificationAlert>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies variant class correctly', () => {
    render(<NotificationAlert variant="success">Test</NotificationAlert>);
    const element = screen.getByText('Test').closest('[data-asi-component="notificationalert"]');
    expect(element?.className).toMatch(/asi-notification--success/);
  });

  it('applies custom className', () => {
    render(<NotificationAlert className="custom-class">Test</NotificationAlert>);
    const element = screen.getByText('Test').closest('[data-asi-component="notificationalert"]');
    expect(element?.className).toMatch(/custom-class/);
  });

  it('has correct data-asi-component attribute', () => {
    render(<NotificationAlert>Test</NotificationAlert>);
    const element = screen.getByText('Test').closest('[data-asi-component="notificationalert"]');
    expect(element).toHaveAttribute('data-asi-component', 'notificationalert');
  });
}); 