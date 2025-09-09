import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { TBadgeSizes, TBadgeVariants, TIconPlacement } from './Badge.types';
import Icon from '../Icon/Icon';
import '../../../../storybookStyles.css';

const variants: TBadgeVariants[]  = ['blue', 'red', 'green', 'purple', 'gray'];
const sizes: TBadgeSizes[] = ['small', 'medium', 'large'];
const iconPlacements: TIconPlacement[] = ['start', 'end'];

const meta: Meta<typeof Badge> = {
    title: 'atoms/Badge',
    component: Badge,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'Badge component with exact DS specifications using design tokens. Renders a pill-shaped badge with precise dimensions based on content length and size.',
            },
        },
    },
    argTypes: {
        text: {
            control: 'text',
            description:
                'Content to display inside the badge (string or number). Numbers ≥9999 are clamped.',
        },
        className: {
            control: 'text',
            description: 'Additional CSS class name to apply to the badge container.',
        },
        onClick: {
            action: 'clicked',
            description: 'Click handler callback.',
        },
        size: {
            control: { type: 'select' },
            options: sizes,
            description: 'Badge size with exact DS dimensions using spacing tokens',
        },
        variant: {
            control: { type: 'select' },
            options: variants,
            description: 'Badge color variant using color tokens',
        },
        iconPlacement: {
            control: { type: 'select' },
            options: iconPlacements,
            description: 'Icon placement relative to text',
        }
    },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
    args: {
        text: 5,
    },
};

export const OverLimit: Story = {
    name: 'Over Limit (>=9999)',
    args: {
        text: 12345,
    },
};

export const StringContent: Story = {
    name: 'String Content',
    args: {
        text: 'New',
    },
};

export const EmptyContent: Story = {
    name: 'Empty Content',
    args: {
        text: ' ',
    },
};

export const WithIcon: Story= {
    name: 'With Icon',
    render: () => (
        <div className="asi-story-row" style={ { display: "flex", gap: '16px' } }>
            {iconPlacements.map((iconPlacement) => (
                <Badge key={iconPlacement} text="99" iconPlacement={iconPlacement} icon={<Icon name="Close" />}
                />))}
        </div>
    )
};

export const AllExamples: Story = {
    name: 'All Examples',
    render: () => (
        <div className="asi-story-column">
            {variants.map((variant) => (
                <div key={variant} className="asi-story-row">
                    {sizes.map((size) => (
                        <Badge key={size} text="99" size={size} variant={variant}/>))}
                </div>
            ))}
        </div>
    ),
};

export const SizeComparison: Story = {
    name: 'Size Comparison - Single vs Double Digits',
    render: () => (
        <div className="asi-story-column">
            <h3>Single Digit Content (0-9)</h3>
            <div className="asi-story-row">
                <Badge text="5" size="small" variant="blue" />
                <Badge text="5" size="medium" variant="blue" />
                <Badge text="5" size="large" variant="blue" />
            </div>
            
            <h3>Double Digit Content (10-99) - Uses .asi-badge--double-digit class</h3>
            <div className="asi-story-row">
                <Badge text="99" size="small" variant="blue" />
                <Badge text="99" size="medium" variant="blue" />
                <Badge text="99" size="large" variant="blue" />
            </div>
            
            <div style={{ 
                background: '#f0f8ff', 
                padding: '1rem', 
                borderRadius: '8px',
                fontSize: '12px',
                color: '#666',
                marginTop: '1rem'
            }}>
                <strong>CSS Classes Applied:</strong><br/>
                • Single digit: <code>.asi-badge--small</code>, <code>.asi-badge--medium</code>, <code>.asi-badge--large</code><br/>
                • Double digit: <code>.asi-badge--double-digit</code> + size class<br/>
                • All sizes use exact DS dimensions via CSS
            </div>
        </div>
    ),
};

export const DesignTokens: Story = {
    name: 'Design Tokens Usage',
    render: () => (
        <div className="asi-story-column">
            <h3>Color Tokens</h3>
            <div className="asi-story-row">
                <Badge text="Info" variant="blue" size="medium" />
                <span style={{ fontSize: '12px', color: '#666' }}>
                    Uses: var(--color-info)
                </span>
            </div>
            
            <div className="asi-story-row">
                <Badge text="Error" variant="red" size="medium" />
                <span style={{ fontSize: '12px', color: '#666' }}>
                    Uses: var(--color-error)
                </span>
            </div>
            
            <div className="asi-story-row">
                <Badge text="Success" variant="green" size="medium" />
                <span style={{ fontSize: '12px', color: '#666' }}>
                    Uses: var(--color-success)
                </span>
            </div>
            
            <div className="asi-story-row">
                <Badge text="Purple" variant="purple" size="medium" />
                <span style={{ fontSize: '12px', color: '#666' }}>
                    Uses: var(--color-accent-purple)
                </span>
            </div>
            
            <div className="asi-story-row">
                <Badge text="Gray" variant="gray" size="medium" />
                <span style={{ fontSize: '12px', color: '#666' }}>
                    Uses: var(--color-gray-100)
                </span>
            </div>
            
            <h3>Spacing Tokens</h3>
            <div className="asi-story-row">
                <Badge text="Small" size="small" variant="blue" />
                <span style={{ fontSize: '12px', color: '#666' }}>
                    Padding: var(--spacing-2) var(--spacing-3)
                </span>
            </div>
            
            <div className="asi-story-row">
                <Badge text="Medium" size="medium" variant="blue" />
                <span style={{ fontSize: '12px', color: '#666' }}>
                    Padding: var(--spacing-2) var(--spacing-4)
                </span>
            </div>
            
            <div className="asi-story-row">
                <Badge text="Large" size="large" variant="blue" />
                <span style={{ fontSize: '12px', color: '#666' }}>
                    Padding: var(--spacing-4) var(--spacing-6)
                </span>
            </div>
        </div>
    ),
};

export const DimensionSpecifications: Story = {
    name: 'DS Dimension Specifications',
    render: () => (
        <div className="asi-story-column">
            <h3>Small Size</h3>
            <div className="asi-story-row">
                <Badge text="5" size="small" variant="blue" />
                <span style={{ fontSize: '12px', color: '#666' }}>
                    Single: 23.41×28.2px | Double: 31.81×28.2px
                </span>
            </div>
            
            <h3>Medium Size</h3>
            <div className="asi-story-row">
                <Badge text="99" size="medium" variant="blue" />
                <span style={{ fontSize: '12px', color: '#666' }}>
                    Single: 32.41×28.2px | Double: 40.81×28.2px
                </span>
            </div>
            
            <h3>Large Size</h3>
            <div className="asi-story-row">
                <Badge text="99" size="large" variant="blue" />
                <span style={{ fontSize: '12px', color: '#666' }}>
                    Single: 40.41×34.2px | Double: 48.81×34.2px
                </span>
            </div>
        </div>
    ),
};
