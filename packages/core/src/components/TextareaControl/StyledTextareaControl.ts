import styled, { css } from 'styled-components';

import { TTextareaResize } from './declarations';

import {
  commonInputControlMixin,
  getLineHeight,
  type ICommonInputControlMixin,
  scrollbars,
} from '../../styled/mixins';

export interface StyledTextareaControlProps extends ICommonInputControlMixin {
  /** The number of visible text lines for the control. If it is specified, it must be a positive integer. If it is not specified, the default value is 2. */
  rows?: HTMLTextAreaElement['rows'];
  /** The resize CSS property sets whether an element is resizable, and if so, in which directions.*/
  resize?: TTextareaResize;
}

export const StyledTextareaControl = styled.textarea<StyledTextareaControlProps>`
  ${({ disabled, readOnly, resize = 'both', $size, status, theme }) => {
    const fieldTokens = theme.alias.fields;
    const fieldLineHeight = getLineHeight({ tokens: theme, size: $size });

    const fieldHeight = fieldTokens.size.height[$size];
    const verPadding = css`calc((${fieldHeight} - ${fieldLineHeight}) / 2)`;

    return css`
      ${commonInputControlMixin({ disabled, readOnly, $size, status, theme })};
      ${scrollbars({ theme })};
      resize: ${!(disabled || readOnly) ? resize : 'none'};
      height: auto;
      padding-top: ${verPadding};
      padding-bottom: ${verPadding};
    `;
  }}
`;
