import React from 'react';
import { PaginationProps } from './Pagination.types';
import { IconButton } from '@atoms/IconButton/IconButton';
import styles from './Pagination.module.css';
import { Icon } from '@atoms/Icon';
import { Button } from '@atoms/Button';

enum NavigationButtonVariants {
  BEFORE = "before",
  NEXT = "next"
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  maxVisibleButtons = 5,
  className,
}) => {
  const componentClasses = [
    styles['asi-pagination'],
    className,
  ].filter(Boolean).join(' ');

  const pageNumberClasses = (pageNumber: number) => [
    currentPage === pageNumber ? styles['asi-pagination-page-wrapper-active'] 
    : styles['asi-pagination-page-wrapper'],
  ].filter(Boolean).join(' ');

  const getPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];

    if (totalPages <= maxVisibleButtons) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pageNumbers.push(1);
    
    const startPage = Math.max(
      2,
      currentPage - Math.floor(maxVisibleButtons / 2),
    );
    const endPage = Math.min(totalPages - 1, startPage + maxVisibleButtons - 3);

    if (startPage > 2) {
      pageNumbers.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < totalPages - 1) {
      pageNumbers.push('...');
    }

    // Always show last page
    pageNumbers.push(totalPages);
    
    return pageNumbers;
  };

  const NavigationButton: React.FC<{ variant: NavigationButtonVariants }> = ({ variant }) => {
    const navigationButtonsMeta = {
      [NavigationButtonVariants.BEFORE]: {
        pageChange: currentPage - 1,
        disabledState: currentPage === 1,
        ariaLabel: "Previous page",
        icon: <Icon name='ArrowLeftOutlined' />
      },
      [NavigationButtonVariants.NEXT]: {
        pageChange: currentPage + 1,
        disabledState: currentPage === totalPages,
        ariaLabel: "Next page",
        icon: <Icon name='ArrowRightOutlined' />
      }
    }

    const navigationButton = navigationButtonsMeta[variant];
    return (
      <IconButton
        active={!navigationButton.disabledState}
        className={styles[`asi-pagination-navigation-button${navigationButton.disabledState && '--disabled'}`]}
        aria-label={navigationButton.ariaLabel}
        icon={navigationButton.icon}
        hasBackground={false}
        size='small'
        variant='blue'
        disabled={navigationButton.disabledState}
        onClick={() => !navigationButton.disabledState && onPageChange(navigationButton.pageChange)}
      />
    )
  }

  const pageNumbers = getPageNumbers();
  
  return (
    <div 
      className={componentClasses}
      data-asi-component="pagination"
    >
      <NavigationButton variant={NavigationButtonVariants.BEFORE} />

      {pageNumbers.map((pageNumber, index) =>
        pageNumber === '...' ? (
          <div className={styles['asi-pagination-ellipsis']} key={index}>
            ...
          </div>
        ) : (
          <div key={index} className={pageNumberClasses(Number(pageNumber))}>
            <Button
              size='small'
              variant='outlined'
              onClick={() => onPageChange(Number(pageNumber))}
              aria-label={`Go to page ${pageNumber}`}
              aria-current={currentPage === pageNumber ? 'page' : undefined}
            >
              {pageNumber}
            </Button>
          </div>
        ),
      )}

      <NavigationButton variant={NavigationButtonVariants.NEXT} />
    </div>
  );
};

export default Pagination; 