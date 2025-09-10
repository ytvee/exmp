import React from 'react';
import { StatusChipProps } from './StatusChip.types';
import { validateComponentProps } from '@uiUtils/validation';
import styles from './StatusChip.module.css';
import { Icon } from '@atoms/Icon';
import classNames from 'classnames';

export const StatusChip: React.FC<StatusChipProps> = ({
  status = 'default',
  label,
  iconName,
  className = '',
  'data-testid': testId,
  ...props
}) => {
  if (process.env.NODE_ENV === 'development') {
    validateComponentProps('StatusChip', { status, label, className }, {
      propTypes: {
        status: ['active', 'rejected', 'pending', 'default', 'private']
      }
    });
  }

  const IconByStatus = {
    active: <Icon name='Play' data-testid="status-icon" />,
    rejected: <Icon name='Close' data-testid="status-icon" />,
    pending: <Icon name='RotateRight' data-testid="status-icon" />,
    default: <Icon name='RotateRight' data-testid="status-icon" />,
    private: <Icon name='Views' data-testid="status-icon" />,
  }

  const LabelByStatus = {
    active: 'Active',
    rejected: 'Rejected',
    pending: 'Pending',
    default: 'Status',
    private: 'Private',
  }

  const displayLabel = label || LabelByStatus[status];

  const classes = classNames(
    styles['asi-statuschip'],
    styles[`asi-statuschip--${status}`],
    className);

  return (
    <button
      className={classes}
      data-asi-component="statuschip"
      data-testid={testId || 'statuschip'}
      {...props}
    >
      <div className={styles['asi-statuschip__icon']}>
        {iconName ? <Icon name={iconName}/> : IconByStatus[status]}
      </div>
      <span className={styles['asi-statuschip__label']}>
        {displayLabel}
      </span>
    </button>
  );
};

export default StatusChip;