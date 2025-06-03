import * as React from 'react';
import styled, { css } from 'styled-components';

import {
  commonInputControlMixin,
  getLineHeight,
  scrollbars,
} from '../../styled/mixins';
import { TFieldSize, TFieldStatus } from '../../declarations';

export interface StyledTextareaControlProps {
  readOnly?: boolean;
  $size?: TFieldSize;
  $status?: TFieldStatus;
  /** The number of visible text lines for the control. If it is specified, it
   * must be a positive integer. If it is not specified, the default value is
   * 2. */
  $rows?: HTMLTextAreaElement['rows'];
  /** The resize CSS property sets whether an element is resizable, and if so,
   * in which directions.*/
  $resize?: React.CSSProperties['resize'];
}

export const StyledTextareaControl = styled.textarea<StyledTextareaControlProps>`
  ${({ disabled, readOnly, $resize = 'both', $size, $status, theme }) => {
    const cmpTokens = theme.cmp.textareaControl;
    const fieldLineHeight = getLineHeight({ tokens: theme, $size });

    const fieldHeight = theme.cmp.inputControl.size.height[$size];
    const verPadding = css`calc((${fieldHeight} - ${fieldLineHeight}) / 2)`;

    return css`
      ${commonInputControlMixin({
        disabled,
        $readOnly: readOnly,
        $size,
        $status,
        theme,
      })};
      ${scrollbars({ theme })};
      resize: ${!(disabled || readOnly) ? $resize : 'none'};
      height: ${cmpTokens.size.height.base};
      padding-top: ${verPadding};
      padding-bottom: ${verPadding};
    `;
  }}
`;
