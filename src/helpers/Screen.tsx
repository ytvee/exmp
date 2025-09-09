import React from 'react';
import { lightTheme } from './../tokens/Themes/Theme';
export const Screen = (props: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        background: lightTheme.colors.background.paper4,
        padding: '20px',
      }}
    >
      {props.children}
    </div>
  );
};
