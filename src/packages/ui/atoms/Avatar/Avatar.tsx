import React, { useEffect, useState } from 'react';
import styles from './Avatar.module.css';
import { AvatarProps, AvatarSize } from './Avatar.types';

const DEFAULT_SIZES: Record<AvatarSize, string> = {
    extraSmall: '20px',
    small: '28px',
    medium: '60px',
    large: '90px',
};

export const Avatar: React.FC<AvatarProps> = ({
    size = 'medium',
    manualSize,
    src,
    alt,
    onClick,
    className,
}) => {
    const [localManualSize, setLocalManualSize] = useState<string | undefined>(undefined);

    useEffect(() => {
        if (manualSize !== localManualSize) {
            setLocalManualSize(manualSize);
        }
    }, [manualSize]);

    const wrapperStyle = {
        width: manualSize || DEFAULT_SIZES[size],
        height: manualSize || DEFAULT_SIZES[size],
    };

    const componentClasses = [
        styles['asi-avatar'],
        styles[size],
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div
            className={ componentClasses }
            style={ wrapperStyle }
            data-asi-component="avatar"
            onClick={ onClick }
        >
            <img src={ src } alt={ alt } className={ styles['asi-avatar-image'] }/>
        </div>
    );
};

export default Avatar;
