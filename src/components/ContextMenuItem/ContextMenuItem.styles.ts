import styled from 'styled-components';
import {theme} from '../../styles/theme';

export const ContextMenuItem = styled.button`
  background-color: ${theme.colors.grays['2']};
  width: 100%;
  display: flex;
  padding: 1.2rem 1.6rem;
  transition: all 0.2s ${theme.utility.curves['sine']};
  max-width: 20rem;

  &:hover {
    background-color: ${theme.colors.grays['3']};
  }
`;

ContextMenuItem.defaultProps = {
  theme,
};
