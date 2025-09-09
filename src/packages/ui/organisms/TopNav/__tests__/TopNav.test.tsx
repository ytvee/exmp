import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TopNav } from '../TopNav';
import { vi } from 'vitest';

describe('TopNav', () => {
  const defaultProps = {
    activeTab: 'home',
    avatarSrc: '/avatar.jpg',
    isUserAuthorized: false,
    navMenu: [],
    onTabClick: vi.fn(),
    onLogoClick: vi.fn(),
    onIconClick: vi.fn(),
    onAvatarClick: vi.fn(),
    onHamburgerClick: vi.fn(),
    onLoginClick: vi.fn(),
    onSignUpClick: vi.fn(),
  };

  it('renders correctly', () => {
    render(<TopNav {...defaultProps} />);
    expect(screen.getByText('ASI:Create')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<TopNav {...defaultProps} className="custom-class" />);
    const element = screen.getByText('ASI:Create').closest('[data-asi-component="topnav"]');
    expect(element?.className).toMatch(/custom-class/);
  });

  it('has correct data-asi-component attribute', () => {
    render(<TopNav {...defaultProps} />);
    const element = screen.getByText('ASI:Create').closest('[data-asi-component="topnav"]');
    expect(element).toHaveAttribute('data-asi-component', 'topnav');
  });
}); 