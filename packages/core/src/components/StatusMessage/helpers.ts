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
  const aliasTokens = theme.alias;
  const borderColor = aliasTokens.color.border.feedback.base.base;
  const borderSize = aliasTokens.shape.borderSize.separator.md;
  const borderRadius = aliasTokens.shape.borderRadius.elevated;
  return css`
    border: ${bordered && `solid ${borderSize} ${borderColor}`};
    border-radius: ${bordered && borderRadius};
  `;
};
