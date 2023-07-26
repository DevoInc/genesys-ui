import styled, { css } from 'styled-components';
import { GlobalStatus } from '../../../declarations';

export interface StyledModalFooterProps {
  /** Whether the footer has a box shadow */
  hasBoxShadow?: boolean;
  /** The status of the modal */
  status?: GlobalStatus;
}

export const StyledModalFooter = styled.footer<StyledModalFooterProps>`
  ${({ theme, hasBoxShadow, status }) => {
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
      background-color: ${status == 'base' && footerTokens.color.background};
    `;
  }};
`;
