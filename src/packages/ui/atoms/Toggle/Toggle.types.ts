import React from 'react';

export interface ToggleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /** Whether the toggle is on */
    checked: boolean;

    /** Callback when toggle changes state */
    onChange: (checked: boolean) => void;

    /** Whether the toggle is disabled */
    disabled?: boolean;

    /** Label text rendered next to the toggle */
    label?: string;

    /** Helper text displayed below the label */
    helperText?: string;

    /** Position of the label relative to the toggle */
    labelPosition?: 'left' | 'right';

    /** Additional CSS class name for the root element */
    className?: string;
}
