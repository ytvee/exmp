import { CSSProperties } from 'react';

export interface ColorPalette {
  primary: {
    white: string;
    black: string;
    gray: string;
    main: string;
    dark: string;
  };
  secondary: {
    red: string;
    green: string;
    blue: string;
    purple: string;
    orange: string;
    yellow: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  background: {
    paper1: string;
    paper2: string;
    paper3: string;
    paper4: string;
  };
  gradients: {
    primary: string;
    neonVoid: string;
    aquaHorizon: string;
    etherGlow: string;
    pulseNova: string;
    auroraVortex: string;
    solarEmber: string;
    mainGray: string;
  };
  shadowsEffects: {
    SMShadow: {
      boxShadow: string;
      backdropFilter: string;
    };
    MDShadow: {
      boxShadow: string;
      backdropFilter: string;
    };
    LGShadow: {
      boxShadow: string;
      backdropFilter: string;
    };
    XLShadow: {
      boxShadow: string;
      backdropFilter: string;
    };
    FocusFilled: {
      boxShadow: string;
    };
    FocusOutlined: {
      boxShadow: string;
    };
    FocusError: {
      boxShadow: string;
    };
  };
}

export interface Typography {
  body1?: CSSProperties;
  body2?: CSSProperties;
  h2?: CSSProperties;
  button?: CSSProperties;
  subtitle: unknown;
  headlines: {
    [key: string]: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      fontFamily: string;
      fontWeight: string;
    };
  };
  body: {
    [key: string]: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      fontFamily: string;
      fontWeight: string;
    };
  };
}

export interface Grid {
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  columns: number;
  margin: {
    desktop: string;
    mobile: string;
  };
  gutter: {
    desktop: string;
    mobile: string;
  };
}

export interface Theme {
  commonColor?: Record<string, string>;
  colors: ColorPalette;
  typography: Typography;
  grid: Grid;
  isDark: boolean;
}

export const lightTheme: Theme = {
  colors: {
    primary: {
      white: '#FFFFFF',
      black: '#000000',
      gray: '#808080',
      main: '#00A86B',
      dark: '#008856',
    },
    secondary: {
      red: '#FF0000',
      green: '#00FF00',
      blue: '#0000FF',
      purple: '#800080',
      orange: '#FFA500',
      yellow: '#FFFF00',
    },
    text: {
      primary: '#000000',
      secondary: '#555555',
      disabled: '#AAAAAA',
    },
    background: {
      paper1: '#F5F5F5',
      paper2: '#E0E0E0',
      paper3: '#CCCCCC',
      paper4: '#B0B0B0',
    },
    gradients: {
      primary: 'linear-gradient(90deg, #00A86B, #008856)',
      neonVoid: 'linear-gradient(90deg, #ff00ff, #800080)',
      aquaHorizon: 'linear-gradient(90deg, #00ffff, #008080)',
      etherGlow: 'linear-gradient(90deg, #ffffff, #eeeeee)',
      pulseNova: 'linear-gradient(90deg, #ff4500, #ff6347)',
      auroraVortex: 'linear-gradient(90deg, #ff0, #ff8c00)',
      solarEmber: 'linear-gradient(90deg, #ffd700, #ffa500)',
      mainGray: 'linear-gradient(90deg, #d3d3d3, #a9a9a9)',
    },
    shadowsEffects: {
      SMShadow: {
        boxShadow: '0px 1px 3px rgba(0,0,0,0.2)',
        backdropFilter: 'blur(2px)',
      },
      MDShadow: {
        boxShadow: '0px 3px 6px rgba(0,0,0,0.2)',
        backdropFilter: 'blur(3px)',
      },
      LGShadow: {
        boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
        backdropFilter: 'blur(4px)',
      },
      XLShadow: {
        boxShadow: '0px 7px 14px rgba(0,0,0,0.2)',
        backdropFilter: 'blur(5px)',
      },
      FocusFilled: { boxShadow: '0px 0px 5px 2px rgba(0, 168, 107, 0.5)' },
      FocusOutlined: { boxShadow: '0px 0px 5px 2px rgba(255, 165, 0, 0.5)' },
      FocusError: { boxShadow: '0px 0px 5px 2px rgba(255, 0, 0, 0.5)' },
    },
  },
  typography: {
    headlines: {
      h1: {
        fontSize: '32px',
        lineHeight: '40px',
        letterSpacing: '0.1px',
        fontFamily: 'Arial',
        fontWeight: 'bold',
      },
    },
    body: {
      body1: {
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.1px',
        fontFamily: 'Arial',
        fontWeight: 'normal',
      },
    },
    button: undefined,
    subtitle: undefined,
    h2: undefined,
    body1: undefined,
    body2: undefined,
  },
  grid: {
    breakpoints: { sm: '576px', md: '768px', lg: '992px', xl: '1200px' },
    columns: 12,
    margin: { desktop: '24px', mobile: '16px' },
    gutter: { desktop: '16px', mobile: '8px' },
  },
  isDark: false,
  commonColor: undefined,
};
