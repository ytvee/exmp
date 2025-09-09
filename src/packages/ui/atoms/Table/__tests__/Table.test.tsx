import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Table } from '../Table';
import styles from '../Table.module.css';

describe('Table', () => {
  it('renders children content', () => {
    render(<Table>Test Content</Table>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders with header and body', () => {
    const header = [{ content: 'Header 1' }, { content: 'Header 2' }];
    const body = [
      [{ content: 'Cell 1' }, { content: 'Cell 2' }],
      [{ content: 'Cell 3' }, { content: 'Cell 4' }]
    ];
    
    render(<Table header={header} body={body}>Test</Table>);
    
    expect(screen.getByText('Header 1')).toBeInTheDocument();
    expect(screen.getByText('Header 2')).toBeInTheDocument();
    expect(screen.getByText('Cell 1')).toBeInTheDocument();
    expect(screen.getByText('Cell 4')).toBeInTheDocument();
  });

  it('renders with caption', () => {
    render(<Table caption="Table Caption">Test</Table>);
    expect(screen.getByText('Table Caption')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Table className="custom-class">Test</Table>);
    const element = screen.getByText('Test').closest('div');
    expect(element?.className).toMatch(/custom-class/);
  });

  it('has correct data-asi-component attribute', () => {
    render(<Table>Test</Table>);
    const element = screen.getByRole('table');
    expect(element).toHaveAttribute('data-asi-component', 'table');
  });

  it('applies table wrapper class', () => {
    render(<Table>Test</Table>);
    const element = screen.getByText('Test').closest('div');
    expect(element?.className).toMatch(new RegExp(styles['asi-table-wrapper']));
  });

  it('applies table class', () => {
    render(<Table>Test</Table>);
    const element = screen.getByRole('table');
    expect(element?.className).toMatch(new RegExp(styles['asi-table']));
  });
}); 