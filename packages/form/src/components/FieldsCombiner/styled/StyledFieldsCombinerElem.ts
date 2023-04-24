import * as React from 'react';
import styled, { css } from 'styled-components';

import {
  FieldSize,
  FieldStatus,
  StyledSelectControl,
  //StyledInputControl,
  StyledButton,
} from '@devoinc/genesys-ui';
import { StyledFieldsCombinerWrapper } from './';

import { FieldsCombinerType } from '../declarations';
export interface StyledFieldsCombinerElemProps {
  elemWidth?: React.CSSProperties['width'];
  first?: boolean;
  typeProp?: FieldsCombinerType;
  size: FieldSize;
  status: FieldStatus;
}

export const StyledFieldsCombinerElem = styled.div<StyledFieldsCombinerElemProps>`
  ${({ size, elemWidth, first, theme, typeProp, status }) => {
    const isCheckOrButtonType = typeProp === 'button' || typeProp === 'check';
    const aliasTokens = theme.alias;
    const fieldTokens = aliasTokens.fields;
    const btnTokens = theme.cmp.button;
    const height = btnTokens.size.height[size];
    const width = btnTokens.size.square[size];
    const borderRadius = fieldTokens.shape.borderRadius;

    return css`
      position: relative;
      height: ${height};
      width: ${elemWidth};

      // Input, Select, Button and IconButton
      ${StyledSelectControl} .react-select__control,
      ${StyledButton} {
        min-height: ${height};
        height: 100%;
        transition: all ease ${btnTokens.mutation.transitionDuration};
      }

      // IconButton
      ${StyledButton}${'[data-squared]'} {
        width: ${height};
      }

      // Input, Select and Checkbox
      *:enabled:focus,
      ${StyledSelectControl} [class*='--is-focused'],
      ${StyledSelectControl} *:enabled:focus {
        box-shadow: none;
        z-index: 3;
      }

      // Input, Select, Button and IconButton
      ${StyledSelectControl},
      ${StyledSelectControl} .react-select__control,
      ${StyledButton},
      ${StyledButton}::before {
        ${first
          ? css`
              border-top-right-radius: 0;
              border-bottom-right-radius: 0;
            `
          : css`
              border-top-left-radius: 0;
              border-bottom-left-radius: 0;
            `}
      }

      // type button and check
      ${isCheckOrButtonType
        ? css`
            z-index: 1;
            flex: 0 auto;

            ${StyledSelectControl},
            ${StyledButton} {
              position: relative;
              z-index: 1;
              border-style: solid;
              border-color: ${fieldTokens.color.border[status]?.enabled};
              border-width: ${fieldTokens.shape.borderSize.base};
              ${first
                ? css`
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                    border-right-width: 0;
                  `
                : css`
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                    border-left-width: 0;
                  `}

              &:focus {
                box-shadow: none;
              }
            }
          `
        : css`
            flex: ${!elemWidth && '1 1 auto'};
          `}

      ${typeProp === 'check' &&
      css`
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 1;
        border-style: solid;
        border-color: ${fieldTokens.color.border[status]?.enabled};
        border-width: ${fieldTokens.shape.borderSize.base};
        border-radius: ${borderRadius};
        width: ${width};
        padding: 0;
        background-color: ${aliasTokens.color.background.surface.base.raised};

        ${first
          ? css`
              border-top-right-radius: 0;
              border-bottom-right-radius: 0;
              border-right-width: 0;
            `
          : css`
              border-top-left-radius: 0;
              border-bottom-left-radius: 0;
              border-left-width: 0;
            `}

        &:focus {
          box-shadow: none;
        }
      `}

      // Right elem
        ${!first &&
      css`
        margin-left: -1px;
      `}

      // states
      &:hover {
        z-index: 2;
      }

      // parent hover state
      ${StyledFieldsCombinerWrapper}:hover > & {
        ${isCheckOrButtonType &&
        css`
          ${StyledSelectControl},
          ${StyledButton} {
            border-color: ${fieldTokens.color.border.base.hovered};
          }
        `}

        ${typeProp === 'check' &&
        css`
          border-color: ${fieldTokens.color.border.base.hovered};
        `}

        ${typeProp !== 'check' &&
        css`
          .react-select__control,
          *:enabled {
            border-color: ${fieldTokens.color.border.base.hovered};
          }
        `}
      }
    `;
  }};
`;
