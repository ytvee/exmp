import React, { useRef, useCallback } from 'react';
import { SidebarProps, SidebarSection, SidebarItemProps } from './SideBar.types';
import { NanItem } from '@molecules/NanItem';
import { Button } from '@atoms/Button';
import styles from './SideBar.module.css';
import { Typography } from '@atoms/Typography';
import { Icon } from '@atoms/Icon';
import cn from 'classnames';

export const SideBar: React.FC<SidebarProps> = ({
  sections,
  onItemClick,
  onBackClick,
  withBackButton = false,
  className,
  ...props
}) => {
  const activeBases = useRef<Set<string>>(new Set());

  const handleBaseItemClick = useCallback((item: SidebarItemProps) => {
    if (item.type === 'base') {
      if (activeBases.current.has(item.label || '')) {
        activeBases.current.delete(item.label || '');
      } else {
        activeBases.current.add(item.label || '');
      }
    }
    onItemClick?.(item.path || '');
  }, [onItemClick]);

  const renderItem = useCallback((item: SidebarItemProps, index: number) => (
    <NanItem
      key={index}
      className={cn(!activeBases.current.has(item.label || '') && styles['asi-sidebar__not-active-item'])}
      type={item.type as 'base' | 'checkbox' | 'radio'}
      label={item.label || ''}
      iconName={item?.iconName}
      icon={item?.icon}
      checked={activeBases.current.has(item.label || '')}
      count={item.count}
      onClick={() => handleBaseItemClick(item)}
      path={item.path || ''}
    />
  ), [handleBaseItemClick]);

  const renderSection = useCallback((section: SidebarSection, index: number) => (
    <div className={styles['asi-sidebar__section']} key={index}>
      {section.sectionHeader && (
        <div className={styles['asi-sidebar__section-header']}>
          <Typography variant="h6" className={styles['asi-sidebar__section-title']}>
            {section.sectionHeader.toUpperCase()}
          </Typography>
        </div>
      )}
      <div className={styles['asi-sidebar__section-items']}>
        {section.items.map((item, itemIndex) => (
          <React.Fragment key={itemIndex}>
            {renderItem(item, itemIndex)}
          </React.Fragment>
        ))}
      </div>
    </div>
  ), [renderItem]);

  return (
    <div
      className={cn(styles['asi-sidebar'], className)}
      data-asi-component="sidebar"
      {...props}
    >
      {withBackButton && (
        <div className={styles['asi-sidebar__back-button']}>
          <Button
            variant="text"
            startIcon={<Icon name="ArrowLeftOutlined" />}
            onClick={onBackClick}
          >
            {props.menuHeader ?? '← Back'}
          </Button>
        </div>
      )}
      {props.menuHeader && !withBackButton && (
        <div className={styles['asi-sidebar__menu-header']}>
          <span className={styles['asi-sidebar__menu-header-text']}>
            {props.menuHeader}
          </span>
        </div>
      )}
      <div className={styles['asi-sidebar__sections']}>
        {sections.map(renderSection)}
      </div>
    </div>
  );
};

SideBar.displayName = 'SideBar';

export default SideBar; 