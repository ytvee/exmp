import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CodeBlock } from '../CodeBlock';
import styles from '../CodeBlock.module.css';

describe('CodeBlock', () => {
  const sampleCode = `function test() {\n  const obj = { prop: "value", num: 1 };\n}`;

  it('applies token classes correctly', () => {
    render(<CodeBlock code={sampleCode} />);

    expect(screen.getByText('function')).toHaveClass(styles['asi-token--keyword']);
    expect(screen.getByText('test')).toHaveClass(styles['asi-token--function']);
    expect(screen.getByText('prop')).toHaveClass(styles['asi-token--plain']);
    expect(screen.getByText('"value"')).toHaveClass(styles['asi-token--string']);
    expect(screen.getByText('1')).toHaveClass(styles['asi-token--number']);
  });

  it('renders multiple lines with codeline class', () => {
    const { container } = render(<CodeBlock code={sampleCode} />);
    const lines = container.querySelectorAll(`.${styles['asi-codeline']}`);
    expect(lines.length).toBeGreaterThan(1);
  });

  it('has the correct wrapper class and attributes', () => {
    const { container } = render(<CodeBlock code={sampleCode} />);
    const wrapper = container.querySelector(`[data-asi-component="codeblock"]`);
    expect(wrapper).toHaveClass(styles['asi-codeblock']);
    expect(wrapper).toHaveAttribute('data-asi-component', 'codeblock');
  });

  it('applies default width and visible overflow by default', () => {
    const { container } = render(<CodeBlock code={sampleCode} />);
    const wrapper = container.querySelector(`[data-asi-component="codeblock"]`);
    expect(wrapper).toHaveStyle({ width: '544px', overflowY: 'visible' });
  });

  it('accepts custom width and maxHeight props', () => {
    const { container } = render(
      <CodeBlock code={sampleCode} width="400px" maxHeight="100px" />
    );
    const wrapper = container.querySelector(`[data-asi-component="codeblock"]`);
    expect(wrapper).toHaveStyle({ width: '400px', maxHeight: '100px', overflowY: 'auto' });
  });
});
