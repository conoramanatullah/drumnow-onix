import {IProfileButtonProps} from './ProfileButton.types';

import * as S from './ProfileButton.styles';
import {Avatar} from '../Avatar';
import { useLogger } from '../../lib/hooks/useLogger';

export const ProfileButton = ({
  name,
  credits,
  avatarSrc,
}: IProfileButtonProps): JSX.Element => {
  const logger = useLogger({context: 'ProfileButton', debug: true});

  const handleClick = () => {
    logger.log('Button clicked'); 
  };

  return (
    <S.ProfileButton onClick={handleClick}>
      <Avatar src={avatarSrc} alt={`${name}'s avatar`} size="medium" />
      <S.Content>
        <S.Name>{name}</S.Name>
        <S.Credits>{credits} credits</S.Credits>
      </S.Content>
    </S.ProfileButton>
  );
};
