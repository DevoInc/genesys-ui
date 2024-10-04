import * as React from 'react';
import { useTheme } from 'styled-components';
import {
  components,
  ClearIndicatorProps as RSClearIndicatorProps,
} from 'react-select';

import { GIExitClose } from '@devoinc/genesys-icons';

export interface ClearIndicatorProps extends RSClearIndicatorProps {}

export const ClearIndicator: React.FC<ClearIndicatorProps> = (props) => {
  const theme = useTheme();
  return (
    components.ClearIndicator && (
      <components.ClearIndicator {...props}>
        <GIExitClose size={theme.alias.size.square.icon.base.xxs} />
      </components.ClearIndicator>
    )
  );
};
