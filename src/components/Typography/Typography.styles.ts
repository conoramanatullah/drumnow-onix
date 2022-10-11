import styled from 'styled-components';
import {theme} from '../../styles';
import {ITheme} from '../Theme';
import {
  TypographySize,
  TypographyTag,
  TypographyType,
  TypographyWeight,
} from './Typography.types';

export const Typography = styled.div<{
  theme: ITheme;
  size: TypographySize;
  displayType: TypographyType;
  weight: TypographyWeight;
  tag: TypographyTag;
}>`
  color: white;
  font-family: ${theme.typography.family.default};

  margin: 0;
  padding: 0;

  font-size: ${(props) =>
    props.theme.typography.sizes[props.displayType][props.size]};
  font-weight: ${(props) => props.theme.typography.weights[props.weight]};
  line-height: ${(props) => props.theme.typography.lineHeight[props.displayType][props.size]};
  letter-spacing: ${(props) => props.theme.typography.letterSpacing[props.displayType][props.size]};
`;

Typography.defaultProps = {
  theme,
  size: 'large',
  displayType: 'display',
  weight: 'default',
  tag: 'p',
};
