import { css, DefaultTheme } from 'styled-components';

import { TModalStatus } from '../../declarations';

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
  const aliasTokens = theme.alias;

  return css`
    padding: ${removeSpace
      ? '0'
      : `${modalHeaderTokens.space.padding.ver}
      ${modalHeaderTokens.space.padding.right}
      ${modalHeaderTokens.space.padding.ver}
      ${modalHeaderTokens.space.padding.left}`};
    padding-right: ${aliasTokens.space.cmp.sm};
    background-color: ${status && status !== 'base'
      ? theme.cmp.dialog.header.color.background[status]
      : 'inherit'};
  `;
};
