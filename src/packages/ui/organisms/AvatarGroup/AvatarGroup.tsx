import React from 'react';
import { AvatarGroupProps } from './AvatarGroup.types';
import { Avatar } from '../../atoms/Avatar';
import styles from './AvatarGroup.module.css';

const AvatarGroup: React.FC<AvatarGroupProps> = ({ 
  avatars, 
  maxVisible = 5, 
  remainingAvatars = 5,
  className = ''
}) => {
  const visibleAvatars = avatars.slice(0, maxVisible);

  const componentClasses = [
    styles['asi-avatar-group'],
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={componentClasses} data-asi-component="avatargroup">
      {visibleAvatars.map((value, index) => (
        <div key={index} className={styles['asi-avatar-group__wrapper']}>
          <Avatar size="small" src={value} alt={`Avatar ${index + 1}`} />
        </div>
      ))}
      {remainingAvatars > 0 && (
        <div className={styles['asi-avatar-group__number-circle']}>
          <span>{`+${remainingAvatars}`}</span>
        </div>
      )}
    </div>
  );
};

export default AvatarGroup; 