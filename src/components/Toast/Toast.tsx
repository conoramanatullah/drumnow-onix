import { IToastProps } from './Toast.types';

import * as S from './Toast.styles';

export const Toast = (props: IToastProps): JSX.Element => {
  return (
    <S.Toast>
      <p>Toast</p>
    </S.Toast>
  );
};