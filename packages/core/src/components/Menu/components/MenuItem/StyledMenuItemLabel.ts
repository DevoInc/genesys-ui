import styled from 'styled-components';

import { truncateTypoMixin } from '../../../../styled';

export const StyledMenuItemLabel = styled.div`
  ${truncateTypoMixin()};
  position: relative;
  flex: 1 1 auto;
  text-align: left;
`;
