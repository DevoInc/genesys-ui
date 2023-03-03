import styled, { css } from 'styled-components';

import { Panel } from '../..';
import { StyledPanelHeader } from '../../Panel/StyledPanel';
import { ToastStatus } from '../declarations';

export interface StyledContentProps {
  expanded?: boolean;
  showProgressBar?: boolean;
  status?: ToastStatus;
}

export const StyledContent = styled(Panel)<StyledContentProps>`
  ${({ expanded, showProgressBar, status, theme }) => {
    const tokensPanel = theme.tokens.cmp.panel;
    const tokensPanelHeader = theme.tokens.cmp.panel.header;
    const tokensToast = theme.tokens.cmp.toast;

    const getHeaderShadowCss = `
      ${StyledPanelHeader} {
          box-shadow: ${tokensPanelHeader.elevation.boxShadow};
      }`;

    const getProgressBarCss = `
      padding-bottom: ${tokensToast.progressBar.size.height};

      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: ${tokensToast.progressBar.size.height};
        background-color: ${tokensToast.progressBar.color.background[status]};
        border-radius: 0 0 ${tokensPanel.shape.borderRadius} ${tokensPanel.shape.borderRadius};
      }`;

    return css`
      ${expanded && getHeaderShadowCss}
      ${showProgressBar && getProgressBarCss}
    `;
  }};
`;
