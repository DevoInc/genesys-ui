import styled, { css, CSSProp } from 'styled-components';

import type { TFieldSize } from '../../../../declarations/commonProps';
import type { IInputAttrs } from '../../../../declarations/htmlAttrs';

export interface StyledInputControlIconProps {
  /** Size of the input: height, padding, font-size... etc. */
  $size?: TFieldSize;
  /** If the icon is related with the input type */
  $isTypeIcon?: boolean;
  /** The type of the parent Input */
  $type?: IInputAttrs['type'];
  // TODO: interface only for satisfy the type error with TS and inherit CSSProp
  css?: CSSProp;
}

export const StyledInputControlIcon = styled.span<StyledInputControlIconProps>`
  ${({ $isTypeIcon, $size = 'md', theme, $type }) => {
    const cmpTokens = theme.cmp.inputControl.icon;

    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: 0;
      z-index: 2;
      transition: all ease 0.3s;
      height: 100%;
      pointer-events: none;

      ${$isTypeIcon
        ? css`
            left: ${cmpTokens.space.offset.base[$size]};
          `
        : css`
            right: ${cmpTokens.space.offset[
              $type === 'password' ? 'password' : 'base'
            ][$size]};
          `};
    `;
  }};
`;
