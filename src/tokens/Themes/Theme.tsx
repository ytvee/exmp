import '../../styles/tokens/colors.css';
import '../../styles/tokens/spacing.css';
import '../../styles/tokens/typography.css';
import '../../styles/semantic/theme-light.css';
import '../../styles/semantic/theme-dark.css';
import { Theme } from './Theme.type';

export const commonColor = {
  primary: {
    main: '#685DFF',
    dark: '#4D38FF',
    white: '#FFF',
    black: '#000',
    gray: '#00000099',
  },
  secondary: {
    red: '#D32F2F',
    green: '#1DB549',
    blue: '#2E6CF3',
    purple: '#9342F5',
    orange: '#F75D16',
    yellow: '#FFCC00',
  },
  gradients: {
    primary: 'linear-gradient(15deg,  #685DFF 17.16%,  #4D38FF 75%)',
    mainGray:
      ' linear-gradient(106deg, rgba(255, 255, 255, 0.72) 6.03%, rgba(255, 255, 255, 0.54) 41.45%, rgba(242, 242, 242, 0.72) 93.37%)',
    neonVoid: 'linear-gradient(180deg, #620D92 0%, #3B43E2 100%)',
    aquaHorizon: 'linear-gradient(180deg, #4B55DB 0%, #34E0E0 100%)',
    etherGlow: 'linear-gradient(180deg, #6A65DF 0%, #F8A4E9 100%)',
    pulseNova: 'linear-gradient(180deg, #9C7CF4 0%, #F49782 100%)',
    auroraVortex: 'linear-gradient(180deg, #F35D82 0%, #E3D26F 100%)',
    solarEmber: 'linear-gradient(180deg, #B2335F 0%, #FAA682 100%)',
  },
  shadowsEffects: {
    SMShadow: {
      boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.03)',
      backdropFilter: 'blur(10px)',
    },
    MDShadow: {
      boxShadow: '0px 8px 8px 0px rgba(0, 0, 0, 0.08)',
      backdropFilter: 'blur(10px)',
    },
    LGShadow: {
      boxShadow: '0px 10px 10px 0px rgba(0, 0, 0, 0.10)',
      backdropFilter: 'blur(10px)',
    },
    XLShadow: {
      boxShadow: '0px 12px 12px 0px rgba(0, 0, 0, 0.12)',
      backdropFilter: 'blur(10px)',
    },
    FocusFilled: {
      boxShadow: '0px 0px 0px 4px rgba(158, 252, 146, 0.40)',
    },
    FocusOutlined: {
      boxShadow: '0px 0px 0px 4px rgba(255, 255, 255, 0.40)',
    },
    FocusError: {
      boxShadow: '0px 0px 0px 4px rgba(255, 0, 0, 0.20)',
    },
  },
};

export const typography = {
  headlines: {
    h1: {
      fontSize: '32px',
      lineHeight: '132%',
      letterSpacing: '0%',
      fontFamily: '"Roboto", sans-serif',
      fontWeight: '700',
    },
    h2: {
      fontSize: '24px',
      lineHeight: '132%',
      letterSpacing: '0%',
      fontFamily: '"Roboto", sans-serif',
      fontWeight: '500',
    },
    h3: {
      fontSize: '18px',
      lineHeight: '132%',
      letterSpacing: '0%',
      fontFamily: '"Roboto", sans-serif',
      fontWeight: '500',
    },
    h4: {
      fontSize: '16px',
      lineHeight: '132%',
      letterSpacing: '0%',
      fontFamily: '"Roboto", sans-serif',
      fontWeight: '500',
    },
    h5: {
      fontSize: '14px',
      lineHeight: '132%',
      letterSpacing: '0%',
      fontFamily: '"Roboto", sans-serif',
      fontWeight: '500',
    },
  },
  body: {
    body1: {
      fontSize: '18px',
      lineHeight: '132%',
      letterSpacing: '-0.135px',
      fontFamily: '"Roboto Mono", monospace',
      fontWeight: '400',
    },
    body2: {
      fontSize: '16px',
      lineHeight: '122%',
      letterSpacing: '-0.12px',
      fontFamily: '"Roboto Mono", monospace',
      fontWeight: '400',
    },
    body3: {
      fontSize: '14px',
      lineHeight: '130%',
      letterSpacing: '-0.105px',
      fontFamily: '"Roboto Mono", monospace',
      fontWeight: '400',
    },
    body4: {
      fontSize: '12px',
      lineHeight: '130%',
      letterSpacing: '-0.09px',
      fontFamily: '"Roboto Mono", monospace',
      fontWeight: '400',
    },
  },
};

export const grid = {
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  columns: 12,
  margin: {
    desktop: '24px',
    mobile: '16px',
  },
  gutter: {
    desktop: '24px',
    mobile: '12px',
  },
};

export const lightTheme: Theme = {
  colors: {
    ...commonColor,
    text: {
      primary: '#000000DE',
      secondary: '#00000099',
      disabled: '#00000061',
    },
    background: {
      paper1: '#FFFFFF',
      paper2: '#DDD',
      paper3: '#E8ECF1',
      paper4: '#F3F6F8',
    },
  },
  typography: {
    ...typography,
    h2: undefined,
    button: undefined,
    subtitle: undefined,
    body1: undefined,
    body2: undefined,
  },
  grid: { ...grid },
  isDark: false,
  commonColor: undefined,
};

export const darkTheme: Theme = {
  colors: {
    ...commonColor,
    text: {
      primary: '#FFFFFF',
      secondary: '#FFFFFFB2',
      disabled: '#FFFFFF61',
    },
    background: {
      paper1: '#050A0F',
      paper2: '#050A0F',
      paper3: '#111317',
      paper4: '#1C1F24',
    },
  },
  typography: {
    ...typography,
    h2: undefined,
    button: undefined,
    subtitle: undefined,
    body1: undefined,
    body2: undefined,
  },
  grid: { ...grid },
  isDark: true,
  commonColor: undefined,
};

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    readonly _comment?: string; // Empty interface workaround
  }
}
