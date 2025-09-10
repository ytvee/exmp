import React from 'react';
import styles from './Footer.module.css';
import { FooterItem, FooterProps, FooterSubItem, ServiceItem } from './Footer.types';
import useIsMobile from '@utils/responsiveHooks/useIsMobile';
import isUndefined from "lodash/isUndefined"

import { DropDown, SelectOption } from '@molecules/DropDown';
import { Icon } from '@atoms/Icon';
import { Typography } from '@atoms/Typography';

export const Footer: React.FC<FooterProps> = ({
  items = [],
  serviceItems = [],
  isMobile: isMobileProp,
  className,
  variant = "full", // short
  disabled = false,
  loading = false,
  children
}) => {

  const isMobile = !isUndefined(isMobileProp) ? isMobileProp : useIsMobile();
  const isMobileClassPostfix = isMobile ? '-mobile' : '';

  const componentClasses = [
    styles['asi-footer-wrapper'],
    styles[`asi-footer-wrapper--${variant}`],
    isMobile && styles['asi-footer-wrapper--mobile'],
    disabled && styles['asi-footer-wrapper--disabled'],
    loading && styles['asi-footer-wrapper--loading'],
    className,
  ].filter(Boolean).join(' ');

  const ServiceItem = ({ item }: { item: ServiceItem },) => {
    return (
      <div className={styles['asi-footer-service-status']}>
        {item.icon}
        <Typography variant='body3'>{item.text}</Typography>
      </div>
    );
  };

  const FooterDropDownItem = ({ item }: { item: FooterSubItem }) => {
    return <a className={styles[`asi-footer-desktop-dropdown-item`]} href={item.href}>{item.label}</a>
  }

  const generateSubItemsToOptions = (subitems: FooterSubItem[]): SelectOption[] => {
    return subitems.map((subItem: FooterSubItem): SelectOption => {
      return {
        label: <FooterDropDownItem item={subItem} />,
        value: subItem.href
      }
    }
    )
  }

  const FooterNavItem = ({ item }: { item: FooterItem }) => {
    return item?.subItems ?
      <DropDown
        className={styles[`asi-footer-dropdown`]}
        options={generateSubItemsToOptions(item.subItems)}
        defaultPlaceHolder={item.label}
        popUpPlacement={window.innerWidth > 768 ? 'top' : 'bottom'}
        isArrowHidden={true}
        endIcon={<Icon name='ArrowDropDown' />}
      />
      : <a
        href={item.href}
        className={styles[`asi-footer-desktop-dropdown-item`]}
      >
        {item.label}
      </a>
  }

  return (
    <footer className={componentClasses} data-asi-component="footer">
      {children}
      <div className={styles[`asi-footer-content${isMobileClassPostfix}`]}>
        <img className={styles['asi-footer-logo']} src="/logo.png" alt="Logo" />
        <nav className={styles[`asi-footer-nav${isMobileClassPostfix}`]}>
          {items.map((item, index) => (
            <div key={index} className={styles['asi-footer-nav-item-container']}>
              <FooterNavItem item={item} />
            </div>
          ))}
        </nav>
      </div>
      <div className={styles[`asi-footer-texts`]}>
        {serviceItems.map((item, index) => <ServiceItem key={index} item={item} />)}
      </div>
    </footer>
  );
};

export default Footer;
