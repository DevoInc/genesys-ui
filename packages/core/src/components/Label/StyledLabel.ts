import styled, { css } from 'styled-components';

import type { ILabel } from './declarations';
import {
  truncateTypoMixin,
  typoColorMixin,
  typoMixin,
  srOnlyMixin,
} from '../../styled/mixins';

export interface StyledLabelProps {
  $htmlFor?: ILabel['htmlFor'];
  /** This property defines the color scheme for the Label.
   * There are predefined types: base, error... etc.
   * It's possible to use a custom color too.*/
  $colorScheme?: ILabel['colorScheme'];
  $cursor?: ILabel['cursor'];
  /** Size of the Label.*/
  $size?: ILabel['size'];
  /** The label is hidden but accessible for screen-readers.*/
  $srOnly?: boolean;
  $textAlign?: ILabel['textAlign'];
  /** If the text of the label doesn't fit then there is a text ellipsis.*/
  $truncated?: boolean;
}

export const StyledLabel = styled.span<StyledLabelProps>`
  position: relative;
  display: block;
  word-break: break-word;
  ${({
    $colorScheme,
    $cursor,
    $htmlFor,
    $size,
    $srOnly,
    $textAlign,
    theme,
    $truncated,
  }) => css`
    cursor: ${$cursor || ($htmlFor ? 'pointer' : 'default')};

    // to get text ellipsis
    ${$truncated && truncateTypoMixin()};

    // typo styles
    ${typoMixin({
      $variant: 'body',
      $textAlign,
      theme,
      $size,
    })};

    // text color
    ${typoColorMixin({
      $variant: 'body',
      $colorScheme,
      theme,
    })};

    // hidden but being accessible
    ${$srOnly && srOnlyMixin}
  `};
`;
