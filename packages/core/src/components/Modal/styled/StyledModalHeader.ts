import styled, { css } from 'styled-components';

import { GlobalStatus } from '../../../declarations';

export interface StyledModalHeaderProps {
  /** Whether the header has a box shadow */
  hasBoxShadow?: boolean;
  /** The status of the modal */
  status?: GlobalStatus;
}

export const StyledModalHeader = styled.header<StyledModalHeaderProps>`
  ${({ theme, hasBoxShadow, status }) => {
    const modalHeaderTokens = theme.cmp.modal.header;
    const aliasTokens = theme.alias;

    return css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;
      box-shadow: ${hasBoxShadow && modalHeaderTokens.elevation.boxShadow};
      border-bottom: ${status == 'base'
        ? modalHeaderTokens.shape.border
        : 'unset'};
      padding: ${modalHeaderTokens.space.padding.ver}
        ${modalHeaderTokens.space.padding.right}
        ${modalHeaderTokens.space.padding.ver}
        ${modalHeaderTokens.space.padding.left};
      padding-right: ${aliasTokens.space.cmp.sm};
      background-color: ${status && status !== 'base'
        ? theme.cmp.dialog.header.color.background[status]
        : 'inherit'};
    `;
  }}
`;
