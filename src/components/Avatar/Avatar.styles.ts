import styled from 'styled-components/macro';

import {AvatarSize} from './Avatar.types';

const getAvatarSize = (size: AvatarSize): string => {
  switch (size) {
    case 'small':
      return '24px';
    case 'medium':
      return '48px';
    case 'large':
      return '96px';
    default:
      return '48px';
  }
};

export const Avatar = styled.div<{size?: AvatarSize}>`
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
  background-color: black;
  overflow: hidden;
`;

export const AvatarImage = styled.img<{loaded?: boolean}>`
  width: 100%;
  opacity: ${({loaded}) => (loaded ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;
`;
