import React from 'react';

export type TBadgeVariants = 'blue' | 'red' | 'green' | 'purple' | 'gray';

export type TBadgeSizes ='small' | 'medium' | 'large';
export type TIconPlacement = 'start' | 'end';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Content to display inside the badge. Numbers ≥9999 will be clamped to 9999. */
    text: string | number;

    /** Additional CSS class name to apply to the badge container */
    className?: string;

    /** Tag color variant */
    variant?: TBadgeVariants;

    /** Tag size */
    size?: TBadgeSizes;
  
    /** Optional icon element */
    icon?: React.ReactNode;

    /** Optional icon placement. In the end of element by default */
    iconPlacement?: TIconPlacement;

    /** Callback fired when icon is clicked */
    onIconClick?: () => void;
}