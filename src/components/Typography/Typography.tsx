import {ITypographyProps} from './Typography.types';

import * as S from './Typography.styles';

export const Typography = ({
  size = 'small',
  children,
  type = 'body',
  weight = 'default',
  tag = 'p',
}: ITypographyProps): JSX.Element => {
  return (
    <S.Typography
      size={size}
      displayType={type}
      weight={weight}
      as={tag}
      tag={tag}>
      {children}
    </S.Typography>
  );
};
