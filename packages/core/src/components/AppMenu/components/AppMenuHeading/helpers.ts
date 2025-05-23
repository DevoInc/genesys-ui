import { css, DefaultTheme } from 'styled-components';
import type { TAppMenuCollapsed } from '../../declarations';

/**
 * Get the collapsed version of the text content of the heading
 *
 * @param text The text content of the menu heading
 * @return the string with the collapsed text.
 */
export const appMenuHeadingSlice = (text: string) =>
  text.length > 6 ? text.slice(0, 5) + '.' : text;

/**
 * Get the styles for the AppMenuHeading text to be applied to a typography component
 *
 * @param props The object param
 * @param props.theme The object with all the design tokens
 * @param props.collapsed If the menu is collapsed
 * @return object with the CSS.
 */
export const appMenuHeadingTextMixin = ({
  collapsed,
  theme,
}: {
  collapsed: TAppMenuCollapsed;
  theme: DefaultTheme;
}) => {
  const tokens = theme.cmp.appMenu.heading;
  return css`
    position: absolute;
    left: ${tokens.space.offset[collapsed ? 'collapsed' : 'base']};
    transform: ${collapsed ? 'translate(-50%, 0)' : 'translate(0, 0)'};
    ${collapsed
      ? css`
          transition:
            left ${tokens.mutation.transitionDuration.left} ease-out
              ${tokens.mutation.transitionDuration.leftDelay},
            transform ${tokens.mutation.transitionDuration.transform}
              ease-in-out ${tokens.mutation.transitionDuration.transformDelay};
        `
      : css`
          transition: none;
        `}

    color: ${tokens.color.text};
  `;
};
