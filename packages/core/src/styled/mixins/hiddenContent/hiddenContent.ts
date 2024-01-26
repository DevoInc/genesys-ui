import { css, DefaultTheme } from 'styled-components';
import React from 'react';

export interface HiddenContentMixinProps {
  showOnHover?: boolean;
  showOnFocus?: boolean;
  transition?: React.CSSProperties['transition'];
  theme: DefaultTheme;
}

/**
 * Get the specific styles for Box component when it's used as a HiddenContent component
 *
 * @return styles for Box as HiddenContent
 */

export const hiddenContentMixin = ({
  showOnHover = true,
  showOnFocus = true,
  transition,
  theme,
}: HiddenContentMixinProps) => css`
  opacity: 0;
  transition: ${transition ||
  `ease-in-out ${theme.alias.mutation.transitionDuration.opacity.md} opacity,
  ease-in-out ${theme.alias.mutation.transitionDuration.action} box-shadow`};

  ${showOnHover &&
  css`
    :hover {
      opacity: 1;
    }
  `}

  ${showOnFocus &&
  css`
    :focus,
    :focus-visible {
      opacity: 1;
      outline: none;
      box-shadow: ${theme.alias.elevation.boxShadow.base.focused};
    }
  `}
`;
