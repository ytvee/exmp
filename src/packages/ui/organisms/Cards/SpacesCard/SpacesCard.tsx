import React from 'react';
import Button from '@atoms/Button/Button';
import StatusChip from '@atoms/StatusChip/StatusChip';
import { SpacesCardBenefitProps, SpacesCardProps } from './SpacesCard.types';
import { thousandsToKFormat } from '@utils/helpers';
import { Typography } from '@atoms/Typography';
import { Author } from '@molecules/Author';
import { Table } from '@atoms/Table';
import { Icon } from '@atoms/Icon';
import styles from './SpacesCard.module.css';
import classNames from 'classnames';

const agentsData = {
  state: 'Publishied',
  editDate: 'Edited 1 days ago',
  agents: [
    {
      firstCol: '4 Agents',
      secondCol: '2 Datasets',
    },
    {
      firstCol: '4 Agents',
      secondCol: '2 Datasets',
    },
    {
      firstCol: '4 Agents',
      secondCol: '2 Datasets',
    },
  ],
};

const Benefit: React.FC<SpacesCardBenefitProps> = ({
  id,
  iconName,
  count,
  text,
  className,
  onClick
}) => {
  return (
    <div className={classNames(styles['spacescard-body-benefit'], className)} data-benefit-id={id} onClick={onClick}>
      {iconName && (
        <Icon
          name={iconName}
          size="md"
        />
      )}
      {count && (
          <Typography variant='body2'>{count}</Typography>
      )}
      {text && (
        <Typography variant='body2'>{text}</Typography>
      )}
    </div>
  );
};

const StateTable = () => {
  return (
    <div className={styles['spacecard-table-wrapper']}>
      <table className={styles['spacecard-table']}>
        <thead>
          <tr className={styles['spacecard-table-header']}>
            <th className={styles['spacecard-table-header-left']}>
              <StatusChip status={'active'} label={'Published'} />
            </th>
            <th className={styles['spacecard-table-header-right']}>
              {agentsData.editDate}
            </th>
          </tr>
        </thead>
        <tbody>
          {agentsData.agents.map((agent) => (
            <tr key={agent.firstCol}>
              <td>{agent.firstCol}</td>
              <td>{agent.secondCol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const SpacesCard: React.FC<SpacesCardProps> = ({
  className,
  id,
  title,
  subtitle,
  mainImageURL,
  mainGradient,
  description,
  benefits,
  isActiveBenefits = true,
  withTableStub = false,
  table,
  author,
  action,
  additionalButtons,
  ...props
}) => {
  const componentClasses = [styles['asi-spacescard'], className]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={componentClasses}
      data-asi-component="spacescard"
      {...props}
    >
      <div className={styles['spacescard-main-content']}>
        {benefits && (
          <div className={styles['spacescard-header']}>
            <Benefit
              id="benefit-likes-mobile"
              iconName={benefits?.isLiked ? 'FavouriteFilled' : 'Favourite'}
              count={benefits.likes}
              className={classNames(mainImageURL && styles['invert-color-likes'])}
              onClick={benefits?.onLikeClick}
            />
          </div>
        )}

        <div
          className={styles['spacescard-cover']}
          data-testid="spacescard-cover"
          onClick={action ? () => action(id) : undefined}
        >
          {title &&
            (mainImageURL || mainGradient ? (
              <Typography variant="h2" color="inverse">
                {title}
              </Typography>
            ) : (
              <Typography variant="h3">{title}</Typography>
            ))}
          {(mainImageURL || mainGradient) && (
            <div
              className={styles['spacescard-cover-image']}
              style={mainGradient ? { background: mainGradient } : {}}
            >
              {mainImageURL && <img src={mainImageURL} alt={`image-${title}`} />}
            </div>
          )}

          {subtitle && <Typography variant="h3">{subtitle}</Typography>}
        </div>
        <div className={styles['spacescard-body']}>
        {benefits && (
          <div
            className={styles['spacescard-body-benefits']}
            data-benefits-state={isActiveBenefits ? 'active' : 'disabled'}
          >
            {typeof benefits?.count !== 'undefined' && (
              <Benefit
                iconName={'Views'}
                count={thousandsToKFormat(benefits.count, 'k')}
                text={benefits.label}
              />
            )}
            {typeof benefits?.amount !== 'undefined' && (
              <Benefit
                iconName={'DataBase'}
                count={thousandsToKFormat(benefits.amount, 'k')}
                text="backers"
              />
            )}
            {typeof benefits?.likes !== 'undefined' && (
              <Benefit
                id="benefit-likes-desktop"
                iconName={benefits?.isLiked ? 'FavouriteFilled' : 'Favourite'}
                count={thousandsToKFormat(benefits.likes, 'k')}
                onClick={benefits?.onLikeClick}
              />
            )}
          </div>
        )}
        {description && (
          <div className={styles['spacescard-body-description']}>
            {description}
          </div>
        )}

        {withTableStub && (
          <>
            <StateTable />
            <div className={styles['spacecard-buttons-panel']}>
              <Button
                startIcon={<Icon name="Edit" />}
                variant={'primary'}
                onClick={action ? () => action(id) : undefined}
              >
                Edit
              </Button>
              <Button onClick={action ? () => action(id) : undefined}>
                Space Profile
              </Button>
              <Button
                className={styles['spacecard-button-more']}
                onClick={action ? () => action(id) : undefined}
              >
                •••
              </Button>
            </div>
          </>
        )}
        {table && (
          <div className={styles['spacescard-table']}>
            <Table
              header={table.header}
              body={table.body}
              caption={table?.caption}
            />
          </div>
        )}
      </div>
    </div>
    <div className={styles['spacescard-additional-content']}>
      {additionalButtons && (
        <div className={styles['spacescard-body-buttons']}>
          {additionalButtons.map((button, index) => (
            <Button
              id={button?.id || `button-${index}`}
              key={index}
              variant={button?.variant || 'secondary'}
              onClick={() => button.onClick(id)}
              disabled={button?.disabled || false}
            >
              {button.label}
            </Button>
          ))}
        </div>
      )}

      {author && (
        <div
          className={styles['spacescard-body-author-container']}
          style={{ borderTop: !table ? '1px solid rgba(0, 0, 0, 0.1)' : '' }}
        >
          <Author
            action={ author?.authorAction }
            createdAt={author.createdAt}
            name={author.name}
            avatarURL={author.avatarURL}
            iconName="Reload"
          />
        </div>
      )}
    </div>
    </div>
  );
};

export default SpacesCard;
