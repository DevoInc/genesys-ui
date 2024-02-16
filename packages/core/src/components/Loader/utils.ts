import {
  ContextualScrollLoaderSize,
  ContextualScrollLoaderType,
  LoaderBasicColorScheme,
  LoaderColorScheme,
} from './declarations';
import { BaseSize } from '../../';
import { DefaultTheme } from 'styled-components';
import { CONTEXTUAL_SCROLL_LOADER_SIZE_MAP } from './constants';

export const getSizeByType = (
  type: ContextualScrollLoaderType,
  size: ContextualScrollLoaderSize,
): BaseSize =>
  CONTEXTUAL_SCROLL_LOADER_SIZE_MAP[type]?.[size] ||
  CONTEXTUAL_SCROLL_LOADER_SIZE_MAP.spinner.md;

export const getLoaderContentColorScheme = ({
  colorScheme,
  theme,
}: {
  colorScheme: LoaderColorScheme;
  theme: DefaultTheme;
}): LoaderBasicColorScheme => {
  const evalColorScheme =
    colorScheme === 'inherited'
      ? (theme.meta.scheme as LoaderBasicColorScheme)
      : colorScheme;
  if (evalColorScheme === 'dark') return 'light';
  return 'dark';
};
