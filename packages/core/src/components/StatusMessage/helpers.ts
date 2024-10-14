import { css, DefaultTheme } from 'styled-components';

import type { TStatusMessageBordered } from './declarations';

export interface StatusMessageMixinProps {
  bordered?: TStatusMessageBordered;
  theme: DefaultTheme;
}

/**
 * Get the StatusMessage custom styles applied to a Flex component.
 *
 * @return object with the css.
 */
export const statusMessageMixin = ({
  bordered,
  theme,
}: StatusMessageMixinProps) => {
  const borderColor = theme.cmp.statusMessage.color.border;
  const borderSize = theme.cmp.statusMessage.shape.borderSize;
  const borderRadius = theme.cmp.statusMessage.shape.borderRadius;
  return css`
    border: ${bordered && `solid ${borderSize} ${borderColor}`};
    border-radius: ${bordered && borderRadius};
  `;
};
