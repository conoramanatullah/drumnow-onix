import { ThemeProvider } from 'styled-components';
import { IThemeProps } from './Theme.types';

import {theme} from '../../styles';

export const Theme = (props: IThemeProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  );
};