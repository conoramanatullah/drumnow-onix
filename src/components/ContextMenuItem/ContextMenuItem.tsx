import { IContextMenuItemProps } from './ContextMenuItem.types';

import * as S from './ContextMenuItem.styles';
import { Typography } from '../Typography';

export const ContextMenuItem = (props: IContextMenuItemProps): JSX.Element => {
  return (
    <S.ContextMenuItem onClick={props.onClick}>
      <Typography type="caption" size='default'>{props.children}</Typography>
    </S.ContextMenuItem>
  );
};