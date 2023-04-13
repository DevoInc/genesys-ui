import styled, { css } from 'styled-components';
import { StyledModalProps } from './StyledModal';

export const StyledModalFooter = styled.footer<StyledModalProps>`
  ${({ theme, hasBoxShadow, headerStyle }) => {
    const modalTokens = theme.cmp.modal;
    const footerTokens = modalTokens.footer;
    const footerButtonTokens = modalTokens.footerButtons;

    return css`
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      flex-shrink: 0;
      gap: ${footerButtonTokens.space.gap};
      box-shadow: ${hasBoxShadow && footerTokens.elevation.boxShadow};
      padding: ${footerTokens.space.padding.ver}
        ${footerTokens.space.padding.hor};
      background-color: ${headerStyle !== 'dialog' &&
      footerTokens.color.background};
    `;
  }};
`;
