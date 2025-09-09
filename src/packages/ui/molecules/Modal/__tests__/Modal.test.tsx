import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { Modal } from '../Modal';

vi.mock('../../atoms/Icon', () => ({
  Icon: ({ name, className, ...props }: { name: string; className?: string; [key: string]: unknown }) => (
    <span data-testid={`icon-${name}`} className={className} {...props} />
  ),
}));

vi.mock('../../atoms/Button', () => ({
  Button: ({ children, onClick, disabled, className, ...props }: { children: React.ReactNode; onClick?: () => void; disabled?: boolean; className?: string; [key: string]: unknown }) => (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      className={className}
      {...props}
    >
      {children}
    </button>
  ),
}));

describe('Modal', () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
    title: 'Test Modal',
    description: 'Test description',
    children: <p>Test content</p>,
    actions: [
      { label: 'Cancel', onClick: vi.fn(), variant: 'secondary' as const },
      { label: 'Confirm', onClick: vi.fn(), variant: 'primary' as const },
    ],
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders modal when isOpen is true', () => {
    render(<Modal {...defaultProps} />);
    
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Confirm')).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    render(<Modal {...defaultProps} isOpen={false} />);
    
    expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
    expect(screen.queryByText('Test content')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    render(<Modal {...defaultProps} />);
    
    const closeButton = screen.getByTestId('icon-Close').closest('button');
    fireEvent.click(closeButton!);
    
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when overlay is clicked', () => {
    render(<Modal {...defaultProps} closeOnOverlayClick={true} />);
    
    const overlay = screen.getByTestId('modal-overlay');
    fireEvent.click(overlay);
    
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose when overlay is clicked if closeOnOverlayClick is false', () => {
    render(<Modal {...defaultProps} closeOnOverlayClick={false} />);
    
    const overlay = screen.getByTestId('modal-overlay');
    fireEvent.click(overlay);
    
    expect(defaultProps.onClose).not.toHaveBeenCalled();
  });

  it('calls action onClick when action button is clicked', () => {
    const cancelAction = vi.fn();
    const confirmAction = vi.fn();
    
    render(
      <Modal
        {...defaultProps}
        actions={[
          { label: 'Cancel', onClick: cancelAction, variant: 'secondary' },
          { label: 'Confirm', onClick: confirmAction, variant: 'primary' },
        ]}
      />
    );
    
    fireEvent.click(screen.getByText('Cancel'));
    fireEvent.click(screen.getByText('Confirm'));
    
    expect(cancelAction).toHaveBeenCalledTimes(1);
    expect(confirmAction).toHaveBeenCalledTimes(1);
  });

  it('renders without title', () => {
    render(<Modal {...defaultProps} title={undefined} />);
    
    expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders without description', () => {
    render(<Modal {...defaultProps} description={undefined} />);
    
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.queryByText('Test description')).not.toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders without actions', () => {
    render(<Modal {...defaultProps} actions={[]} />);
    
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
    expect(screen.queryByText('Cancel')).not.toBeInTheDocument();
    expect(screen.queryByText('Confirm')).not.toBeInTheDocument();
  });

  it('renders without close button when showCloseButton is false', () => {
    render(<Modal {...defaultProps} showCloseButton={false} />);
    
    expect(screen.queryByTestId('icon-Close')).not.toBeInTheDocument();
  });

  it('applies correct size class', () => {
    const { container } = render(<Modal {...defaultProps} size="large" />);
    
    const modal = container.querySelector('[data-asi-component="modal"]');
    const innerModal = modal?.querySelector('[class*="asi-modal"]');
    expect(innerModal?.className).toMatch(/asi-modal--large/);
  });

  it('applies disabled class when disabled', () => {
    const { container } = render(<Modal {...defaultProps} disabled />);
    
    const modal = container.querySelector('[data-asi-component="modal"]');
    const innerModal = modal?.querySelector('[class*="asi-modal"]');
    expect(innerModal?.className).toMatch(/asi-modal--disabled/);
  });

  it('applies loading class when loading', () => {
    const { container } = render(<Modal {...defaultProps} loading />);
    
    const modal = container.querySelector('[data-asi-component="modal"]');
    const innerModal = modal?.querySelector('[class*="asi-modal"]');
    expect(innerModal?.className).toMatch(/asi-modal--loading/);
  });

  it('has correct data-asi-component attribute', () => {
    const { container } = render(<Modal {...defaultProps} />);
    
    expect(container.querySelector('[data-asi-component="modal"]')).toBeInTheDocument();
  });

  it('handles escape key when closeOnEscape is true', () => {
    render(<Modal {...defaultProps} closeOnEscape={true} />);
    
    fireEvent.keyDown(document, { key: 'Escape' });
    
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('does not handle escape key when closeOnEscape is false', () => {
    render(<Modal {...defaultProps} closeOnEscape={false} />);
    
    fireEvent.keyDown(document, { key: 'Escape' });
    
    expect(defaultProps.onClose).not.toHaveBeenCalled();
  });

  it('prevents body scroll when modal is open', () => {
    render(<Modal {...defaultProps} />);
    
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('restores body scroll when modal is closed', () => {
    const { unmount } = render(<Modal {...defaultProps} />);
    
    unmount();
    
    expect(document.body.style.overflow).toBe('unset');
  });
});