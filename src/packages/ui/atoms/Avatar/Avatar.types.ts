import React from 'react';

export type AvatarSize = 'extraSmall' | 'small' | 'medium' | 'large';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Image source URL */
    src: string;

    /** Alternative text for the image */
    alt: string;

    /** Manual override for size (e.g. '80px') */
    manualSize?: string;

    /** Predefined size keyword */
    size?: AvatarSize;

    /** Additional CSS class name */
    className?: string;

    /** Whether the avatar is disabled */
    disabled?: boolean;

    /** Whether the avatar is in loading state */
    loading?: boolean;
}
