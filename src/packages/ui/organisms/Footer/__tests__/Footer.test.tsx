import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { Footer } from '../Footer';

// Mock the useIsMobile hook
vi.mock('@utils/responsiveHooks/useIsMobile', () => ({
  useIsMobile: vi.fn(() => false),
  default: vi.fn(() => false),
}));

// Mock the DropDown component

vi.mock('@molecules/DropDown', () => ({
  DropDown: vi.fn(() => <div data-testid="dropdown">Mocked DropDown</div>),
  SelectOption: vi.fn(),
}));

describe('Footer', () => {
  const defaultProps = {
    items: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
    serviceItems: [
      {
        icon: <span data-testid="service-icon">🔧</span>,
        text: 'Service Status',
      },
    ],
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders footer content', () => {
    render(<Footer {...defaultProps} />);
    
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
    expect(screen.getByText('Service Status')).toBeInTheDocument();
  });

  it('renders links with correct href attributes', () => {
    render(<Footer {...defaultProps} />);
    
    const privacyLink = screen.getByText('Privacy Policy');
    const termsLink = screen.getByText('Terms of Service');
    
    expect(privacyLink).toHaveAttribute('href', '/privacy');
    expect(termsLink).toHaveAttribute('href', '/terms');
  });

  it('applies correct CSS classes', () => {
    const { container } = render(<Footer {...defaultProps} />);
    
    const footer = container.querySelector('[data-asi-component="footer"]');
    expect(footer?.className).toMatch(/asi-footer-wrapper/);
  });

  it('applies custom className', () => {
    const { container } = render(
      <Footer {...defaultProps} className="custom-class" />
    );
    
    const footer = container.querySelector('[data-asi-component="footer"]');
    expect(footer?.className).toMatch(/custom-class/);
  });

  it('renders without items', () => {
    render(<Footer serviceItems={defaultProps.serviceItems} />);
    
    expect(screen.getByText('Service Status')).toBeInTheDocument();
    expect(screen.queryByText('Privacy Policy')).not.toBeInTheDocument();
  });

  it('renders without service items', () => {
    render(<Footer items={defaultProps.items} />);
    
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.queryByText('Service Status')).not.toBeInTheDocument();
  });

  it('has correct data-asi-component attribute', () => {
    const { container } = render(<Footer {...defaultProps} />);
    
    expect(container.querySelector('[data-asi-component="footer"]')).toBeInTheDocument();
  });
}); 