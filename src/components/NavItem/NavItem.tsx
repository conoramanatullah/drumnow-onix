import { INavItemProps } from './NavItem.types';

import * as S from './NavItem.styles';
import { Icon } from '../Icon';
import { Typography } from '../Typography';

export const NavItem = (props: INavItemProps): JSX.Element => {
  return (
    <S.NavItem onClick={props.onClick} icon={props.icon}>
      {props.icon && <Icon name={props.icon} />}
      <Typography type="body" size="small">
        {props.children}
      </Typography>
    </S.NavItem>
  );
};