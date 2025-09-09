import React from 'react';

export type THelperTextVariant = 'default' | 'error' | 'success';
export interface InputFieldProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Unique identifier for the input element */
    id: string;

    /** Name attribute for the input */
    name?: string;

    /** Label text displayed above the input */
    label?: string;

    /** Whether the field is required */
    required?: boolean;

    /** Type of the underlying `<input>` */
    type?: React.HTMLInputTypeAttribute;

    /** Controlled value of the input */
    value?: string | number;

    /** Callback invoked when the input value changes */
    onChange?: React.ChangeEventHandler<HTMLInputElement>;

    /** Placeholder text shown when the input is empty */
    placeholder?: string;

    /** Whether the input is disabled */
    disabled?: boolean;

    /** Whether the input should auto-focus on mount */
    autoFocus?: boolean;

    /** Show the input in an error state */
    error?: boolean;

    /** Show the input in a success state */
    success?: boolean;

    /** Icon node rendered at the start of the input */
    startIcon?: React.ReactNode;

    /** Tooltip text for the start icon */
    startIconToolTip?: string;

    /** Icon node rendered at the end of the input */
    endIcon?: React.ReactNode;

    /** Tooltip text for the end icon */
    endIconTooltip?: string;

    /** Button node rendered at the end of the input */
    endButton?: React.ReactNode;

    /** Helper text rendered below the input */
    helperText?: React.ReactNode;

    /** Variant for helper text styling */
    helperTextVariant?: THelperTextVariant;

    /** Click handler for the start icon */
    onStartIconClick?: () => void;

    /** Click handler for the end icon */
    onEndIconClick?: () => void;

    /** Content rendered below the entire component */
    belowText?: React.ReactNode;

    /** Additional CSS class name for the root element */
    className?: string;
}
