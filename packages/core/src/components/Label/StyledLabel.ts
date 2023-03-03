import styled, { css } from 'styled-components';

import {
  BodyColorScheme,
  UIColorScheme,
  LabelAttrProps,
} from '../../declarations';
import { LabelSize } from './declarations';
import {
  truncateTypoMixin,
  typoColorMixin,
  typoMixin,
} from '../../styled/mixins/baseMixins';
import { srOnlyMixin } from '../../styled/mixins/utilsMixins';
import * as React from 'react';

export interface StyledLabelProps extends Pick<LabelAttrProps, 'htmlFor'> {
  /** This property defines the color scheme for the Label.
   * There are predefined types: base, error... etc.
   * It's possible to use a custom color too.*/
  colorScheme?: BodyColorScheme | UIColorScheme;
  cursor?: React.CSSProperties['cursor'];
  /** Size of the Label.*/
  size?: LabelSize;
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
