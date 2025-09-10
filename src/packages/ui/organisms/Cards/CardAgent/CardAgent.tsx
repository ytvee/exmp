import React from 'react';
import { CardAgentProps, Benefits } from './CardAgent.types';
import styles from './CardAgent.module.css';
import { Avatar } from '@atoms/Avatar';
import { Icon } from '@atoms/Icon';
import { IconName } from '@atoms/Icon/Icon.types';
import { Author } from '@molecules/Author';

type IconKeys =
    | 'comments'
    | 'runs'
    | 'likes'
    | 'backers'
    | 'price'
    | 'monetization'
    | 'accountBalance'
    | 'accessTime'
    | 'views';

interface IconData {
    name: IconName;
    color: string;
}

const icons: Record<IconKeys, IconData> = {
    comments: { name: 'Chat', color: '#1DB549' },
    runs: { name: 'Chat', color: '#1DB549' },
    likes: { name: 'Favourite', color: '#4D38FF' },
    views: { name: 'Views', color: '#1DB549' },
    backers: { name: 'Chat', color: '#1DB549' },
    price: { name: 'Chat', color: '#1DB549' },
    monetization: { name: 'Chat', color: '#1DB549' },
    accountBalance: { name: 'Chat', color: '#1DB549' },
    accessTime: { name: 'Chat', color: '#1DB549' },
};

const BenefitsBlock = ({ type, value }: Benefits) => (
    <div key={ type } className={ styles['asi-cardagent__stat'] }>
        <Icon name={ icons[type]?.name } size="sm" color={ icons[type]?.color }/>
        <div
            className={ styles['asi-cardagent__stat-value'] }
            style={ { color: icons[type].color } }
        >
            { value }
        </div>
    </div>
);

export const CardAgent: React.FC<CardAgentProps> = ({
    id,
    title,
    prefix,
    content,
    benefits,
    mainImageURL,
    author,
    action,
    variant='init',
    className = '',
}) => {
    const variantLoweredCase = variant.toLowerCase();

    const componentClasses = [
        styles['asi-cardagent'],
        styles[`asi-cardagent--${ variantLoweredCase }`],
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div
            className={ componentClasses }
            data-asi-component="cardagent"
            data-variant={ variantLoweredCase }
            onClick={ () => action?.(id) }
        >
            <div
                className={ styles['asi-cardagent__avatar-container'] }
            >
                {mainImageURL && (
                    <Avatar
                        src={ mainImageURL }
                        alt="Author_avatar"
                        size="medium"
                        manualSize="100%"
                    />
                )}
            </div>

            <div className={ styles['asi-cardagent__content-container'] }>
                <div
                    className={ styles['asi-cardagent__stats-container'] }
                    data-variant={ variantLoweredCase }
                >
                    { benefits && benefits.map((Benefits: Benefits) => (
                        <BenefitsBlock key={ Benefits.type } type={ Benefits.type } value={ Benefits.value }/>
                    )) }
                </div>
                <div className={ styles['asi-cardagent__prefix'] }>
                    { prefix && ( <div color="primary">/{ prefix }</div> ) }
                </div>
                <div className={ styles['asi-cardagent__text-container'] }>
                    { title && (
                        <div className={ styles['asi-cardagent__title'] }>
                                <h3>{ title }</h3>
                            </div>
                        ) }

                        { content && (
                            <div
                                className={ styles['asi-cardagent__description'] }
                                data-variant={ variantLoweredCase }
                            >
                                { content }
                            </div>
                        ) }
                    </div>

                    { author && (
                        <div className={ styles['asi-cardagent__author-information'] }>
                            <Author
                                action={ author?.authorAction }
                                createdAt={ author.createdAt }
                                name={ author.name }
                                avatarURL={ author.avatarURL }
                            />
                        </div>
                    ) }
                </div>
            </div>
            );
            };

export default CardAgent;
