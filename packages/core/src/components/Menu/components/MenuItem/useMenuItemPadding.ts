import * as React from 'react';
import { useTheme } from 'styled-components';
import { observeElementSize } from '../../../../helpers/dom';
import { getMenuItemPaddingWithInteractiveBlock } from './helpers';

/**
 * Hook to get the width of the overlapped interactive content to apply a padding-right style to the menu item based on it.
 *
 * @param interactiveRef The ref of the interactive content
 * @param menuItemRef The ref of the menu item button/link
 * @return useEffect to apply the styles.
 */
export const useMenuItemPadding = (
  interactiveRef: React.MutableRefObject<HTMLElement>,
  menuItemRef: React.MutableRefObject<HTMLButtonElement>,
) => {
  const theme = useTheme();
  React.useEffect(() => {
    return observeElementSize(interactiveRef?.current, (width) => {
      menuItemRef.current.style.paddingRight =
        getMenuItemPaddingWithInteractiveBlock(width, theme);
    });
  }, [theme]);
};
