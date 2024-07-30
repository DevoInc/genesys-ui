import * as React from 'react';
import {
  components,
  ClearIndicatorProps as RSClearIndicatorProps,
} from 'react-select';

import { GIExitClose } from '@devoinc/genesys-icons';

import { Icon } from '../../../Icon';

export interface ClearIndicatorProps extends RSClearIndicatorProps {}

export const ClearIndicator: React.FC<ClearIndicatorProps> = (props) =>
  components.ClearIndicator && (
    <components.ClearIndicator {...props}>
      <Icon>
        <GIExitClose />
      </Icon>
    </components.ClearIndicator>
  );
