export type GridProps = {
  children: React.ReactNode;
};

export type GridItemProps = {
  xs?: number; // Width for extra small screens (mobile)
  sm?: number; // Width for small screens
  md?: number; // Width for medium screens
  lg?: number; // Width for large screens
  xl?: number; // Width for extra large screens
  children: React.ReactNode;
};
