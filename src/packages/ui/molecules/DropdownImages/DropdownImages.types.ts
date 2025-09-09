import { DropDownProps, SelectOption } from '../DropDown/DropDown.types';

export interface Option extends SelectOption {
  icon?: React.ReactNode;
  description?:  string;
  category?: string;
  label: string;
}

export interface Options {
  [key: string]: Option[]
}

export interface DropdownImagesProps extends Omit<DropDownProps, 'options'> {
  /** Array of options available for selection */
  options: Option[];

  /** Placeholder text displayed when no option is selected */
  placeholder?: string;

  /** Callback fired when an option is selected */
  onChange?: (value: string) => void;

  /** Currently selected option value */
  value?: string;

  /** Whether the dropdown is disabled */
  disabled?: boolean;

  /** Whether the dropdown has search functionality */
  searchable?: boolean;

  /** Additional CSS class name */
  className?: string;

  searchPlaceholder?: string;
}
