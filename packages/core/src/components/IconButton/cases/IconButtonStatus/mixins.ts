import { css, DefaultTheme } from 'styled-components';

import { TButtonColorScheme, TButtonState } from '../../../Button';

interface IconButtonStatusMixinProps {
  colorScheme?: TButtonColorScheme;
  state?: TButtonState;
  theme: DefaultTheme;
}

/**
 * Get the custom IconButtonStatus styles.
 *
 * @param props The object param
 * @param props.colorScheme The color scheme of the element
 * @param props.state The state of the element
 * @param props.theme The common theme object with all the tokens
 * @return object with the css.
 */
export const iconButtonStatusMixin = ({
  colorScheme = 'help',
  state = 'enabled',
  theme,
}: IconButtonStatusMixinProps) => {
  const tokens = theme.cmp.iconButtonStatus;
  const hasMouseState =
    state === 'focused' || state === 'hovered' || state === 'pressed';
  return css`
    background-color: ${tokens.color.background[colorScheme][state]};
    color: ${tokens.color.text[colorScheme][state]};

    &:hover {
      background-color: ${tokens.color.background[colorScheme].hovered};
      color: ${tokens.color.text[colorScheme].hovered};
    }

    &:focus {
      background-color: ${tokens.color.background[colorScheme].focused};
      color: ${tokens.color.text[colorScheme].focused};
    }

    &:active {
      background-color: ${tokens.color.background[colorScheme].pressed};
      color: ${tokens.color.text[colorScheme].pressed};
    }

    &&& {
      background-color: ${hasMouseState &&
      css`
        ${tokens.color.background[colorScheme][state]}
      `};
      color: ${hasMouseState && `${tokens.color.text[colorScheme][state]}`};
    }
  `;
};
