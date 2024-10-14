import { css, DefaultTheme } from 'styled-components';

import type { TFieldSize, TFieldStatus } from '../../declarations';
import type {
  TFieldsCombinerCombinedButtons,
  TFieldsCombinerOrder,
} from './declarations';

export interface FieldsCombinerMixinsProps {
  combinedButtons?: TFieldsCombinerCombinedButtons;
  order: TFieldsCombinerOrder;
  size: TFieldSize;
  status?: TFieldStatus;
  theme: DefaultTheme;
}

export const fieldsCombinerInputAndSelectMixin = ({
  order,
  size,
  theme,
}: FieldsCombinerMixinsProps) => {
  const fieldTokens = theme.alias.fields;
  return css`
    // Input, Select, Button and IconButton
    .react-select__control {
      min-height: ${theme.cmp.button.size.height[size]};
      height: 100%;
      transition: all ease ${theme.cmp.button.mutation.transitionDuration};
    }

    &:focus,
    .react-select__control--is-focused {
      z-index: 3;
    }

    &,
    .react-select__control {
      ${order === 'first'
        ? css`
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          `
        : css`
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          `}
    }

    *:hover > * > &,
    *:hover > * > & .react-select__control {
      border-color: ${fieldTokens.color.border.base.hovered};
    }
  `;
};

export const fieldsCombinerButtonMixin = ({
  combinedButtons,
  order,
  size,
  status,
  theme,
}: FieldsCombinerMixinsProps) => {
  const cmpTokens = theme.cmp.fieldsCombiner.button;
  const btnHeight = theme.cmp.button.size.height[size];

  return css`
    min-height: ${btnHeight};
    height: 100%;
    transition: all ease ${cmpTokens.mutation.transitionDuration};
    position: relative;
    z-index: 1;

    ${combinedButtons
      ? css`
          border-left: ${order === 'first'
            ? null
            : `solid ${cmpTokens.shape.borderSize.combinedButtons} ${
                cmpTokens.color.border.combinedButtons[theme?.meta?.scheme]
              }`};
        `
      : css`
          border-style: solid;
          border-color: ${cmpTokens.color.border[status]};
          border-width: ${cmpTokens.shape.borderSize.base};

          &,
          &::before {
            ${order === 'first'
              ? css`
                  border-right-width: 0;
                `
              : css`
                  border-left-width: 0;
                `}
          }

          *:hover > * > & {
            border-color: ${cmpTokens.color.border.hovered};
          }
        `}

    &,
    &::before {
      ${order === 'first'
        ? css`
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          `
        : css`
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          `}
    }

    // icon button
    &${'[data-squared]'} {
      width: ${btnHeight};
    }
  `;
};
