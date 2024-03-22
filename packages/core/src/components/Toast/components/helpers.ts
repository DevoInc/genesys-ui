import { css, DefaultTheme } from 'styled-components';
import type { IToast } from '../declarations';

export interface IToastPanelMixin
  extends Pick<IToast, 'accent' | 'showProgressBar' | 'status'> {
  theme: DefaultTheme;
}

/**
 * Get the ToastPanel custom styles applied to a Panel component.
 *
 * @return object with the css.
 */
export const toastPanelMixin = ({
  accent,
  showProgressBar,
  status,
  theme,
}: IToastPanelMixin) => {
  const tokensPanel = theme.cmp.panel;
  const tokensToast = theme.cmp.toast;

  return css`
    ${accent &&
    css`
      border: solid 0.1rem
        ${tokensToast.color.border[accent ? status : 'default']};
    `}
    ${showProgressBar &&
    css`
      padding-bottom: ${tokensToast.progressBar.size.height};
      border-bottom: none;

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
    `}
  `;
};
