import * as React from 'react';
import { DefaultTheme } from 'styled-components';

import { light } from '@devoinc/genesys-brand-devo';

import type {
  TFieldsCombinerCombinedButtons,
  TFieldsCombinerOrder,
} from './declarations';

import type { FieldProps } from '../Field';

export interface FieldsCombinerElemContextProps {
  order: TFieldsCombinerOrder;
  combinedButtons: TFieldsCombinerCombinedButtons;
  size: FieldProps['size'];
  status: FieldProps['status'];
  theme: DefaultTheme;
}

export const FieldsCombinerElemContext =
  React.createContext<FieldsCombinerElemContextProps>({
    order: 'first',
    combinedButtons: false,
    size: 'md',
    status: 'base',
    theme: light,
  });
