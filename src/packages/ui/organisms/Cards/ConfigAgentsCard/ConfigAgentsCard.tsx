import React from 'react';
import { ConfigAgentsCardProps } from './ConfigAgentsCard.types';
import { Typography } from '@atoms/Typography';
import styles from './ConfigAgentsCard.module.css';
import cn from 'classnames';

export const ConfigAgentsCard: React.FC<ConfigAgentsCardProps> = ({
  className,
  status,
  title,
  imgTitle,
  mainImageURL,
  mainGradient,
  description,
  additionalButtons,
  ...props
}) => {
  const componentClasses = cn(styles['asi-config-agents-card'], className);

  return (
    <div
      className={componentClasses}
      data-asi-component="config-agents-card"
      {...props}
    >
        <div className={styles['config-agents-card-main-content']}>
          {(mainImageURL || mainGradient) && (
            <div
              className={styles['config-agents-card-cover-image']}
              style={mainGradient ? { background: mainGradient } : {}}
            >
              {mainImageURL && <img src={mainImageURL} alt={`image-${title}`} />}

              {imgTitle && <Typography variant='h3' className={styles['config-agents-card-cover__image-title']}>{imgTitle}</Typography>}
            </div>
          )}

          {status && (
            <div className={styles['config-agents-card-cover-status']}>{status}</div>
          )}
          <div className={styles['config-agents-card-body__content']}>
            {title && <Typography variant="h4">{title}</Typography>}
            {description && (
              <Typography variant="body4" className={styles['config-agents-card-body-description']}>
                {description}
              </Typography>
            )}
          </div>
        </div>
          {additionalButtons && <div className={styles['config-agents-card-body-buttons']}>{additionalButtons}</div>}
      </div>
  );
};

export default ConfigAgentsCard;
