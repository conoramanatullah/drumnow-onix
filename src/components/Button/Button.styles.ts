import styled from 'styled-components';
import {theme} from '../../styles';
import {ITheme} from '../Theme';

export const Button = styled.button<{theme: ITheme}>`
  background-color: ${(props) => props.theme.colors.secondary};

  border: 0.1rem solid ${(props) => props.theme.colors.grays['5']};
  border-radius: 2.4rem;

  padding: 0.9rem 1.6rem;


  &:hover {
    background-color: ${(props) => props.theme.colors.grays['1']};
  }

  &:focus {
    outline: 0.1rem solid ${(props) => props.theme.colors.primary};
  }
`;

Button.defaultProps = {
  theme: theme,
};
