import React from 'react';

export interface CheckBoxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /** Unique identifier for the checkbox input */
    id?: string;

    /** Label text displayed next to the checkbox */
    label?: string;

    /** Optional description text displayed under the label */
    description?: React.ReactNode;

    /** Checked state of the checkbox */
    checked?: boolean;

    /** Disabled state of the checkbox */
    disabled?: boolean;

    /** Variant of the checkbox styling */
    variant?: 'default' | 'primary' | 'secondary';

    /** Size of the checkbox */
    size?: 'small' | 'medium' | 'large';

    /** Loading state of the checkbox */
    loading?: boolean;

    /** Callback invoked when the checked state changes */
    onChange?: (checked: boolean) => void;

    /** Additional CSS class name for the container */
    className?: string;
}
