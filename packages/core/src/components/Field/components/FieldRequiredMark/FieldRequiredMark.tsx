import * as React from 'react';

import type { IField } from '../../declarations';
import { StyledFieldRequiredMark } from './StyledFieldRequiredMark';
import type { TUIColorScheme } from '../../../../declarations';

export interface FieldRequiredMarkProps extends Pick<IField, 'style'> {
  /** A title or description of the element, typically displayed as a tooltip when hovering over the element */
  tooltip?: IField['requiredMarkTooltip'];
  colorScheme?: TUIColorScheme;
}

export const FieldRequiredMark: React.FC<FieldRequiredMarkProps> = ({
  colorScheme,
  style,
  tooltip,
}) => (
  <StyledFieldRequiredMark
    $colorScheme={colorScheme}
    css={style}
    title={tooltip}
  >
    *
  </StyledFieldRequiredMark>
);
