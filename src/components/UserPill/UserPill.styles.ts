import styled from 'styled-components';
import { theme } from '../../styles';
import { ITheme } from '../Theme';

export const UserPill = styled.div<{ theme: ITheme }>`
  display: inline-flex;
  align-items: center;
  background-color: ${theme.colors.grays[2]};
  border-radius: 6.4rem;
  transition: all 0.2s ${theme.utility.curves['sine']};

  width: 19rem;

  &:hover {
    background-color: ${theme.colors.grays[3]};
    cursor: pointer;
  }
`;

export const AvatarContainer = styled.div`
  padding: 0.4rem;
  
  > * {
    border: 0.1rem solid ${theme.colors.grays[3]};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  overflow: hidden;
  text-overflow: hidden;

  margin-left: 0.4rem;

  > p + p {
    margin-top: 0.4rem;
  }

  > p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const IconContainer = styled.div`
  margin: 1.4rem 1.2rem;
  margin-left: 0;
  min-width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

UserPill.defaultProps = {
  theme: theme
}