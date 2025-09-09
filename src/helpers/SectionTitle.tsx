import React from 'react';
import { lightTheme } from './../tokens/Themes/Theme';
import Typography from '../tokens/Typography/Typography';

export const SectionTitle = (props: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        background: lightTheme.colors.background.paper4,
        paddingBottom: '20px',
      }}
    >
      <Typography variant="h1">{props.children}</Typography>
    </div>
  );
};
