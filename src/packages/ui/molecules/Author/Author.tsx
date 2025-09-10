import React from 'react';
import styles from './Author.module.css';
import { AuthorProps } from './Author.types';
import { Avatar } from "@atoms/Avatar";
import { Icon } from "@atoms/Icon";

export const Author: React.FC<AuthorProps> = ({
    action,
    createdAt,
    name,
    avatarURL,
    className,
    iconName,
    ...props
}: AuthorProps) => {
    const componentClasses = [
        styles['asi-author'],
        className
    ].filter(Boolean).join(' ');

    const icon = iconName ?? 'Chart';

    return (
        <div
            className={ componentClasses }
            data-asi-component="author"
            onClick={ action }
            { ...props }
        >
            <div className={ styles['author-avatar-container'] }>
                <Avatar src={ avatarURL } alt="Author_avatar" size="small"/>
            </div>
            <div className={ styles['author-name-container'] }>
                { name }
            </div>
            <div className={ styles['author-create-at-container'] }>
                <Icon name={ icon } size="sm"/>
                <span>{ createdAt }</span>
            </div>
        </div>
    );
};

export default Author; 