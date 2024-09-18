import { DefaultTheme } from 'styled-components';
import type {
  TDevoLogoColorScheme,
  TDevoLogoPathType,
  TDevoLogoSize,
} from './declarations';

const SizeMap: { [key in TDevoLogoSize]: { width: string; height: string } } = {
  xs: { width: '5rem', height: '2.9rem' },
  sm: { width: '6rem', height: '3.6rem' },
  md: { width: '7rem', height: '4.2rem' },
  lg: { width: '8rem', height: '4.9rem' },
  xl: { width: '9rem', height: '5.4rem' },
};

export const getSize = (size: TDevoLogoSize) => SizeMap[size] || SizeMap.md;

export const getColor = (
  colorScheme: TDevoLogoColorScheme,
  theme: DefaultTheme,
  type: TDevoLogoPathType,
) => theme.cmp.loader[type].color.background[colorScheme];
