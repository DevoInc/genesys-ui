import { css, DefaultTheme } from 'styled-components';

import type { ILayoutBoxCss } from '../../../../declarations';
import type { PanelContextProps } from '../../../Panel/context';

export interface IModalBodyMixin
  extends Pick<PanelContextProps, 'scrolledBodyContent'>,
    Pick<ILayoutBoxCss, 'padding'> {
  theme: DefaultTheme;
}

/**
 * Get the specific styles for Panel.Body component when it's used as a Modal.Body component
 *
 * @return styles for Panel.Body component
 */

export const modalBodyMixin = ({
  theme,
  padding,
  scrolledBodyContent,
}: IModalBodyMixin) => {
  const tokens = theme.cmp.modal.content;
  return css`
    margin: ${scrolledBodyContent && tokens.space.margin};
    padding: ${padding
      ? padding
      : `${tokens.space.padding.ver}
          ${tokens.space.padding.hor}`};
  `;
};
