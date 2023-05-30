import * as React from 'react';

import { GlobalAriaProps, GlobalAttrProps } from '../../../declarations';
import {
  StyledPartitionsItem,
  StyledPartitionsItemProps,
} from './StyledPartitionsItem';

export interface PartitionsItemProps
  extends Pick<StyledPartitionsItemProps, 'size'>,
    Pick<GlobalAttrProps, 'tooltip'>,
    Pick<GlobalAriaProps, 'aria-label'> {
  /** The background color of the partition item. */
  color?: string;
  /** The width in percentage [0-1]. The sum of all item widths must be one. */
  width?: number;
}

export const PartitionsItem: React.FC<PartitionsItemProps> = ({
  'aria-label': ariaLabel,
  size = 'md',
  color,
  tooltip,
  width,
}) => {
  return (
    <StyledPartitionsItem
      aria-label={ariaLabel}
      size={size}
      title={tooltip}
      $color={color}
      $width={width}
    />
  );
};
