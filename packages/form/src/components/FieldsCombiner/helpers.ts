import { css, DefaultTheme } from 'styled-components';

import { FieldSize, FieldStatus } from '@devoinc/genesys-ui';

export interface FieldsCombinerMixinsProps {
  first: boolean;
  size: FieldSize;
  status: FieldStatus;
  theme: DefaultTheme;
}

export const fieldsCombinerInputAndSelectMixin = ({
  first,
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

    &:focus {
      box-shadow: none;
      z-index: 3;
    }

    &,
    .react-select__control {
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

    *:hover > * > &,
    *:hover > * > & .react-select__control {
      border-color: ${fieldTokens.color.border.base.hovered};
    }
  `;
};

export const fieldsCombinerButtonMixin = ({
  first,
  size,
  status,
  theme,
}: FieldsCombinerMixinsProps) => {
  const fieldTokens = theme.alias.fields;
  const btnTokens = theme.cmp.button;
  const height = btnTokens.size.height[size];

  return css`
    min-height: ${height};
    height: 100%;
    transition: all ease ${btnTokens.mutation.transitionDuration};
    position: relative;
    z-index: 1;
    border-style: solid;
    border-color: ${fieldTokens.color.border[status]?.enabled};
    border-width: ${fieldTokens.shape.borderSize.base};

    // icon button
    &${'[data-squared]'} {
      width: ${height};
    }

    &,
    &::before {
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
    }

    *:hover > * > & {
      border-color: ${fieldTokens.color.border.base.hovered};
    }
  `;
};
