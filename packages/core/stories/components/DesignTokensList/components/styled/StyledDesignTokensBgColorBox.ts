import styled from 'styled-components';

import {
  DESIGN_TOKEN_LIST_COLORS,
  DESIGN_TOKEN_LIST_SIZES,
} from '../../constants';

import { StyledDesignTokensBox } from './StyledDesignTokensBox';

export const StyledDesignTokensBgColorBox = styled(StyledDesignTokensBox)`
  border: solid 0.1rem ${DESIGN_TOKEN_LIST_COLORS.BORDER_BASE};
  padding: 0.2rem;

  > div {
    position: relative;
    border-radius: ${DESIGN_TOKEN_LIST_SIZES.BORDER_RADIUS};
    width: 100%;
    height: 100%;
  }
`;
