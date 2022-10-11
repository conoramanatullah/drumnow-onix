import {IUserPillProps} from './UserPill.types';

import * as S from './UserPill.styles';
import {Avatar} from '../Avatar';
import {Typography} from '../Typography';
import {Icon} from '../Icon';

export const UserPill = ({ name = 'Drumnow User', credits = 0 }: IUserPillProps): JSX.Element => {
  return (
    <S.UserPill>
      <S.AvatarContainer>
        <Avatar
          alt="avatar alt"
          size="medium"
          src="https://i.pravatar.cc/500"
        />
      </S.AvatarContainer>
      <S.Content>
        <Typography type="caption" weight="bold" size="default">
          {name}
        </Typography>
        <Typography type="caption" size="default">
          {credits} credits
        </Typography>
      </S.Content>
      <S.IconContainer>
        <Icon name="arrow" />
      </S.IconContainer>
    </S.UserPill>
  );
};
