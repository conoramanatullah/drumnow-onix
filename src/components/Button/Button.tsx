import {IButtonProps} from './Button.types';

import * as S from './Button.styles';
import { Typography } from '../Typography';

export const Button = (props: IButtonProps): JSX.Element => {
  return (
    <S.Button>
      <Typography type="body" size="small">
        Dropdown
      </Typography>
    </S.Button>
  );
};
