import styled from 'styled-components';

import { truncateTypoMixin } from '../../../../styled/mixins';

export const StyledTabsItemLabel = styled.span`
  ${() => truncateTypoMixin()};
  position: relative;
`;
