import * as React from 'react';

import {
  StyledFieldRequiredMark,
  StyledFieldRequiredMarkProps,
} from './StyledFieldRequiredMark';
import { StyledOverloadCssProps } from '../../../declarations';

export interface FieldRequiredMarkProps
  extends StyledFieldRequiredMarkProps,
    StyledOverloadCssProps {
  /** A title or description of the element, typically displayed as a tooltip when hovering over the element */
  tooltip?: string;
}

export const FieldRequiredMark: React.FC<FieldRequiredMarkProps> = ({
  colorScheme = 'info',
  styles,
  tooltip,
}) => {
  return (
    <StyledFieldRequiredMark
      colorScheme={colorScheme}
      css={styles}
      title={tooltip}
    >
      *
    </StyledFieldRequiredMark>
  );
};
