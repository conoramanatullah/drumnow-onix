import styled from 'styled-components';
import {theme} from '../../styles/theme';
import { IconName } from '../Icon';
import { ITheme } from '../Theme';

export const NavItem = styled.button<{ theme: ITheme, icon: IconName | undefined }>`
  align-items: center;
  background-color: transparent;
  display: flex;
  justify-content: ${(props) => props.icon ? 'flex-start' : 'center'};
  margin: 0;
  padding: 0.8rem 1.6rem;
  position: relative;
  width: 100%;
  max-width: 20rem;

  > * {
    margin: 0;
    padding: 0;
    position: relative;
    z-index: 1;
    color: ${(props) => props.icon ? 'white' : props.theme.colors.grays['4']};
    transition: all 0.2s ${theme.utility.curves['sine ']};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  i {
    margin-right: 1.6rem;
  }
  
  &::before {
    background: ${theme.colors.gradients.buttonHover};
    border-radius: 0.8rem;
    content: '';
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    transition: all 0.2s ${theme.utility.curves['sine']};
    width: 100%;
    z-index: 0;
  }

  &::after {
    border-radius: 0.8rem;
    content: '';
    height: 100%;
    left: 0;
    opacity: 0;
    outline: 0.2rem solid ${theme.colors.primary};
    position: absolute;
    transition: all 0.2s ${theme.utility.curves['sine']}; 
    width: 100%;
  }

  &:hover {
    > * {
      color: white;
    }

    &::before {
      opacity: 1;
    }
  }

  &:focus {
    &::after {
      opacity: 1; 
    }

    &::before {
      opacity: 0;
    }
  }

  &:active {
    > * {
      color: white;
    }

    &::before {
      opacity: 1;
    }
  }
`;

NavItem.defaultProps = {
  theme
}