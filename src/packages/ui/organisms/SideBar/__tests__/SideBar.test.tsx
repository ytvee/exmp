import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import SideBar from '../SideBar';

describe('SideBar', () => {
  const defaultProps = {
    sections: [
      {
        sectionHeader: 'Section 1',
        items: [
          {
            label: 'Item 1',
            value: 'item1',
            path: '/item1',
            type: 'base',
          },
          {
            label: 'Item 2',
            value: 'item2',
            path: '/item2',
            type: 'checkbox',
            checked: true,
          },
        ],
      },
    ],
    onItemClick: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders section header', () => {
    render(<SideBar {...defaultProps} />);
    
    expect(screen.getByText('SECTION 1')).toBeInTheDocument();
  });

  it('renders section items', () => {
    render(<SideBar {...defaultProps} />);
    
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('handles items without sections prop', () => {
    const standaloneProps = {
      sections: [
        {
          sectionHeader: 'Standalone Section',
          items: [
            {
              label: 'Standalone Item',
              value: 'standalone',
              path: '/standalone',
              type: 'base',
            },
          ],
        },
      ],
      onItemClick: vi.fn(),
    };
    
    render(<SideBar {...standaloneProps} />);
    
    expect(screen.getByText('STANDALONE SECTION')).toBeInTheDocument();
    expect(screen.getByText('Standalone Item')).toBeInTheDocument();
  });

  it('handles empty sections', () => {
    const emptyProps = {
      sections: [],
      onItemClick: vi.fn(),
    };
    
    const { container } = render(<SideBar {...emptyProps} />);
    
    // Should render without errors
    const sidebar = container.querySelector('[data-asi-component="sidebar"]');
    expect(sidebar).toBeInTheDocument();
  });

  it('handles sections with empty items', () => {
    const emptySections = [
      {
        sectionHeader: 'Empty Section',
        items: [],
      },
    ];
    
    render(<SideBar sections={emptySections} onItemClick={vi.fn()} />);
    
    expect(screen.getByText('EMPTY SECTION')).toBeInTheDocument();
  });

  it('applies correct CSS classes', () => {
    const { container } = render(<SideBar {...defaultProps} />);
    
    const sidebar = container.querySelector('[data-asi-component="sidebar"]');
    expect(sidebar?.className).toMatch(/asi-sidebar/);
  });
}); 