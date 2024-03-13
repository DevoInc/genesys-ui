import * as React from 'react';

import type { IField } from '../declarations';

import {
  StyledFieldRequiredMark,
  type StyledFieldRequiredMarkProps,
} from './StyledFieldRequiredMark';

export interface FieldRequiredMarkProps
  extends StyledFieldRequiredMarkProps,
    Pick<IField, 'styles'> {
  /** A title or description of the element, typically displayed as a tooltip when hovering over the element */
  tooltip?: IField['tooltip'];
}

export const FieldRequiredMark: React.FC<FieldRequiredMarkProps> = ({
  colorScheme,
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
