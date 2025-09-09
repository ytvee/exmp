import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Pagination } from "../Pagination";

describe('Pagination', () => {
  it('renders pagination component', () => {
    const { container } = render(<Pagination />);
    
    const pagination = container.querySelector('[data-asi-component="pagination"]');
    expect(pagination).toBeInTheDocument();
  });

  it('applies correct CSS classes', () => {
    const { container } = render(<Pagination />);
    
    const pagination = container.querySelector('[data-asi-component="pagination"]');
    expect(pagination?.className).toMatch(/asi-pagination/);
  });
}); 