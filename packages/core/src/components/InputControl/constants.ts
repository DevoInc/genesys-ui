import React from 'react';
import { STATUS_ICON_MAP } from '../../constants';
import type { TFieldStatus } from '../../declarations';
import { OmitUnion } from '../../typeFunctions/omitUnion';

export const INPUT_CONTROL_ICON_STATUS_MAP: {
  [key in OmitUnion<TFieldStatus, 'base'>]: React.ReactNode;
} = {
  error: STATUS_ICON_MAP.filled.error,
  success: STATUS_ICON_MAP.filled.success,
  warning: STATUS_ICON_MAP.filled.warning,
} as const;

export const INPUT_CONTROL_PSEUDO_ACTIONS_SIZE_MAP = {
  sm: 'xxs',
  md: 'xs',
  lg: 'sm',
} as const;

export const INPUT_CONTROL_SHOW_PASSWORD_SIZE_MAP = {
  sm: 'xxs',
  md: 'xs',
  lg: 'sm',
} as const;
