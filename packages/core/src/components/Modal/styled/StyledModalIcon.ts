import styled, { css } from 'styled-components';

import { StyledModalWithStatusProps } from '../declarations';

export const StyledModalIcon = styled.i<StyledModalWithStatusProps>`
  ${({ theme, status }) => {
    const modalHeaderIconTokens = theme.cmp.modal.headerIcon;
    const dialogHeaderIconTokens = theme.cmp.dialog.headerIcon;

    return css`
      margin-right: ${modalHeaderIconTokens.space.marginRight};
      font-size: ${dialogHeaderIconTokens.typo.fontSize};
      color: ${dialogHeaderIconTokens.color.background[status]};
    `;
  }};
`;
