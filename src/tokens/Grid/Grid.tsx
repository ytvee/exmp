import React from 'react';
import { StyledGrid } from './Grid.styles';
import { GridProps } from './Grid.type';

const Grid: React.FC<GridProps> = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};

export default Grid;
