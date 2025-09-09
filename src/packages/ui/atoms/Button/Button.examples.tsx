import React from 'react';
import { Button } from './Button';
import { Icon } from '../Icon';


export const ButtonExamples: React.FC = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Button Component Examples</h1>
      
      <section style={{ marginBottom: '3rem' }}>
        <h2>Variants</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="text">Text</Button>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>Sizes</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>Shapes</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Button variant="primary" shape="rectangle">Rectangle</Button>
          <Button variant="primary" shape="circle">Circle</Button>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>Size + Shape Combinations</h2>
        
        <h3>Rectangle Form</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Button variant="primary" size="small" shape="rectangle">Small</Button>
          <Button variant="primary" size="medium" shape="rectangle">Medium</Button>
          <Button variant="primary" size="large" shape="rectangle">Large</Button>
        </div>

        <h3>Circle/Pill Form</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Button variant="primary" size="small" shape="circle">Small</Button>
          <Button variant="primary" size="medium" shape="circle">Medium</Button>
          <Button variant="primary" size="large" shape="circle">Large</Button>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>All Variants in Both Forms</h2>
        
        <h3>Rectangle Form</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Button variant="primary" shape="rectangle">Primary</Button>
          <Button variant="secondary" shape="rectangle">Secondary</Button>
          <Button variant="danger" shape="rectangle">Danger</Button>
          <Button variant="outlined" shape="rectangle">Outlined</Button>
          <Button variant="text" shape="rectangle">Text</Button>
        </div>

        <h3>Circle/Pill Form</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Button variant="primary" shape="circle">Primary</Button>
          <Button variant="secondary" shape="circle">Secondary</Button>
          <Button variant="danger" shape="circle">Danger</Button>
          <Button variant="outlined" shape="circle">Outlined</Button>
          <Button variant="text" shape="circle">Text</Button>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>States</h2>
        
        <h3>Disabled State</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Button variant="primary" disabled>Primary</Button>
          <Button variant="secondary" disabled>Secondary</Button>
          <Button variant="danger" disabled>Danger</Button>
          <Button variant="outlined" disabled>Outlined</Button>
          <Button variant="text" disabled>Text</Button>
        </div>

        <h3>Loading State</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Button variant="primary" loading>Primary</Button>
          <Button variant="secondary" loading>Secondary</Button>
          <Button variant="danger" loading>Danger</Button>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>With Icons</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Button variant="primary" startIcon={<Icon name="SmartToy" />}>
            Start Icon
          </Button>
          <Button variant="secondary" endIcon={<Icon name="SmartToy" />}>
            End Icon
          </Button>
          <Button variant="danger" startIcon={<Icon name="SmartToy" />} endIcon={<Icon name="SmartToy" />}>
            Both Icons
          </Button>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>Practical Examples</h2>
        
        <h3>Form Actions</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Button variant="primary" size="large">Save Changes</Button>
          <Button variant="outlined" size="large">Cancel</Button>
          <Button variant="danger" size="large">Delete</Button>
        </div>

        <h3>Navigation</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Button variant="secondary" shape="circle" size="small">1</Button>
          <Button variant="secondary" shape="circle" size="small">2</Button>
          <Button variant="secondary" shape="circle" size="small">3</Button>
          <Button variant="primary" shape="circle" size="small">4</Button>
        </div>

        <h3>Action Buttons</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Button variant="primary" startIcon={<Icon name="SmartToy" />}>
            Create New
          </Button>
          <Button variant="secondary" startIcon={<Icon name="SmartToy" />}>
            Import
          </Button>
          <Button variant="text" startIcon={<Icon name="SmartToy" />}>
            Export
          </Button>
        </div>
      </section>
      <section style={{ marginBottom: '3rem' }}>
        <h2>Design System Specifications</h2>
        <div style={{ 
          background: '#f5f5f5', 
          padding: '1rem', 
          borderRadius: '8px',
          fontSize: '14px',
          lineHeight: '1.6'
        }}>
          <h3>✅ Implemented Features:</h3>
          <ul>
            <li><strong>Sizes:</strong> Small (14px), Medium (16px), Large (18px)</li>
            <li><strong>Padding:</strong> Small (4px 12px), Medium (8px 24px), Large (12px 36px)</li>
            <li><strong>Shapes:</strong> Rectangle (8px radius), Circle/Pill (9999px radius)</li>
            <li><strong>Colors:</strong> Primary (#685DFF), Secondary (gradient), Danger (#D32F2F)</li>
            <li><strong>States:</strong> Default, Hover, Focus, Disabled, Loading</li>
            <li><strong>Borders:</strong> 1px solid borders for all variants</li>
            <li><strong>Gaps:</strong> Small (≈7px), Medium (8px), Large (≈9px)</li>
          </ul>
          
          <h3>🎯 Key Improvements:</h3>
          <ul>
            <li>Replaced Figma gradients with DS solid colors</li>
            <li>Fixed sizing logic to use em-based heights</li>
            <li>Added proper border definitions for all states</li>
            <li>Corrected circle/pill border-radius to use --radius-full</li>
            <li>Unified spacing and alignment across all variants</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ButtonExamples;
