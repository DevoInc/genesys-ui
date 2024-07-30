import { css, DefaultTheme } from 'styled-components';

import type { IModal } from '../../declarations';

export interface IModalFooterMixin extends Pick<IModal, 'status'> {
  theme: DefaultTheme;
}

/**
 * Get the specific styles for Panel.Footer component when it's used as a Modal.Footer component
 *
 * @return styles for Panel.Footer component
 */
export const modalFooterMixin = ({ status, theme }: IModalFooterMixin) => {
  const footerTokens = theme.cmp.modal.footer;
  return css`
    padding: ${footerTokens.space.padding.ver} ${footerTokens.space.padding.hor};
    background-color: ${status == 'base' && footerTokens.color.background};
  `;
};
