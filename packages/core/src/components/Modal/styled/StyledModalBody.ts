import styled, { css } from 'styled-components';

import { scrollbars } from '../../../styled/mixins/scrollbars';

export interface StyledModalBodyProps {
  /** Whether the body has a box shadow */
  hasBoxShadow?: boolean;
  /** The padding of the body */
  contentPadding?: string;
}

export const StyledModalBody = styled.div<StyledModalBodyProps>`
  ${({ theme, hasBoxShadow, contentPadding }) => {
  const tokens = theme.cmp.modal.content;

  return css`
      ${scrollbars({ theme })};
      overflow-y: auto;
      flex: 1 1 auto;
      margin: ${hasBoxShadow ? tokens.space.margin : ''}; // Scroll margin
      padding: ${
        contentPadding
          ? contentPadding
          : `${tokens.space.padding.ver}
          ${tokens.space.padding.hor}`
      }};
    `;
}}
`;
