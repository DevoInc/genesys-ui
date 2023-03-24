import styled, { css } from 'styled-components';

import { ToastStatus } from '../declarations';

interface StyledIconProps {
  status: ToastStatus;
}

export const StyledIcon = styled.i<StyledIconProps>`
  ${({ status, theme }) => {
    const tokensToast = theme.cmp.toast;
    return css`
      font-size: ${tokensToast.headerIcon.typo.fontSize.md};
      color: ${tokensToast.headerIcon.color.text[status]};
    `;
  }}
`;
