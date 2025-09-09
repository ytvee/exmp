import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { Cookies } from '../Cookies';

describe('Cookies', () => {
  it('renders banner with text', () => {
    render(<Cookies onAccept={() => {}} onReject={() => {}} />);
    expect(screen.getByText('This site uses cookies.')).toBeInTheDocument();
  });

  it('calls callbacks on buttons', () => {
    const accept = vi.fn();
    const reject = vi.fn();
    render(<Cookies onAccept={accept} onReject={reject} />);

    fireEvent.click(screen.getByText('Accept'));
    expect(accept).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText('Reject'));
    expect(reject).toHaveBeenCalledTimes(1);
  });

  it('applies custom className', () => {
    render(
      <Cookies
        className="custom"
        data-testid="cookies-banner"
        onAccept={() => {}}
        onReject={() => {}}
      />
    );
    const banner = screen.getByTestId('cookies-banner');
    expect(banner).toHaveClass('custom');
  });
});
