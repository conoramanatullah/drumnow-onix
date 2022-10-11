export interface IThemeProps {
  children: React.ReactNode | React.ReactNode[];
}

export interface ThemeTypography {
  sizes: {
    display: {
      large: string;
      medium: string;
      small?: string;
    },
    headline: {
      large: string;
      medium: string;
      small?: string;
    },
    body: {
      large: string;
      medium: string;
      small?: string;
    },
    label: {
      default: string;
    },
    caption: {
      default: string;
    }
  }
  weights: {
    default: number;
    bold: number;
  }
  family: {
    default: string;
  }
  lineHeight: {
    display: {
      large: string;
      medium: string;
      small?: string;
    };
    headline: {
      large: string;
      medium: string;
      small?: string;
    };
    body: {
      large: string;
      medium: string;
      small?: string;
    };
    label: {
      default: string;
    };
    caption: {
      default: string;
    };
  }
}

export interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    grays: {
      [key: string]: string;
    };
    error: {
      [key: string]: string;
    };
  }
  typography: ThemeTypography;
}