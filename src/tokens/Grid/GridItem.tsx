import React from 'react';
import { Item } from './Grid.styles';
import { GridItemProps } from './Grid.type';

const GridItem: React.FC<GridItemProps> = ({ children, ...props }) => {
  return <Item {...props}>{children}</Item>;
};

export default GridItem;
