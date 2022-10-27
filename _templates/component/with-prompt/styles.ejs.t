---
to: src/components/<%= name %>/<%= name %>.styles.ts
---

import styled from 'styled-components';
import {theme} from '../../styles/theme';

export const <%= name %> = styled.div``;

<%= name %>.defaultProps = {
  theme,
};
