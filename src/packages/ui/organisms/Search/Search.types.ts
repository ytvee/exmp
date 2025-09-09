import type { IconName } from '../../atoms/Icon/Icon.types';

export interface SearchProps {
  /** Additional CSS class name */
  className?: string;

  /** Name of the main search icon */
  iconName?: IconName;

  /** Name of the icon inside the filter/tag button */
  buttonIconName?: IconName;

  /** Text shown in the filter/tag button */
  buttonText?: string;

  /** Placeholder for the input */
  placeholder?: string;

  /** Max-width (or width constraint) of the component */
  width?: string;

  /** Controlled value of the input */
  value?: string;

  /** Change handler for the input (receives new value) */
  onChange?: (value: string) => void;

  /** Action when the button is clicked */
  buttonAction?: () => void;

  /** Whether the component is disabled */
  disabled?: boolean;

  /** Whether the component is in loading state */
  loading?: boolean;
}
