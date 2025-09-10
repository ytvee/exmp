import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from './App';
import { lightTheme } from '@tokens/Themes/Theme';

const RootComponent = () => {

  return (
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>,
);
