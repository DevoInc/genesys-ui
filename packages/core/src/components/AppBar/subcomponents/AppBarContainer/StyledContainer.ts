import styled, { css } from 'styled-components';

import { StyledBox } from '../../../Box/StyledBox';
import { getSpacingPropCss } from '../../../../utils/spacing';

export const StyledAppBarContainer = styled(StyledBox)`
  ${({ theme }) => {
    return css`
      position: relative;
      padding-left: ${getSpacingPropCss('cmp-md', theme)};
      padding-right: ${getSpacingPropCss('cmp-md', theme)};
      background-color: ${theme.cmp.appBar.color.background};
    `;
  }}
`;
