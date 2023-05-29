import { css, DefaultTheme } from 'styled-components';
import { ToastStatus } from '../declarations';
import { StyledPanelHeaderContainer } from '../../Panel/components/PanelHeader/components/StyledPanelHeaderContainer';

export interface ToastPanelMixinProps {
  /** Accent color schema */
  accent?: boolean;
  expanded?: boolean;
  showProgressBar?: boolean;
  status?: ToastStatus;
  theme: DefaultTheme;
}

/**
 * Get the ToastPanel custom styles applied to a Panel component.
 *
 * @return object with the css.
 */
export const toastPanelMixinProps = ({
  accent,
  expanded,
  showProgressBar,
  status,
  theme,
}: ToastPanelMixinProps) => {
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
};
