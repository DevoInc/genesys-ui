import * as React from 'react';
import {
  components,
  ClearIndicatorProps as RSClearIndicatorProps,
} from 'react-select';

import { Icon } from '../..';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ClearIndicatorProps extends RSClearIndicatorProps {}

export const ClearIndicator: React.FC<ClearIndicatorProps> = (props) => {
  return (
    components.ClearIndicator && (
      <components.ClearIndicator {...props}>
        <Icon iconId="gi-exit_close" />
      </components.ClearIndicator>
    )
  );
};
