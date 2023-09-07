import { DefaultTheme } from 'styled-components';
import {
  DevoLogoColorScheme,
  DevoLogoPathType,
  DevoLogoSize,
} from './declarations';

const SizeMap: { [key in DevoLogoSize]: { width: string; height: string } } = {
  xs: { width: '5rem', height: '2.9rem' },
  sm: { width: '6rem', height: '3.6rem' },
  md: { width: '7rem', height: '4.2rem' },
  lg: { width: '8rem', height: '4.9rem' },
  xl: { width: '9rem', height: '5.4rem' },
} as const;

export const getSize = (size: DevoLogoSize) => SizeMap[size] || SizeMap.md;

export const getColor = (
  colorScheme: DevoLogoColorScheme,
  theme: DefaultTheme,
  type: DevoLogoPathType,
) => theme.cmp.loader[type].color.background[colorScheme];
