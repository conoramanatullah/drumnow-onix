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
  letterSpacing: {
    display: {
      large: string;
      medium: string;
      small?: string;
    }
    headline: {
      large: string;
      medium: string;
      small?: string;
    }
    body: {
      large: string;
      medium: string;
      small?: string;
    }
    label: {
      default: string;
    }
    caption: {
      default: string;
    }
  }
}

export interface ThemeColorList {
  [key: string]: string;
}

export interface ThemeGradientList {
  [key: string]: string;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  gradients: ThemeGradientList;
  grays: ThemeColorList;
  error: ThemeColorList;
  success: ThemeColorList;
  warning: ThemeColorList;
}

export interface ITheme {
  colors: ThemeColors;
  typography: ThemeTypography;
  utility: {
    curves: {
      [key: string]: string;
    }
  }
}