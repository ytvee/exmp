import React, { useEffect } from 'react';
import styles from './Modal.module.css';
import { ModalProps } from './Modal.types';
import { Icon } from '../../atoms/Icon';
import { Button } from '../../atoms/Button';

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  actions = [],
  size = "medium",
  className,
  disabled = false,
  loading = false,
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
}) => {
  const modalClasses = [
    styles['asi-modal'],
    styles[`asi-modal--${size}`],
    disabled && styles['asi-modal--disabled'],
    loading && styles['asi-modal--loading'],
    className,
  ].filter(Boolean).join(' ');

  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeOnEscape, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div 
      className={styles['asi-modal-overlay']}
      data-asi-component="modal"
      data-testid="modal-overlay"
      onClick={handleOverlayClick}
    >
      <div className={modalClasses} onClick={(e) => e.stopPropagation()}>
        {(title || showCloseButton) && (
          <div className={styles['asi-modal__header']}>
            {title && (
              <h2 className={styles['asi-modal__title']}>
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                className={styles['asi-modal__close-button']}
                onClick={handleCloseClick}
                disabled={disabled}
                aria-label="Close modal"
              >
                <Icon name="Close" className={styles['asi-modal__close-icon']} />
              </button>
            )}
          </div>
        )}

        {description && (
          <div className={styles['asi-modal__description']}>
            {description}
          </div>
        )}

        <div className={styles['asi-modal__content']}>
          {children}
        </div>

        {actions.length > 0 && (
          <div className={styles['asi-modal__footer']}>
            {actions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant || 'secondary'}
                onClick={action.onClick}
                disabled={disabled || action.disabled}
                className={styles['asi-modal__action-button']}
              >
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;