import { css, DefaultTheme } from 'styled-components';

import { ButtonSize, ButtonState } from '../../../Button';

import { pseudoElementMixin } from '../../../../styled';

interface IconButtonStopMixinProps {
  size?: ButtonSize;
  state?: ButtonState;
  theme: DefaultTheme;
}

/**
 * Get the custom IconButtonStop styles.
 *
 * @param props The object param
 * @param props.size The size of the element
 * @param props.state The state of the element
 * @param props.theme The common theme object with all the tokens
 * @return object with the css.
 */
export const iconButtonStopMixin = ({
  size = 'md',
  state = 'enabled',
  theme,
}: IconButtonStopMixinProps) => {
  const tokens = theme.cmp.button;
  const iconTokens = theme.cmp.iconButtonStop;
  const circle = `calc(${tokens.size.height[size]} - 0.8rem)`;
  return css`
    -webkit-font-smoothing: antialiased;
    ${state !== 'loading' &&
    size !== 'xxs' &&
    size !== 'xs' &&
    css`
      &::after {
        ${pseudoElementMixin};
        top: auto;
        left: auto;
        width: ${circle};
        height: ${circle};
        border: solid 0.2rem ${iconTokens.circle.color.border};
        border-radius: ${tokens.shape.borderRadius.full};
      }
    `}
  `;
};
