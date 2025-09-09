import styled from 'styled-components';
import { grid } from '../Themes/Theme';
import { GridItemProps } from './Grid.type';

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${grid.columns}, 1fr);
  gap: ${grid.gutter.desktop};
  margin: ${grid.margin.desktop};
  grid-auto-rows: minmax(min-content, max-content);

  @media (max-width: ${grid.breakpoints.xl}) {
    grid-template-columns: repeat(${grid.columns}, 1fr);
    gap: ${grid.gutter.desktop};
  }

  @media (max-width: ${grid.breakpoints.lg}) {
    grid-template-columns: repeat(12, 1fr);
    gap: ${grid.gutter.desktop};
  }

  @media (max-width: ${grid.breakpoints.md}) {
    grid-template-columns: repeat(8, 1fr);
    gap: ${grid.gutter.mobile};
  }

  @media (max-width: ${grid.breakpoints.sm}) {
    grid-template-columns: repeat(5, 1fr);
    gap: ${grid.gutter.mobile};
    margin: ${grid.margin.mobile};
  }
`;

export const Item = styled.div<GridItemProps>`
  grid-column: span ${(props) => props.xs || 1};
  display: flex;
  flex-direction: column;
  min-height: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  @media (min-width: ${grid.breakpoints.sm}) {
    grid-column: span ${(props) => props.sm || props.xs || 1};
  }

  @media (min-width: ${grid.breakpoints.md}) {
    grid-column: span ${(props) => props.md || props.sm || props.xs || 1};
  }

  @media (min-width: ${grid.breakpoints.lg}) {
    grid-column: span
      ${(props) => props.lg || props.md || props.sm || props.xs || 1};
  }

  @media (min-width: ${grid.breakpoints.xl}) {
    grid-column: span
      ${(props) =>
        props.xl || props.lg || props.md || props.sm || props.xs || 1};
  }
`;
