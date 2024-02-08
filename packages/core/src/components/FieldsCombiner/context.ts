import * as React from 'react';
import { DefaultTheme } from 'styled-components';

import { light } from '@devoinc/genesys-brand-devo';

import {
  FieldsCombinerCombinedButtons,
  FieldsCombinerOrder,
} from './declarations';

import { FieldsCombinerProps } from './FieldsCombiner';

export interface FieldsCombinerElemContextProps {
  order: FieldsCombinerOrder;
  combinedButtons: FieldsCombinerCombinedButtons;
  size: FieldsCombinerProps['size'];
  status: FieldsCombinerProps['status'];
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
