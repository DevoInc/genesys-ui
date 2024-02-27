import * as React from 'react';
import { DefaultTheme } from 'styled-components';

import { light } from '@devoinc/genesys-brand-devo';

import type {
  FieldsCombinerCombinedButtons,
  FieldsCombinerOrder,
} from './declarations';

import type { FieldProps } from '../Field';

export interface FieldsCombinerElemContextProps {
  order: FieldsCombinerOrder;
  combinedButtons: FieldsCombinerCombinedButtons;
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
