import React from 'react';

interface cell {
  columnSpan?: number;
  rowSpan?: number;
  content: React.ReactNode | string;
}

export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Content to be rendered inside the component */
  children?: React.ReactNode;

  caption?: string;
  header?: cell[];
  body: cell[][];
}