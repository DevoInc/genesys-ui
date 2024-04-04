import { DefaultTheme } from 'styled-components';
import { CONTEXTUAL_SCROLL_LOADER_SIZE_MAP } from './constants';
import type {
  TContextualScrollLoaderSize,
  TContextualScrollLoaderType,
  TLoaderBasicColorScheme,
  TLoaderColorScheme,
} from './declarations';
import type { TBaseSize } from '../../declarations/commonProps';

export const getSizeByType = (
  type: TContextualScrollLoaderType,
  size: TContextualScrollLoaderSize,
): TBaseSize =>
  CONTEXTUAL_SCROLL_LOADER_SIZE_MAP[type]?.[size] ||
  CONTEXTUAL_SCROLL_LOADER_SIZE_MAP.spinner.md;

export const getLoaderContentColorScheme = ({
  colorScheme,
  theme,
}: {
  colorScheme: TLoaderColorScheme;
  theme: DefaultTheme;
}): TLoaderBasicColorScheme => {
  const evalColorScheme =
    colorScheme === 'inherited'
      ? (theme.meta.scheme as TLoaderBasicColorScheme)
      : colorScheme;
  if (evalColorScheme === 'dark') return 'light';
  return 'dark';
};
