import styled from 'styled-components';

import { DESIGN_TOKEN_LIST_COLORS } from '../constants';

export const StyledDesignTokensRow = styled.tr`
  border-top: 1px solid ${DESIGN_TOKEN_LIST_COLORS.BORDER_WEAK};
  background-color: ${DESIGN_TOKEN_LIST_COLORS.BG_SURFACE};
  margin: 0;
  padding: 0;
`;
