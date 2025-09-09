import React from 'react';
import { Badge } from './Badge';
import { Icon } from '../Icon';

export const BadgeExamples: React.FC = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Badge Component Examples</h1>
      
      <section style={{ marginBottom: '3rem' }}>
        <h2>Color Variants (Using Design Tokens)</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Badge text="Blue (--color-info)" variant="blue" />
          <Badge text="Red (--color-error)" variant="red" />
          <Badge text="Green (--color-success)" variant="green" />
          <Badge text="Purple (--color-accent-purple)" variant="purple" />
          <Badge text="Gray (--color-gray-100)" variant="gray" />
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>Sizes (Using Spacing Tokens)</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Badge text="Small" size="small" />
          <Badge text="Medium" size="medium" />
          <Badge text="Large" size="large" />
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>Content Types</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Badge text="5" variant="blue" size="medium" />
          <Badge text="99" variant="blue" size="medium" />
          <Badge text="New" variant="blue" size="medium" />
          <Badge text="9999+" variant="blue" size="medium" />
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>Size + Content Combinations</h2>
        
        <h3>Single Digit Content (0-9)</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Badge text="5" variant="blue" size="small" />
          <Badge text="5" variant="blue" size="medium" />
          <Badge text="5" variant="blue" size="large" />
        </div>

        <h3>Double Digit Content (10-99)</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Badge text="99" variant="blue" size="small" />
          <Badge text="99" variant="blue" size="medium" />
          <Badge text="99" variant="blue" size="large" />
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>With Icons</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Badge text="Start Icon" variant="blue" icon={<Icon name="Close" />} />
          <Badge text="End Icon" variant="red" icon={<Icon name="Close" />} iconPlacement="end" />
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>Practical Examples</h2>
        
        <h3>Notifications</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Badge text="3" variant="red" size="small" />
          <Badge text="12" variant="blue" size="medium" />
          <Badge text="99+" variant="green" size="large" />
        </div>

        <h3>Status Indicators</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Badge text="Active" variant="green" size="small" />
          <Badge text="Inactive" variant="red" size="small" />
          <Badge text="Pending" variant="gray" size="small" />
        </div>

        <h3>Categories</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Badge text="Feature" variant="blue" size="medium" />
          <Badge text="Bug" variant="purple" size="medium" />
          <Badge text="Enhancement" variant="green" size="medium" />
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>Design System Specifications with Tokens</h2>
        <div style={{ 
          background: '#f5f5f5', 
          padding: '1rem', 
          borderRadius: '8px',
          fontSize: '14px',
          lineHeight: '1.6'
        }}>
          <h3>✅ Implemented Features:</h3>
          <ul>
            <li><strong>Colors:</strong> Using existing color tokens (--color-info, --color-error, --color-success, --color-accent-purple, --color-gray-100)</li>
            <li><strong>Sizes:</strong> Small, Medium, Large with exact DS dimensions</li>
            <li><strong>Content:</strong> Single digit (0-9) and double digit (10-99) support</li>
            <li><strong>Variants:</strong> Blue, Red, Green, Purple, Gray</li>
            <li><strong>Icons:</strong> Start, end placement with click handlers</li>
            <li><strong>States:</strong> Default, disabled, with proper accessibility</li>
          </ul>
          
          <h3>🎯 Exact DS Dimensions:</h3>
          <ul>
            <li><strong>Small:</strong> Single: 23.41×28.2px | Double: 31.81×28.2px</li>
            <li><strong>Medium:</strong> Single: 32.41×28.2px | Double: 40.81×28.2px</li>
            <li><strong>Large:</strong> Single: 40.41×34.2px | Double: 48.81×34.2px</li>
          </ul>
          
          <h3>🔧 Design Tokens Used:</h3>
          <ul>
            <li><strong>Colors:</strong> --color-info, --color-error, --color-success, --color-accent-purple, --color-gray-100</li>
            <li><strong>Spacing:</strong> --spacing-1, --spacing-2, --spacing-3, --spacing-4, --spacing-6</li>
            <li><strong>Typography:</strong> --font-size-14, --font-family-mono, --line-height-tight</li>
            <li><strong>Border Radius:</strong> --radius-full</li>
            <li><strong>Text Colors:</strong> --color-text-inverse, --color-text-primary</li>
          </ul>
          
          <h3>🚀 Key Improvements:</h3>
          <ul>
            <li>Replaced hardcoded values with design tokens</li>
            <li>Implemented exact DS dimensions for all size/content combinations</li>
            <li>Added responsive sizing based on content length</li>
            <li>Enhanced accessibility and interaction handling</li>
            <li>Consistent with project&apos;s design system architecture</li>
          </ul>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>Token Mapping Reference</h2>
        <div style={{ 
          background: '#f0f8ff', 
          padding: '1rem', 
          borderRadius: '8px',
          fontSize: '14px',
          lineHeight: '1.6'
        }}>
          <h3>🎨 Color Token Mapping:</h3>
          <ul>
            <li><code>--color-info</code> → Blue badge background</li>
            <li><code>--color-error</code> → Red badge background</li>
            <li><code>--color-success</code> → Green badge background</li>
            <li><code>--color-accent-purple</code> → Purple badge background</li>
            <li><code>--color-gray-100</code> → Gray badge background</li>
            <li><code>--color-text-inverse</code> → Text on colored backgrounds</li>
            <li><code>--color-text-primary</code> → Text on gray background</li>
          </ul>
          
          <h3>📏 Spacing Token Mapping:</h3>
          <ul>
            <li><code>--spacing-1</code> → 4px (small vertical padding)</li>
            <li><code>--spacing-2</code> → 8px (medium vertical padding)</li>
            <li><code>--spacing-3</code> → 12px (small horizontal padding)</li>
            <li><code>--spacing-4</code> → 16px (medium horizontal padding, gap)</li>
            <li><code>--spacing-6</code> → 24px (large horizontal padding)</li>
          </ul>
          
          <h3>🔤 Typography Token Mapping:</h3>
          <ul>
            <li><code>--font-size-14</code> → 14px (badge text size)</li>
            <li><code>--font-family-mono</code> → Monospace font family</li>
            <li><code>--line-height-tight</code> → 1.2 (tight line height)</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default BadgeExamples;
