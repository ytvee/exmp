import React from 'react';
import styles from './NanItem.module.css';
import { NanItemProps } from './NanItem.types';
import { Badge } from '../../atoms/Badge';
import { Icon } from '../../atoms/Icon';
// Utility function moved inline
const truncateLabel = (label: string, maxLength: number): string => {
  return label.length > maxLength ? `${label.slice(0, maxLength)}...` : label;
};
import { CheckBox } from '../../atoms/CheckBox';
import { RadioButton } from '../../atoms/RadioButton';
import { Avatar } from '../../atoms/Avatar';
import classNames from 'classnames';

export const NanItem: React.FC<NanItemProps> = ({
  type,
  label,
  checked = false,
  avatarSrc,
  onChange,
  onClick,
  count,
  iconName,
  value,
  truncate,
  className,
  children
}) => {
  const componentClasses = classNames(
    styles['asi-nanitem'],
    styles[`asi-nanitem--${type}`],
    checked && styles['asi-nanitem--checked'],
    className);

  const normalizedLabel = truncate ? truncateLabel(label, 12) : label;
  
  const BaseStartComponent = () => (
    iconName && <Icon name={iconName} />
  )

  const AvatarStartComponent = () => (
    avatarSrc ? <Avatar size="extraSmall" alt="avatar" src={avatarSrc} /> : <Icon name='Person' />
  )

  const CheckBoxStartComponent = () => (
    <CheckBox
      className={styles[`asi-nanitem--button`]}
      checked={checked}
      label={normalizedLabel}
      onChange={(checked) => {
        onChange?.(checked);
      }}
    />
  )

  const RadioStartComponent = () => {
    if (!value) return

    return (
    <RadioButton
      className={styles[`asi-nanitem--button`]}
      checked={checked}
      value={value}
      label={normalizedLabel}
      onChange={() => onChange?.(value)}
    />
  )}

  const StartComponents = {
    base: <BaseStartComponent />,
    checkbox: <CheckBoxStartComponent />,
    radio: <RadioStartComponent />,
    avatar: <AvatarStartComponent />,
  }

  return (
    <div 
      className={componentClasses}
      data-asi-component="nanitem"
      onClick={() => onClick?.()}
    >
      {StartComponents[type]}
      {type !== "radio" && type !== "checkbox" && (normalizedLabel || children)}
      {count && <Badge 
        className={styles[`asi-nanitem--badge`]}
        text={count.toString()} variant='blue'
      />}
    </div>
  );
};

export default NanItem; 