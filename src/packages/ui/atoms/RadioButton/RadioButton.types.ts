import React from 'react';

export interface RadioButtonProps extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'onChange'> {
    /** Text or node displayed as the main label for the radio button */
    label: React.ReactNode;

    /** Value associated with this radio button */
    value: string;

    /** Whether this radio button is selected */
    checked: boolean;

    /** Whether this radio button is disabled */
    disabled?: boolean;

    /** Optional description text displayed below the label */
    description?: React.ReactNode;

    /** Visual variant of the radio button */
    variant?: 'default' | 'primary' | 'secondary';

    /** Callback fired when the radio button is clicked, receives the radio’s value */
    onChange: (value: string) => void;

    /** Additional CSS class name to apply to the container */
    className?: string;
}
