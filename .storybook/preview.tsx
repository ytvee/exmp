import ThemeProvider from '../src/tokens/Themes/ThemeProvider';
import GlobalStyle from './../src/globalstyles';
export const decorators = [
  (Story:any) => (
    <ThemeProvider>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    actions: {
      argTypesRegex: '^on[A-Z].*',
    },
    viewport: {
      defaultViewport: 'responsive',
    },
  },
}

export default preview
