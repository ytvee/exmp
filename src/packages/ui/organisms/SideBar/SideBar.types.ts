import { ReactNode } from 'react';
import { IconName } from '@atoms/Icon/Icon.types';

export interface SidebarItemProps {
  avatarSrc?: string;
  onChange?: ((value: string | boolean) => void) | undefined;
  checked?: boolean | undefined;
  label?: string;
  icon?: ReactNode;
  iconName?: IconName;
  active?: boolean;
  type?: string;
  value?: string;
  count?: number;
  path?: string;
  render?: () => React.ReactNode;
  onClick?: (path: string) => void;
}

export interface SidebarSection {
  sectionHeader?: string;
  items: SidebarItemProps[];
  menuHeader?: string;
  sectionHeaderHyperlink?: {
    text: string;
    onClick: () => void;
  };
}

export interface SidebarProps {
  menuHeader?: string;
  sections: SidebarSection[];
  withBackButton?: boolean;
  onItemClick?: (path: string) => void;
  onBackClick?: () => void;
  className?: string;
} 