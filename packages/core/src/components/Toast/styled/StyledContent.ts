import styled, { css } from 'styled-components';

import { Panel } from '../..';
import { StyledPanelHeaderContainer } from '../../Panel/components/PanelHeader/PanelHeaderContainer/StyledPanelHeaderContainer';
import { ToastStatus } from '../declarations';

export interface StyledContentProps {
  /** Accent color schema */
  accent?: boolean;
  expanded?: boolean;
  showProgressBar?: boolean;
  status?: ToastStatus;
}

export const StyledContent = styled(Panel)<StyledContentProps>`
  ${({ accent, expanded, showProgressBar, status, theme }) => {
    const tokensPanel = theme.cmp.panel;
    const tokensPanelHeader = theme.cmp.panel.header;
    const tokensToast = theme.cmp.toast;

    const getHeaderShadowCss = css`
      ${StyledPanelHeaderContainer} {
        box-shadow: ${tokensPanelHeader.elevation.boxShadow};
      }
    `;

    const getProgressBarCss = css`
      padding-bottom: ${tokensToast.progressBar.size.height};

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: ${tokensToast.progressBar.size.height};
        background-color: ${tokensToast.progressBar.color.background[status]};
        border-radius: 0 0 ${tokensPanel.shape.borderRadius}
          ${tokensPanel.shape.borderRadius};
      }
    `;

    return css`
      border: ${`solid 1px ${
        tokensToast.color.border[accent ? status : 'default']
      }`};
      ${expanded && getHeaderShadowCss}
      ${showProgressBar && getProgressBarCss}
    `;
  }};
`;
