import React from 'react';
import { CryptoOwnerCardProps } from './CryptoOwnerCard.types';
import { Avatar } from "../../../atoms/Avatar";
import { Icon } from "../../../atoms/Icon";
import styles from './CryptoOwnerCard.module.css';

export const CryptoOwnerCard: React.FC<CryptoOwnerCardProps> = ({
    className,
    variant = 'extended',
    cardId,
    imageURL,
    title,
    isBagIconShown = true,
    count,
    description,
    action,
}) => {
    const componentClasses = [
        styles['asi-cryptoownercard'],
        className,
    ].filter(Boolean).join(' ');

    return (
        <div
            className={ componentClasses }
            data-asi-component="cryptoownercard"
            data-cryptoownercard-variant={ variant }
            onClick={action && cardId ? () => action(cardId) : undefined}
        >
            { cardId && (
                <div className={ styles['asi-cryptoownercard-id-container'] }>
                    <h2>{ cardId }</h2>
                </div>
            ) }

            { imageURL && (
                <div
                    className={ styles['asi-cryptoownercard-avatar-container'] }
                    data-cryptoownercard-variant={ variant }
                >
                    <Avatar
                        src={ imageURL }
                        alt={ 'asi-cryptoownercard-avatar' }
                        manualSize="100%"
                    />
                </div>
            ) }

            <div
                className={ styles['asi-cryptoownercard-text-container'] }
                data-cryptoownercard-variant={ variant }
            >
                { title && (
                    <h3>{ title }</h3>
                ) }
                { (count || description) && (
                    <div className={ styles['asi-cryptoownercard-text-description-container'] }>
                        { isBagIconShown && <Icon name={ 'ShoppingBag' } size="sm"/> }
                        <p>{ count && count } { description && description } </p>
                    </div>
                ) }
            </div>
        </div>
    );
};

export default CryptoOwnerCard; 