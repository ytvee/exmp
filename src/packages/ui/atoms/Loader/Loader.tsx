import React from 'react';
import { LoaderProps } from './Loader.types';
import { validateComponentProps } from '@uiUtils/validation';
import styles from './Loader.module.css';
import LoaderSvg from './Loader.svg?react';

export const Loader: React.FC<LoaderProps> = ({
  size = 'small',
  className = '',
  'data-testid': testId,
  ...props
}) => {
  if (process.env.NODE_ENV === 'development') {
    validateComponentProps('Loader', { size, className }, {
      propTypes: {
        size: ['small', 'large']
      }
    });
  }

  const classes = [
    styles['asi-loader'],
    styles[`asi-loader--${size}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classes}
      data-asi-component="loader"
      data-testid={testId || 'loader'}
      {...props}
    >
      <div className={styles['asi-loader__circle']} >
        <LoaderSvg />
      </div>
    </div>
  );
};

export default Loader;
