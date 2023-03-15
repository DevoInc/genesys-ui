import * as React from 'react';
import {
  components,
  ClearIndicatorProps as ReactSelectClearIndicatorProps,
} from 'react-select';

import { Icon } from '../..';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ClearIndicatorProps extends ReactSelectClearIndicatorProps {}

export const ClearIndicator: React.FC<ClearIndicatorProps> = (props) => {
  return (
    components.ClearIndicator && (
      <components.ClearIndicator {...props}>
        <Icon iconId="exit_close" />
      </components.ClearIndicator>
    )
  );
};
