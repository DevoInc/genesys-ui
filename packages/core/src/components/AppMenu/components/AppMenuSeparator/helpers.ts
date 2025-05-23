import { css, DefaultTheme } from 'styled-components';
import type { TAppMenuCollapsed } from '../../declarations';

/**
 * Get the styles for the AppMenuSeparator to be applied to a MenuSeparator component
 *
 * @param props The object param
 * @param props.collapsed If the app menu is collapsed
 * @param props.theme The object with all the design tokens
 * @return object with the CSS.
 */
export const appMenuSeparatorMixin = ({
  collapsed,
  theme,
}: {
  collapsed: TAppMenuCollapsed;
  theme: DefaultTheme;
}) => {
  const tokens = theme.cmp.appMenu.separator;
  return css`
    width: ${tokens.size.width[collapsed ? 'collapsed' : 'base']};
    left: ${tokens.space.offset[collapsed ? 'collapsed' : 'base']};
    margin: 0;
    background-color: ${tokens.color.border};
    border: none;
    transition:
      width ${tokens.mutation.transitionDuration.width} ease-out,
      left ${tokens.mutation.transitionDuration.width} ease;
  `;
};
