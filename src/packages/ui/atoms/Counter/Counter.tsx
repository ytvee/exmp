import React, { useState } from 'react';
import { CounterProps } from './Counter.types';
import styles from './Counter.module.css';
import { Typography } from '../Typography';

export const Counter: React.FC<CounterProps> = ({
  initialValue = 0,
  min = 0,
  max = 100,
  step = 1,
  label,
  onChange,
  className,
  ...rest
}) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    if (count < max) {
      const newValue = count + step;
      setCount(newValue);
      onChange?.(newValue);
    }
  };

  const handleDecrement = () => {
    if (count > min) {
      const newValue = count - step;
      setCount(newValue);
      onChange?.(newValue);
    }
  };

  const isDecrementDisabled = count <= min;
  const isIncrementDisabled = count >= max;

  const Classes = [styles['asi-counter'], className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={Classes}>
      {label && <Typography variant='body2' color='secondary'>{label}</Typography>}
      <div
        className={styles['asi-counter-wrapper']}
        data-asi-component="counter"
        {...rest}
      >
        <button
          type="button"
          aria-label="decrement"
          onClick={handleDecrement}
          disabled={isDecrementDisabled}
          className={[
            styles['asi-counter-button'],
            !isDecrementDisabled ? styles.active : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <span
            className={[
              styles['asi-minus-icon'],
              !isDecrementDisabled ? styles.active : '',
            ]
              .filter(Boolean)
              .join(' ')}
          />
        </button>
        <div className={styles['asi-counter-display']}>
          {count}
        </div>
        <button
          type="button"
          aria-label="increment"
          onClick={handleIncrement}
          disabled={isIncrementDisabled}
          className={[
            styles['asi-counter-button'],
            !isIncrementDisabled ? styles.active : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <span
            className={[
              styles['asi-plus-icon'],
              !isIncrementDisabled ? styles.active : '',
            ]
              .filter(Boolean)
              .join(' ')}
          />
        </button>
      </div>
    </div>
  );
};

export default Counter;
