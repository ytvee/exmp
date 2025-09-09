import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { CryptoOwnerCard } from '../CryptoOwnerCard';
import { CryptoOwnerCardProps } from '../CryptoOwnerCard.types';

const defaultProps: CryptoOwnerCardProps = {
  variant: 'extended',
  cardId: '1',
  imageURL: './Ellipse_18.png',
  title: '0xD70B..9idG8',
  count: 299,
  description: 'total sales',
  action: vi.fn() as unknown as (id: string | number) => void,
};

describe('CryptoOwnerCard', () => {
  it('renders with basic props', () => {
    render(<CryptoOwnerCard {...defaultProps} />);

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('0xD70B..9idG8')).toBeInTheDocument();
    expect(screen.getByText('299 total sales')).toBeInTheDocument();

    const avatar = screen.getByAltText('asi-cryptoownercard-avatar');
    expect(avatar).toHaveAttribute('src', './Ellipse_18.png');
  });

  it('sets correct variant attribute', () => {
    render(<CryptoOwnerCard {...defaultProps} variant="large-content" />);

    const card = screen
        .getByText('0xD70B..9idG8')
        .closest('[data-asi-component="cryptoownercard"]') as HTMLElement;

    expect(card).toHaveAttribute('data-cryptoownercard-variant', 'large-content');
  });

  it('hides bag icon when isBagIconShown is false', () => {
    render(<CryptoOwnerCard {...defaultProps} isBagIconShown={false} />);

    const icon = screen.queryByTestId('ShoppingBag'); // Icon adds aria‑hidden, use test id
    expect(icon).not.toBeInTheDocument();
  });

  it('does not render cardId block when cardId is undefined', () => {
    render(<CryptoOwnerCard {...defaultProps} cardId={undefined} />);

    expect(screen.queryByText('1')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<CryptoOwnerCard {...defaultProps} className="custom-class" />);

    const card = screen
        .getByText('0xD70B..9idG8')
        .closest('[data-asi-component="cryptoownercard"]') as HTMLElement;

    expect(card.className).toMatch(/custom-class/);
  });
});
