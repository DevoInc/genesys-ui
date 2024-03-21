import { DefaultTheme } from 'styled-components';
import { TABS_ITEM_CLOSABLE_BUTTON_SIZE } from './components/constants';

export const getTabsItemClosableButtonSquare = (theme: DefaultTheme) =>
  theme.cmp.button.size.square[TABS_ITEM_CLOSABLE_BUTTON_SIZE];
