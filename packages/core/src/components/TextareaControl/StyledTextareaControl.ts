import styled, { css } from 'styled-components';

import { Resize } from './declarations';

import { getLineHeight, scrollbars } from '../../';

import {
  StyledInputControl,
  StyledInputControlProps,
} from '../InputControl/styled';

export interface StyledTextareaControlProps
  extends Omit<
    StyledInputControlProps,
    'addonToLeft' | 'addonToRight' | 'hasIcon' | 'hasTypeIcon'
  > {
  /** The number of visible text lines for the control. If it is specified, it must be a positive integer. If it is not specified, the default value is 2. */
  rows?: HTMLTextAreaElement['rows'];
  /** The resize CSS property sets whether an element is resizable, and if so, in which directions.*/
  resize?: Resize;
}

export const StyledTextareaControl = styled.textarea.attrs({
  as: StyledInputControl,
  forwardedAs: 'textarea',
})<StyledTextareaControlProps>`
  ${({ disabled, readOnly, resize = 'both', $size, theme }) => {
    const fieldTokens = theme.alias.fields;
    const fieldLineHeight = getLineHeight({ tokens: theme, size: $size });

    const fieldHeight = fieldTokens.size.height[$size];
    const verPadding = css`calc((${fieldHeight} - ${fieldLineHeight}) / 2)`;

    return css`
      ${scrollbars({ theme })};
      resize: ${!(disabled || readOnly) ? resize : 'none'};
      height: auto;
      padding-top: ${verPadding};
      padding-bottom: ${verPadding};
    `;
  }}
`;
