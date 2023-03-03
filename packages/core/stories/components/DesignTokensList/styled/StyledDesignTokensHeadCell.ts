import styled from 'styled-components';

import { DESIGN_TOKEN_LIST_COLORS } from '../constants';

import { StyledDesignTokensCell } from '../styled';

export const StyledDesignTokensHeadCell = styled(StyledDesignTokensCell)`
  border-bottom: 1px solid ${DESIGN_TOKEN_LIST_COLORS.BORDER_WEAK};
  background-color: ${DESIGN_TOKEN_LIST_COLORS.BG_HEAD};
`;
