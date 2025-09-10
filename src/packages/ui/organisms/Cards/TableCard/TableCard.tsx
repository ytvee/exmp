import React from 'react';
import styles from './TableCard.module.css';
import { TMachineStatus, TableCardProps } from './TableCard.types';
import { Author } from '@molecules/Author';
import { Icon } from '@atoms/Icon';
import StatusChip from '@atoms/StatusChip/StatusChip';
import Button from '@atoms/Button/Button';
import { Typography } from '@atoms/Typography';
import { Avatar } from '@atoms/Avatar';
import { StatusType } from '@atoms/StatusChip';
import { Table } from '@atoms/Table';

const machinStatuses: Record<TMachineStatus, { status: StatusType; label: string }> = {
    running: {
        status: "active",
        label: "Running"
    },
    pending: {
        status: "pending",
        label: "Pending"
    },
    deployed: {
        status: "active",
        label: "Deployed"
    },
    stopped: {
        status: "rejected",
        label: "Stopped"
    }
}

export const TableCard: React.FC<TableCardProps> = ({
    className,
    id,
    title,
    mainImageURL,
    description,
    machineStatus,
    table,
    author,
    action,
    additionalButtons,
    ...props
}) => {
    const componentClasses = [
        styles['asi-tablecard'],
        className,
    ].filter(Boolean).join(' ');

    return (
        <div
            className={componentClasses}
            data-asi-component="tablecard"
            {...props}
        >   
            <div className={styles['tablecard-main-content']}>
                <div
                    className={styles['tablecard-header']}
                    data-testid="tablecard-header"
                    onClick={action ? () => action(id) : undefined}
                >
                    {mainImageURL && (
                        <Avatar
                            src={mainImageURL || '/YieldMax.png'}
                            alt="Author_avatar"
                            size="large"
                        />
                    )}
                    <div className={styles['tablecard-header-title']}>
                        {title && 
                                <Typography variant="h3" >{title}</Typography>
                        }
                        <div className={styles['tablecard-header-info']}>
                            <Button variant="secondary" size='small' startIcon={<Icon name="Cloud"/>}>Hosted</Button>
                            <StatusChip
                                status={machinStatuses[machineStatus].status}
                                label={machinStatuses[machineStatus].label}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles['tablecard-body']}>
                    {description && (
                        <Typography variant='body1' color='secondary'>
                            {description}
                        </Typography>
                    )}
                    <div className={styles['tablecard-table']}>
                        <Table header={table?.header} body={table.body}/>
                    </div>
                </div>
            </div>
            <div className={styles['tablecard-additional-content']}>
                {author && (
                    <div className={styles['tablecard-body-author-container']}>
                        <Author
                            action={ author?.authorAction }
                            createdAt={author.createdAt}
                            name={author.name}
                            avatarURL={author.avatarURL}
                            iconName="Reload"
                        />
                    </div>
                )}
                {additionalButtons && (
                    <div className={styles['tablecard-body-buttons']}>
                        {additionalButtons.map((button, index) => (
                            <Button
                                id={button?.id || `button-${index}`}
                                key={index}
                                variant={button?.variant || 'secondary'}
                                onClick={() => button.onClick(id)}
                                disabled={button?.disabled || false}
                                {...button?.rest}
                            >
                                {button.label}
                            </Button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TableCard;