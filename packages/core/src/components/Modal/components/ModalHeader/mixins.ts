import { css, DefaultTheme } from 'styled-components';

import type { TModalStatus } from '../../declarations';

export interface IModalHeaderMixin {
  removeSpace?: boolean;
  status?: TModalStatus;
  theme: DefaultTheme;
}

/**
 * Get the specific styles for Panel.Header component when it's used as a Modal.Header component
 *
 * @return styles for Panel.Header component
 */
export const modalHeaderMixin = ({
  theme,
  removeSpace,
  status,
}: IModalHeaderMixin) => {
  const modalHeaderTokens = theme.cmp.modal.header;

  return css`
    padding: ${removeSpace
      ? '0'
      : `${modalHeaderTokens.space.padding.ver}
      ${modalHeaderTokens.space.padding.right}
      ${modalHeaderTokens.space.padding.ver}
      ${modalHeaderTokens.space.padding.left}`};
    background-color: ${status && status !== 'base'
      ? theme.cmp.dialog.header.color.background[status]
      : 'inherit'};
  `;
};
