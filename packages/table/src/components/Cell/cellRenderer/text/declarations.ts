import { BaseSize } from '@devoinc/genesys-ui';
import { DefaultTheme } from 'styled-components';

export type cellSize = BaseSize;

export interface StyledCellRendererTextProps {
  size?: cellSize;
  theme?: DefaultTheme;
  heightProp?: number;
  textAlign?: 'left' | 'center' | 'right';
  density?: 'default' | 'compact' | 'comfortable';
}
