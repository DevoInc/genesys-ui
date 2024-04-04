import * as React from 'react';
import styled, { css } from 'styled-components';

import type {
  TBodyColorScheme,
  TUIColorScheme,
  ILabelAttrs,
} from '../../declarations';
import type { TLabelSize } from './declarations';
import {
  truncateTypoMixin,
  typoColorMixin,
  typoMixin,
  srOnlyMixin,
} from '../../styled/mixins';

export interface StyledLabelProps extends Pick<ILabelAttrs, 'htmlFor'> {
  /** This property defines the color scheme for the Label.
   * There are predefined types: base, error... etc.
   * It's possible to use a custom color too.*/
  colorScheme?: TBodyColorScheme | TUIColorScheme;
  cursor?: React.CSSProperties['cursor'];
  /** Size of the Label.*/
  size?: TLabelSize;
  /** The label is hidden but accessible for screen-readers.*/
  srOnly?: boolean;
  textAlign?: React.CSSProperties['textAlign'];
  /** If the text of the label doesn't fit then there is a text ellipsis.*/
  truncated?: boolean;
}

export const StyledLabel = styled.span<StyledLabelProps>`
  ${({
    colorScheme,
    cursor,
    htmlFor,
    size,
    srOnly,
    textAlign,
    theme,
    truncated,
  }) => {
    return css`
      position: relative;
      display: block;
      word-break: break-word;
      cursor: ${cursor || (htmlFor ? 'pointer' : 'default')};

      // to get text ellipsis
      ${truncated && truncateTypoMixin()};

      // typo styles
      ${typoMixin({
        variant: 'body',
        textAlign,
        theme,
        size,
      })};

      // text color
      ${typoColorMixin({
        variant: 'body',
        colorScheme: colorScheme,
        theme,
      })};

      // hidden but being accessible
      ${srOnly && srOnlyMixin}
    `;
  }};
`;
