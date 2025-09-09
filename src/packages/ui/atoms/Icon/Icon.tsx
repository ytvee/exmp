import React from 'react';
import { IconProps } from './Icon.types';
import styles from './Icon.module.css';

// Import all icons as React components
import Add from '../../../../assets/icons/Add.svg?react';
import AddFilled from '../../../../assets/icons/AddFilled.svg?react';
import Android from '../../../../assets/icons/Android.svg?react';
import ArrowDropDown from '../../../../assets/icons/ArrowDropDown.svg?react';
import ArrowLeft from '../../../../assets/icons/ArrowLeft.svg?react';
import ArrowLeftOutlined from '../../../../assets/icons/ArrowLeftOutlined.svg?react';
import ArrowRight from '../../../../assets/icons/ArrowRight.svg?react';
import ArrowRightOutlined from '../../../../assets/icons/ArrowRightOutlined.svg?react';
import AttachFile from '../../../../assets/icons/AttachFile.svg?react';
import Bitbucket from '../../../../assets/icons/Bitbucket.svg?react';
import Chart from '../../../../assets/icons/Chart.svg?react';
import Chat from '../../../../assets/icons/Chat.svg?react';
import ChatFilled from '../../../../assets/icons/ChatFilled.svg?react';
import CheckCircle from '../../../../assets/icons/CheckCircle.svg?react';
import Checked from '../../../../assets/icons/Checked.svg?react';
import Close from '../../../../assets/icons/Close.svg?react';
import Cloud from '../../../../assets/icons/Cloud.svg?react';
import Copy from '../../../../assets/icons/Copy.svg?react';
import Dashboard from '../../../../assets/icons/Dashboard.svg?react';
import DataBase from '../../../../assets/icons/DataBase.svg?react';
import DeployedCode from '../../../../assets/icons/DeployedCode.svg?react';
import Draft from '../../../../assets/icons/Draft.svg?react';
import Edit from '../../../../assets/icons/Edit.svg?react';
import Exit from '../../../../assets/icons/Exit.svg?react';
import GithubIcon from '../../../../assets/icons/GithubIcon.svg?react';
import GoogleIcon from '../../../../assets/icons/GoogleIcon';
import Home from '../../../../assets/icons/Home.svg?react';
import Inbox from '../../../../assets/icons/Inbox.svg?react';
import Info from '../../../../assets/icons/Info.svg?react';
import Loader from '../../../../assets/icons/Loader.svg?react';
import Location from '../../../../assets/icons/Location.svg?react';
import Mail from '../../../../assets/icons/Mail.svg?react';
import Memory from '../../../../assets/icons/Memory.svg?react';
import Menu from '../../../../assets/icons/Menu.svg?react';
import Moon from '../../../../assets/icons/Moon.svg?react';
import MoreHoriz from '../../../../assets/icons/MoreHoriz.svg?react';
import MoreVert from '../../../../assets/icons/MoreVert.svg?react';
import Person from '../../../../assets/icons/Person.svg?react';
import Play from '../../../../assets/icons/Play.svg?react';
import RadioButtonChecked from '../../../../assets/icons/RadioButtonChecked.svg?react';
import Rocket from '../../../../assets/icons/Rocket.svg?react';
import RotateRight from '../../../../assets/icons/RotateRight.svg?react';
import Settings from '../../../../assets/icons/Settings.svg?react';
import SmartToy from '../../../../assets/icons/SmartToy.svg?react';
import Star from '../../../../assets/icons/Star.svg?react';
import StarShield from '../../../../assets/icons/StarShield.svg?react';
import Sun from '../../../../assets/icons/Sun.svg?react';
import TextSnippet from '../../../../assets/icons/TextSnippet.svg?react';
import VisibilityOff from '../../../../assets/icons/VisibilityOff.svg?react';
import WarningAmber from '../../../../assets/icons/WarningAmber.svg?react';
import Web from '../../../../assets/icons/Web.svg?react';
import Work from '../../../../assets/icons/Work.svg?react';
import ZoomIn from '../../../../assets/icons/ZoomIn.svg?react';
import ZoomOut from '../../../../assets/icons/ZoomOut.svg?react';
import Favourite from '../../../../assets/icons/Favourite.svg?react';
import FavouriteFilled from '../../../../assets/icons/FavouriteFilled.svg?react';
import ShoppingBag from '../../../../assets/icons/ShoppingBag.svg?react';
import Sales from '../../../../assets/icons/Sales.svg?react';
import Reload from '../../../../assets/icons/Reload.svg?react';
import Coin from '../../../../assets/icons/Coin.svg?react';
import Views from '../../../../assets/icons/Views.svg?react';
import Notification from '../../../../assets/icons/Notification.svg?react';
import Logo from '../../../../assets/icons/Logo.svg?react';
import Hamburger from '../../../../assets/icons/Hamburger.svg?react';
import LargeArrowRight from '../../../../assets/icons/LargeArrowRight.svg?react';
import Filter from '../../../../assets/icons/Filter.svg?react';
import Search from '../../../../assets/icons/Search.svg?react';

// Icon mapping
const iconMap = {
  Add,
  AddFilled,
  Android,
  ArrowDropDown,
  ArrowLeft,
  ArrowLeftOutlined,
  ArrowRight,
  ArrowRightOutlined,
  AttachFile,
  Bitbucket,
  Chart,
  Chat,
  ChatFilled,
  CheckCircle,
  Checked,
  Close,
  Cloud,
  Copy,
  Dashboard,
  DataBase,
  DeployedCode,
  Draft,
  Edit,
  Exit,
  GithubIcon,
  GoogleIcon,
  Home,
  Inbox,
  Info,
  Loader,
  Location,
  Mail,
  Memory,
  Menu,
  Moon,
  MoreHoriz,
  MoreVert,
  Person,
  Play,
  RadioButtonChecked,
  Rocket,
  RotateRight,
  Settings,
  SmartToy,
  Star,
  StarShield,
  Sun,
  TextSnippet,
  VisibilityOff,
  WarningAmber,
  Web,
  Work,
  ZoomIn,
  ZoomOut,
  Favourite,
  FavouriteFilled,
  ShoppingBag,
  Sales,
  Reload,
  Coin,
  Views,
  Logo,
  Notification,
  Hamburger,
  Filter,
  LargeArrowRight,
  Search,
} as const;

export const Icon: React.FC<IconProps> = ({
  name,
  size = 'md',
  className = '',
  color,
  onClick,
  'data-testid': dataTestId,
}) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const componentClasses = [
    styles['asi-icon'],
    styles[`asi-icon--${size}`],
    onClick && styles['asi-icon--clickable'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const style = color ? { color } : undefined;

  return (
    <div
      className={componentClasses}
      style={style}
      onClick={onClick}
      data-asi-component="icon"
      data-asi-icon-name={name}
      data-testid={dataTestId || `icon-${name}`}
    >
      <IconComponent />
    </div>
  );
};

export default Icon;
