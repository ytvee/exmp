import React from 'react';
import styles from './Table.module.css';
import { TableProps } from './Table.types';
import { Typography } from '../Typography';

export const Table: React.FC<TableProps> = ({
  children,
  className,
  caption,
  header,
  body,
  ...props
}) => {
  const componentClasses = [
    styles['asi-table-wrapper'],
    className,
  ].filter(Boolean).join(' ');

  const headerRowClasses = [
    styles['asi-table-row'],
    header && styles['asi-table-first-row'],
  ].filter(Boolean).join(' ');

  const BodyRowClasses = (index: number) => [
    styles['asi-table-row'],
    !header && index === 0 && styles['asi-table-first-row'],
    body && index === body.length - 1 && styles['asi-table-last-row'],
  ].filter(Boolean).join(' ');

  return (
    <div className={componentClasses}>
    <table
      className={styles['asi-table']}
      data-asi-component="table"
      {...props}
    >
      {header && (
        <thead>
          <tr className={headerRowClasses}>
            {header.map((row, idx) => (
              <th key={idx} className={styles['asi-table-cell']}>
                  {row.content}
              </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {body && body.map((row, rowIdx) => (
          <tr key={rowIdx} className={BodyRowClasses(rowIdx)}>
            {row && row.map((cell, cellIdx) => (
              <td
                key={cellIdx}
                className={styles['asi-table-cell']}
              >
                {cell.content}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      {children}
    </table>
      {caption && (
          <Typography variant="caption" color="secondary">
            {caption}
          </Typography>
      )}
      </div>
  );
};

export default Table; 