import React from 'react';
import styles from './AdvancedAgentCard.module.css';
import type { AdvancedAgentCardProps } from './AdvancedAgentCard.types';
import { Avatar } from '@atoms/Avatar';
import { Button } from '@atoms/Button';
import { Typography } from '@atoms/Typography';
import { Table } from '@atoms/Table';
import { Icon } from '@atoms/Icon';
import StatusChip from '@atoms/StatusChip/StatusChip';

export const AdvancedAgentCard: React.FC<AdvancedAgentCardProps> = ({
  avatarSrc,
  title,
  isHosted,
  isRunning,
  editedAt,
  space,
  spaceHref,
  address,
  addressHref,
  agentsCount,
  componentsCount,
  totalCost,
  onPrimary,
  onRemove,
  isPrimary = false,
  className,
}) => {
  const rootClass = [styles['asi-aac'], className].filter(Boolean).join(' ');

  return (
    <div className={rootClass} data-asi-component="advanced-agent-card">
      <div className={styles['asi-aac__header']}>
        <div className={styles['asi-aac__user']}>
          <Avatar src={avatarSrc} alt={title} size="large" />
          <div className={styles['asi-aac__user-info']}>
            <Typography variant="h4">{title}</Typography>
            <div className={styles['asi-aac__header-actions']}>
              {isHosted ? (
                <div className={styles['asi-aac__hosted']}>
                  <Icon name="Cloud" size="sm" />
                  <span>Hosted</span>
                </div>
              ) : (
                <div className={styles['asi-aac__hosted']}>
                  <Icon name="Cloud" size="sm" />
                  <span>Self-hosted</span>
                </div>
              )}
               <StatusChip status={isRunning ? 'active' : undefined} iconName={isRunning ? 'Play' : 'Close'} label={isRunning ? 'Running' : 'Stopped'} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Table
          header={[
            { content: <StatusChip status={'active'} label={'Published'} /> },
            { content: editedAt ? <span className={styles['asi-aac__edited']}>Edited {editedAt}</span> : '' },
          ]}
          body={[
            [
              { content: 'Space' },
              {
                content: spaceHref ? (
                  <a className={styles['asi-aac__link']} href={spaceHref} target="_blank" rel="noreferrer">{space}</a>
                ) : (
                  <span className={styles['asi-aac__value']}>{space}</span>
                ),
              },
            ],
            [
              { content: 'Address' },
              {
                content: addressHref ? (
                  <a className={styles['asi-aac__link']} href={addressHref} target="_blank" rel="noreferrer">{address}</a>
                ) : (
                  <span className={styles['asi-aac__value']}>{address}</span>
                ),
              },
            ],
            [{ content: `${agentsCount} Agents` }, { content: `${componentsCount} Components` }],
            [{ content: 'Total Cost' }, { content: totalCost }],
          ]}
        />
      </div>

      <div className={styles['asi-aac__footer']}>
        <Button
          size="small"
          variant={isPrimary ? 'secondary' : 'primary'}
          onClick={onPrimary}
        >
          {isPrimary ? 'Primary Agent' : 'Make Primary'}
        </Button>
        <Button size="small" variant="danger" onClick={onRemove}>
          Remove
        </Button>
      </div>
    </div>
  );
};

export default AdvancedAgentCard;


