import * as React from 'react';
import {
  components,
  ClearIndicatorProps as DefaultClearIndicatorProps,
} from 'react-select';

import { Icon } from '../../';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ClearIndicatorProps extends DefaultClearIndicatorProps {}

export const ClearIndicator: React.FC<ClearIndicatorProps> = (props) => {
  return (
    components.ClearIndicator && (
      <components.ClearIndicator {...props}>
        <Icon iconId="exit_close" />
      </components.ClearIndicator>
    )
  );
};
