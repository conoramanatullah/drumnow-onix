import {useEffect, useState} from 'react';
import {useLogger} from '../../lib/hooks/useLogger';

import * as S from './Avatar.styles';
import {IAvatarProps} from './Avatar.types';

/**
 * Avatar component
 */
export const Avatar = ({alt, size, src}: IAvatarProps): JSX.Element => {
  const [loaded, setLoaded] = useState(false);
  const logger = useLogger({context: 'Avatar', debug: true});

  useEffect(() => {
    if (!src) {
      setLoaded(false);
      logger.log('No src provided');
      return;
    }

    const img = new Image();
    img.src = src;

    img.onload = () => {
      logger.log('Image loaded');
      setLoaded(true);
    };
  }, [src, setLoaded, logger]);

  return (
    <S.Avatar size={size}>
      <S.AvatarImage
        alt={alt}
        loaded={loaded}
        src={src}
      />
    </S.Avatar>
  );
};
