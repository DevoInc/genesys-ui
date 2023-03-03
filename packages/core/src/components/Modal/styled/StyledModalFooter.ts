import styled, { css } from 'styled-components';

import { StyledModalProps } from '../declarations';

export const StyledModalFooter = styled.footer<StyledModalProps>`
  ${({ theme, hasScroll, headerStyle }) => {
    const modalTokens = theme.tokens.cmp.modal;
    const footerTokens = modalTokens.footer;
    const footerButtonTokens = modalTokens.footerButtons;

    return css`
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      flex-shrink: 0;
      gap: ${footerButtonTokens.space.gap};
      box-shadow: ${hasScroll && footerTokens.elevation.boxShadow};
      padding: ${footerTokens.space.padding.ver}
        ${footerTokens.space.padding.hor};
      background-color: ${headerStyle !== 'dialog' &&
      footerTokens.color.background};
    `;
  }};
`;
