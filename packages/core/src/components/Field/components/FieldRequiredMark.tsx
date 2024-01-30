import * as React from 'react';

import {
  StyledFieldRequiredMark,
  StyledFieldRequiredMarkProps,
} from './StyledFieldRequiredMark';
import { StyledOverloadCssProps, UIColorScheme } from '../../../declarations';
import { FieldContext } from '../context';

export interface FieldRequiredMarkProps
  extends StyledFieldRequiredMarkProps,
    StyledOverloadCssProps {
  /** A title or description of the element, typically displayed as a tooltip when hovering over the element */
  tooltip?: string;
}

export const FieldRequiredMark: React.FC<FieldRequiredMarkProps> = ({
  colorScheme,
  styles,
  tooltip,
}) => {
  const { status } = React.useContext(FieldContext);
  return (
    <StyledFieldRequiredMark
      colorScheme={colorScheme || (status as UIColorScheme)}
      css={styles}
      title={tooltip}
    >
      *
    </StyledFieldRequiredMark>
  );
};
