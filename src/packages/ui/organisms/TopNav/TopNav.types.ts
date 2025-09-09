import React from 'react';
import { IconName } from "../../atoms/Icon/Icon.types";

export interface Tab {
  iconName: IconName;
  label: string;
  action: () => void;
}

export interface TopNavProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether top navigation is disabled */
  disabled?: boolean;

  /** Whether top navigation is loading */
  loading?: boolean;

  /** Current active tab label */
  activeTab: string;

  /** User avatar path */
  avatarSrc: string;

  /** User status (true | false) */
  isUserAuthorized: boolean;

  /** List of navigation menu items */
  navMenu: Tab[];

  /** Called when a tab is clicked */
  onTabClick: (label: string) => void;

  /** Called when logo is clicked */
  onLogoClick: () => void;

  /** Called when notification icon is clicked */
  onIconClick: () => void;

  /** Called when avatar is clicked */
  onAvatarClick: () => void;

  /** Called when hamburger icon is clicked */
  onHamburgerClick: () => void;

  /** Called when "Login" is clicked */
  onLoginClick: () => void;

  /** Called when "Sign up" is clicked */
  onSignUpClick: () => void;
}
