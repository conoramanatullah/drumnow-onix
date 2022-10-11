import {IButtonProps} from './Button.types';

import * as S from './Button.styles';

export const Button = (props: IButtonProps): JSX.Element => {
  return (
    <S.Button>
      <p>Button</p>
    </S.Button>
  );
};
