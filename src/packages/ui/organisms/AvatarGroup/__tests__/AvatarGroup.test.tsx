import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import AvatarGroup from '../AvatarGroup';

// Mock the Avatar component
vi.mock('@atoms/Avatar', () => ({
  Avatar: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));

describe('AvatarGroup', () => {
  const mockAvatars = [
    'avatar1.jpg',
    'avatar2.jpg',
    'avatar3.jpg',
  ];

  it('renders all avatars', () => {
    render(<AvatarGroup avatars={mockAvatars} />);
    
    expect(screen.getByAltText('Avatar 1')).toBeInTheDocument();
    expect(screen.getByAltText('Avatar 2')).toBeInTheDocument();
    expect(screen.getByAltText('Avatar 3')).toBeInTheDocument();
  });

  it('applies correct CSS classes', () => {
    const { container } = render(<AvatarGroup avatars={mockAvatars} />);
    
    const avatarGroup = container.querySelector('[data-asi-component="avatargroup"]');
    expect(avatarGroup?.className).toMatch(/asi-avatar-group/);
  });

  it('limits visible avatars when maxVisible is set', () => {
    render(<AvatarGroup avatars={mockAvatars} maxVisible={2} />);
    
    expect(screen.getByAltText('Avatar 1')).toBeInTheDocument();
    expect(screen.getByAltText('Avatar 2')).toBeInTheDocument();
    expect(screen.queryByAltText('Avatar 3')).not.toBeInTheDocument();
  });

  it('shows overflow count when avatars are hidden', () => {
    render(<AvatarGroup avatars={mockAvatars} maxVisible={2} remainingAvatars={1} />);
    
    expect(screen.getByText('+1')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <AvatarGroup avatars={mockAvatars} className="custom-class" />
    );
    
    const avatarGroup = container.querySelector('[data-asi-component="avatargroup"]');
    expect(avatarGroup?.className).toMatch(/custom-class/);
  });
}); 