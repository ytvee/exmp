import React from 'react';

export interface CookiesProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Callback fired when the Accept All button is clicked */
  onAccept: () => void;

  /** Callback fired when the Reject All button is clicked */
  onReject: () => void;

  /** Additional CSS class name */
  className?: string;
}