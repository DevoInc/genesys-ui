/**
 * Get the width and height of the marker icon of the menu item
 *
 * @param theme The object with all the tokens
 * @return object with the css.
 */
export const menuItemSizeConfig = (theme) => ({
  iconSize: theme.alias.size.square.icon.base.xxs,
  iconSpace: theme.alias.space.cmp.xs,
  horPadding: theme.alias.menus.item.space.marginHor,
});
