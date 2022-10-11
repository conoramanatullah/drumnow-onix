import { ITheme } from "../components";

export const theme: ITheme = {
  colors: {
    primary: '#FFFFFF',
    secondary: '#000000',
    grays: {
      '0': '#000000',
      '1': '#17181C',
      '2': '#33353D',
      '3': '#4F525C',
      '4': '#9294A0',
      '5': '#C7C9D1',
      '6': '#E3E4E8',
      '100': '#FFFFFF',
    },
    error: {
      '1': '#410E0B',
      '2': '#601410',
      '3': '#8C1D18',
      '4': '#B3261E',
      '5': '#DC362E',
      '6': '#E46962',
      '7': '#EC928E',
    }
  },
  typography: {
    sizes: {
      display: {
        large: '4.6rem',
        medium: '3.8rem',
        small: '3.6rem',
      },
      headline: {
        large: '3rem',
        medium: '2.4rem',
        small: '2rem',
      },
      body: {
        large: '1.8rem',
        medium: '1.6rem',
        small: '1.4rem',
      },
      label: {
        default: '1.4rem',
      },
      caption: {
        default: '1.2rem',
      }
    },
    weights: {
      default: 400,
      bold: 600,
    },
    family: {
      default: 'Be Vietnam Pro, sans-serif',
    },
    lineHeight: {
      display: {
        large: '5.4rem',
        medium: '4.6rem',
      },
      headline: {
        large: '3.8rem',
        medium: '3.2rem',
        small: '2.8rem'
      },
      body: {
        large: '2.8rem',
        medium: '2.4rem',
        small: '2.2rem',
      },
      label: {
        default: '2.2rem',
      },
      caption: {
        default: '1.4rem',
      }
    },
    letterSpacing: {
      display: {
        large: '-0.02em',
        medium: '-0.01em',
      },
      headline: {
        large: '-0.01em',
        medium: '-0.005em',
        small: '-0.003em',
      },
      body: {
        large: '-0.003em',
        medium: '-0.001em',
        small: '0em',
      },
      label: {
        default: '0.001em',
      },
      caption: {
        default: '0.005em',
      }
    }
  },
  utility: {
    curves: {
      sine: 'cubic-bezier(0.45, 0.05, 0.55, 0.95)',
    }
  }
}