import { TMonthFloatingPickerSize } from './declarations';
import { TButtonSize } from '@devoinc/genesys-ui';

export const PANEL_WIDTH_SIZE_MAP: {
  [key in TMonthFloatingPickerSize]: string;
} = {
  sm: '19rem',
  md: '19rem',
  lg: '23rem',
};

export const PANEL_HEIGHT_SIZE_MAP: {
  [key in TMonthFloatingPickerSize]: string;
} = {
  sm: '13.8rem',
  md: '13.8rem',
  lg: '15.4rem',
};

export const MONTH_YEAR_SELECTORS_SIZE_MAP: {
  [key in TMonthFloatingPickerSize]: TButtonSize;
} = {
  sm: 'sm',
  md: 'sm',
  lg: 'md',
};

export const YEAR_INLINE_FONT_SIZE_MAP: {
  [key in TMonthFloatingPickerSize]: TButtonSize;
} = {
  sm: 'sm',
  md: 'sm',
  lg: 'md',
};
