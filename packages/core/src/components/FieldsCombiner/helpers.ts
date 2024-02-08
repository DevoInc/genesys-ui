import { css, DefaultTheme } from 'styled-components';

import type { FieldSize, FieldStatus } from '../../declarations';
import type {
  FieldsCombinerCombinedButtons,
  FieldsCombinerOrder,
} from './declarations';

export interface FieldsCombinerMixinsProps {
  combinedButtons?: FieldsCombinerCombinedButtons;
  order: FieldsCombinerOrder;
  size: FieldSize;
  status?: FieldStatus;
  theme: DefaultTheme;
}

export const fieldsCombinerInputAndSelectMixin = ({
  order,
  size,
  theme,
}: FieldsCombinerMixinsProps) => {
  const fieldTokens = theme.alias.fields;
  const btnTokens = theme.cmp.button;
  const height = btnTokens.size.height[size];
  return css`
    // Input, Select, Button and IconButton
    &,
    .react-select__control {
      min-height: ${height};
      height: 100%;
      transition: all ease ${btnTokens.mutation.transitionDuration};
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
  const aliasTokens = theme.alias;
  const fieldTokens = aliasTokens.fields;
  const btnTokens = theme.cmp.button;
  const height = btnTokens.size.height[size];

  return css`
    min-height: ${height};
    height: 100%;
    transition: all ease ${btnTokens.mutation.transitionDuration};
    position: relative;
    z-index: 1;

    ${combinedButtons
      ? css`
          border-left: ${order === 'first'
            ? null
            : `solid ${aliasTokens.shape.borderSize.separator.md} ${
                theme?.meta?.scheme === 'light'
                  ? aliasTokens.color.border.separator.blendInverse.strong
                  : aliasTokens.color.border.separator.blendBase.strong
              }`};
        `
      : css`
          border-style: solid;
          border-color: ${fieldTokens.color.border[status]?.enabled};
          border-width: ${fieldTokens.shape.borderSize.base};

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
            border-color: ${fieldTokens.color.border.base.hovered};
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
      width: ${height};
    }
  `;
};
