import React from 'react';
import { OverviewCardProps } from "./OverviewCard.types";
import styles from './OverviewCard.module.css';
import { Icon } from '@atoms/Icon';
import { Typography } from '@atoms/Typography';
import { Button } from '@atoms/Button';
import { lightTheme } from '@tokens/Themes/Theme';

export const OverviewCard: React.FC<OverviewCardProps> = ({
    className,
    id,
    index,
    title,
    iconName,
    icon,
    description,
    stats,
    action,
    buttons = [],
}) => {
    const componentClasses = [
        styles['asi-overviewcard'],
        className,
    ].filter(Boolean).join(' ');
    
    type GradientKey = keyof typeof lightTheme.colors.gradients;
    const gradientsWithoutGray = { ...lightTheme.colors.gradients };
    
    // Remove gray gradients if it exists
    const gradientsForRemoving = ['mainGray'];
    gradientsForRemoving.forEach((key) => {
        if (key in gradientsWithoutGray) {
            delete gradientsWithoutGray[key as GradientKey];
        }
    });

    const gradients = Object.keys(gradientsWithoutGray).reverse() as GradientKey[];

    const gradientColor: GradientKey = index ? gradients[index % gradients.length] : 'pulseNova';
    

    return (
        <div
            className={ componentClasses }
            data-asi-component="overviewcard"
            onClick={action ? () => action(id || 'asi-overviewcard') : undefined}
        >
            <div className={ styles['overviewcard-header'] }>
                <div className={ styles['overviewcard-icon-wrapper'] } style={{ background: lightTheme.colors.gradients[gradientColor] }}>
                    { iconName && (<Icon name={ iconName } className={ styles['overviewcard-icon'] } size="xl" />) }
                    {!iconName && icon && (
                        <span className={ styles['overviewcard-icon'] }>
                            {icon}
                        </span>
                    )}
                </div>
                <Typography variant='h3' className={ styles['overviewcard-title'] }>{ title }</Typography>
            </div>
            { description && <div className={ styles['overviewcard-description'] }>
                 <Typography variant='body1'>{ description }</Typography>
            </div> }
            { stats && (
                <div className={ styles['overviewcard-stats'] }>
                <div className={ styles['overviewcard-stats-list'] }>
                        {stats.map((stat, index) => (
                            <div key={ index } className={ styles['overviewcard-stat'] }>
                                <Typography variant='h3'>
                                    { stat.count }
                                </Typography>
                                <Typography variant='body2' color='secondary'>
                                    { stat.text }
                                </Typography>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {buttons && (
                <div className={ styles['overviewcard-buttons'] }>
                    {buttons.map((button, index) => (
                        <Button
                            id={ button?.id || `button-${index}` }
                            key={ index }
                            variant={ button.variant || 'secondary' }
                            size={button.variant === 'text' ? 'small' : 'medium'}
                            onClick={() => button.onClick(button?.id || `button-${index}`)}
                            disabled={button?.disabled || false}
                        >
                            {button.label}
                        </Button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default OverviewCard;
