import * as React from 'react';

import {
  StyledFieldRequiredMark,
  StyledFieldRequiredMarkProps,
} from './StyledFieldRequiredMark';
import { StyledOverloadCssProps } from '../../../declarations';

export interface FieldRequiredMarkProps
  extends StyledFieldRequiredMarkProps,
    StyledOverloadCssProps {
  /** Title (message when it's hovered) for the required mark */
  title?: string;
}

export const FieldRequiredMark: React.FC<FieldRequiredMarkProps> = ({
  colorScheme = 'info',
  styles,
  title,
}) => {
  return (
    <StyledFieldRequiredMark
      colorScheme={colorScheme}
      css={styles}
      title={title}
    >
      *
    </StyledFieldRequiredMark>
  );
};
