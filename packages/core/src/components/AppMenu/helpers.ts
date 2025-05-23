import { css, DefaultTheme } from 'styled-components';

/**
 * Get the styles for the AppMenu to be applied to a VFlex component
 *
 * @param props The object param
 * @param props.theme The object with all the design tokens
 * @param props.collapsed If the AppMenu is collapsed
 * @return object with the CSS.
 */
export const appMenuMixin = ({
  collapsed,
  theme,
}: {
  theme: DefaultTheme;
  collapsed: boolean;
}) => {
  const tokens = theme.cmp.appMenu;
  return css`
    border-right: ${tokens.shape.borderRight};
    background-color: ${tokens.color.background};
    transition:
      width ${tokens.mutation.transitionDuration.width} ease-out,
      padding ${tokens.mutation.transitionDuration.padding} ease;
    width: ${tokens.size.width[collapsed ? 'collapsed' : 'base']};
  `;
};
