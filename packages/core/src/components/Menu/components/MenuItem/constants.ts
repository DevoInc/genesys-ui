import { DefaultTheme } from 'styled-components';

/**
 * Get the width and height of the marker icon of the menu item
 *
 * @param theme The object with all the tokens
 * @return object with the css.
 */
export const menuItemSizeConfig = (theme: DefaultTheme) => ({
  iconSize: theme.cmp.menu.itemIcon.size.square,
  iconSpace: theme.cmp.menu.itemIcon.space.offset,
  horPadding: theme.cmp.menu.item.space.paddingHor,
});
