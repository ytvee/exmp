import React from 'react';

export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Total number of pages */
  totalPages: number;

  /** Currently selected page (1-based) */
  currentPage: number;

  /** Callback fired when page is changed */
  onPageChange: (page: number) => void;

  /** Maximum number of visible page buttons */
  maxVisibleButtons?: number;

  /** Additional CSS class name */
  className?: string;

} 