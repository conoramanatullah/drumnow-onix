---
to: src/components/<%= name %>/<%= name %>.tsx
---
import { I<%= name %>Props } from './<%= name %>.types';

import * as S from './<%= name %>.styles';

export const <%= name %> = (props: I<%= name %>Props): JSX.Element => {
  return (
    <S.<%= name %>>
      <p><%= name %></p>
    </S.<%= name %>>
  );
};