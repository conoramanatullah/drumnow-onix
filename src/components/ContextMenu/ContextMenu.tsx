import { IContextMenuProps } from './ContextMenu.types';

import * as S from './ContextMenu.styles';

export const ContextMenu = (props: IContextMenuProps): JSX.Element => {
  return (
    <S.ContextMenu>
      <p>ContextMenu</p>
    </S.ContextMenu>
  );
};