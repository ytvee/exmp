import '@testing-library/jest-dom';

// Mock CSS modules to return the same class names
const mockCssModule = new Proxy({}, {
  get(target, prop) {
    // Return the property name as the class name (simulating CSS Modules behavior)
    return prop as string;
  }
});

// Mock all CSS modules
vi.mock('*.module.css', () => mockCssModule);

// Mock CSS files
vi.mock('*.css', () => ({})); 