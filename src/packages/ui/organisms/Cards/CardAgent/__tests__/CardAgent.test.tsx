import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { CardAgent } from '../CardAgent';
import { CardAgentProps, CardAgentVariant } from '../CardAgent.types';

const baseStats = [
  { type: 'runs' as const,  value: '1.2k' },
  { type: 'likes' as const, value: '856'  },
];

const defaultProps: CardAgentProps = {
  id: 'test-1',
  title: 'Test Agent',
  prefix: 'AI Agent',
  content: 'Test agent content',
  benefits: baseStats,
  mainImageURL: './Ellipse_18.png',
  author: {
    avatarURL: './Ellipse_18.png',
    name: 'Ben Goertzel',
    createdAt: '2 days ago',
  },
  action: vi.fn() as unknown as (id: string | number) => void,
  variant: CardAgentVariant.INIT,
};

beforeEach(() => {
  vi.clearAllMocks();
});

describe('CardAgent', () => {
  it('renders with basic props', () => {
    render(<CardAgent {...defaultProps} />);

    expect(screen.getByText('Test Agent')).toBeInTheDocument();
    expect(screen.getByText('Test agent content')).toBeInTheDocument();
    expect(screen.getByText(/AI Agent$/)).toBeInTheDocument();
    expect(screen.getByText('Ben Goertzel')).toBeInTheDocument();
  });

  it('calls action when clicked', () => {
    const actionMock = vi.fn();
    render(<CardAgent {...defaultProps} action={actionMock} />);

    const card = screen
        .getByText('Test Agent')
        .closest('[data-asi-component="cardagent"]') as HTMLElement;

    fireEvent.click(card);
    expect(actionMock).toHaveBeenCalledWith('test-1');
  });

  it('renders with INIT variant', () => {
    render(<CardAgent {...defaultProps} variant={CardAgentVariant.INIT} />);

    const card = screen
        .getByText('Test Agent')
        .closest('[data-asi-component="cardagent"]') as HTMLElement;

    expect(card).toHaveAttribute('data-variant', 'init');
    expect(card.className).toMatch(/asi-cardagent--init/);
  });

  it('renders with LANDING variant', () => {
    render(<CardAgent {...defaultProps} variant={CardAgentVariant.LANDING} />);

    const card = screen
        .getByText('Test Agent')
        .closest('[data-asi-component="cardagent"]') as HTMLElement;

    expect(card).toHaveAttribute('data-variant', 'landing');
    expect(card.className).toMatch(/asi-cardagent--landing/);
  });

  it('renders stats values correctly', () => {
    render(<CardAgent {...defaultProps} />);

    expect(screen.getByText('1.2k')).toBeInTheDocument();
    expect(screen.getByText('856')).toBeInTheDocument();
  });

  it('renders author information', () => {
    render(<CardAgent {...defaultProps} />);

    expect(screen.getByText('Ben Goertzel')).toBeInTheDocument();
    expect(screen.getByText('2 days ago')).toBeInTheDocument();
  });

  it('renders avatar images', () => {
    render(<CardAgent {...defaultProps} />);

    const avatars = screen.getAllByAltText('Author_avatar');
    expect(avatars).toHaveLength(2);
    expect(avatars[0]).toHaveAttribute('src', './Ellipse_18.png');
    expect(avatars[1]).toHaveAttribute('src', './Ellipse_18.png');
  });

  it('applies custom className', () => {
    render(<CardAgent {...defaultProps} className="custom-class" />);

    const card = screen
        .getByText('Test Agent')
        .closest('[data-asi-component="cardagent"]') as HTMLElement;

    expect(card.className).toMatch(/custom-class/);
  });

  it('has correct data attributes', () => {
    render(<CardAgent {...defaultProps} />);

    const card = screen
        .getByText('Test Agent')
        .closest('[data-asi-component="cardagent"]');

    expect(card).toHaveAttribute('data-asi-component', 'cardagent');
  });

  it('renders with mobile layout', () => {
    render(<CardAgent {...defaultProps} isMobile />);

    const card = screen
        .getByText('Test Agent')
        .closest('[data-asi-component="cardagent"]');
    expect(card).toBeInTheDocument();
  });

  it('renders with many stats', () => {
    const manyStats = [
      { type: 'runs' as const,   value: '5.2k'   },
      { type: 'likes' as const,  value: '2.1k'   },
      { type: 'backers' as const,value: '890'    },
      { type: 'price' as const,  value: '$29.99' },
    ];

    render(<CardAgent {...defaultProps} benefits={manyStats} />);

    expect(screen.getByText('5.2k')).toBeInTheDocument();
    expect(screen.getByText('2.1k')).toBeInTheDocument();
    expect(screen.getByText('890')).toBeInTheDocument();
    expect(screen.getByText('$29.99')).toBeInTheDocument();
  });
});
