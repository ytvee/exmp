import React from 'react';
import Typography from '../tokens/Typography/Typography';

export const Content = (props: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div
      style={{
        paddingTop: '20px',
        borderTop: '1px solid rgba(0,0,0,0.2)',
        paddingBottom: '20px',
      }}
    >
      <Typography variant="h3">{props.title} </Typography>
      <div style={{ marginTop: '30px' }}>{props.children}</div>
    </div>
  );
};
