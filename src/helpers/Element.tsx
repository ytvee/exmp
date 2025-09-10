import React from 'react';
import Typography from '@tokens/Typography/Typography';

export const Element = (props: {
  children: React.ReactNode;
  description: string;
}) => {
  return (
    <div
      style={{
        paddingBottom: '30px',
      }}
    >
      <div style={{ marginBottom: '20px' }}>{props.children}</div>
      <Typography variant="body4">{props.description} </Typography>
    </div>
  );
};
