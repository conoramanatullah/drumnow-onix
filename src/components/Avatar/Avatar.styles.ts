import styled from 'styled-components/macro';
import { ITheme } from '../Theme';

import {AvatarSize} from './Avatar.types';

const getAvatarSize = (size: AvatarSize): string => {
  switch (size) {
    case 'small':
      return '24px';
    case 'medium':
      return '4rem';
    case 'large':
      return '6rem';
    default:
      return '4rem';
  }
};

export const Avatar = styled.div<{size?: AvatarSize, theme: ITheme}>`
  width: ${({size}) => {
    return getAvatarSize(size || 'small');
  }};

  height: ${({size}) => {
    return getAvatarSize(size || 'small');
  }};

  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  overflow: hidden;
`;

export const AvatarImage = styled.img<{theme: ITheme, loaded?: boolean }>`
  width: 100%;
  opacity: ${({loaded}) => (loaded ? 1 : 0)};
  transition: opacity 0.3s ${theme.utility.curves['sine']};
  pointer-events: none;
`;
