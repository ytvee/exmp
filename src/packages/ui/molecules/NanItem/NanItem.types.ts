import { IconName } from "../../atoms/Icon/Icon.types";

export interface NanItemProps {
  type: 'base' | 'checkbox' | 'radio' | 'avatar';
  label: string;
  checked?: boolean;
  onChange?: (value: boolean | string) => void;
  onClick?: () => void;
  children?: React.ReactNode;
  avatarSrc?: string;
  count?: number;
  iconName?: IconName;
  icon?: React.ReactNode;
  value?: string;
  path?: string;
  truncate?: boolean;
  className?: string;
}
