import React from 'react';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Unique identifier for the textarea element */
  id: string;

  /** Name attribute for the textarea */
  name?: string;

  /** Label text displayed above the textarea */
  label: string;

  /** Controlled value of the textarea */
  value?: string;

  /** Number of textare rows */
  rows?: number;

  /** Callback invoked when the textarea value changes */
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;

  /** Placeholder text shown when the textarea is empty */
  placeholder?: string;

  /** Helper text rendered below the textarea */
  helperText?: React.ReactNode;

  /** Whether the textarea is disabled */
  disabled?: boolean;

  /** Whether the textarea should auto-focus on mount */
  autoFocus?: boolean;

  /** Show the textarea in an error state */
  error?: boolean;

  /** Additional CSS class name for the root element */
  className?: string;
}
