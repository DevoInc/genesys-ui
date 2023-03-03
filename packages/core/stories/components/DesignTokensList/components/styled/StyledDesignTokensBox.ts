import styled from 'styled-components';

import {
  DESIGN_TOKEN_LIST_COLORS,
  DESIGN_TOKEN_LIST_SIZES,
} from '../../constants';

export const StyledDesignTokensBox = styled.div`
  position: relative;
  margin: 0 auto;
  border-radius: ${DESIGN_TOKEN_LIST_SIZES.BORDER_RADIUS};
  width: ${DESIGN_TOKEN_LIST_SIZES.WIDTH};
  height: ${DESIGN_TOKEN_LIST_SIZES.HEIGHT};
  background-color: ${DESIGN_TOKEN_LIST_COLORS.BG_SURFACE};
`;
