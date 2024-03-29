import styled from 'styled-components';

import { truncateTypoMixin } from '../../../../styled/mixins';

export const StyledButtonLabel = styled.span`
  ${() => truncateTypoMixin()};
  position: relative;
  flex: initial;
  min-width: 0;
`;
