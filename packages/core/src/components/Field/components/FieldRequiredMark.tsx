import * as React from 'react';

import {
  StyledFieldRequiredMark,
  StyledFieldRequiredMarkProps,
} from './StyledFieldRequiredMark';

export interface FieldRequiredMarkProps extends StyledFieldRequiredMarkProps {
  /** Title (message when it's hovered) for the required mark */
  title?: string;
}

export const FieldRequiredMark: React.FC<FieldRequiredMarkProps> = ({
  colorScheme = 'info',
  title,
}) => {
  return (
    <StyledFieldRequiredMark colorScheme={colorScheme} title={title}>
      *
    </StyledFieldRequiredMark>
  );
};
