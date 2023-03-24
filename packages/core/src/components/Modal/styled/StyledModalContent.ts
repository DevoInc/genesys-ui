import styled, { css } from 'styled-components';

import { scrollbars } from '../../../styled/mixins/scrollbars';
import { StyledModalProps } from '../declarations';

export const StyledModalContent = styled.div<StyledModalProps>`
  ${({ theme, hasScroll, contentPadding }) => {
    const tokens = theme.cmp.modal.content;

    return css`
      ${scrollbars({ theme })};
      overflow-y: auto;
      flex: 1 1 auto;
      margin: ${hasScroll ? tokens.space.margin : ''}; // Scroll margin
      padding: ${
        contentPadding
          ? contentPadding
          : `${tokens.space.padding.ver}
          ${tokens.space.padding.hor}`
      }};
    `;
  }}
`;
