import React from 'react';
import { IconName } from '../Icon/Icon.types';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Icon element to render inside the button */
    icon?: React.ReactNode;

    /** Name of the icon to render (uses our Icon component) */
    iconName?: IconName;

    /** Size of the icon button */
    size?: 'large' | 'medium' | 'small'; // 40px, 34px, 28px

    /** Color variant of the icon button */
    variant?: 'default' | 'blue' | 'red';

    /** Whether the button has a background circle */
    hasBackground?: boolean;

    /** Whether the button is disabled */
    disabled?: boolean;

    /** Whether the button is active */
    active?: boolean;
}
