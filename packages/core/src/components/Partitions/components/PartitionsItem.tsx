import * as React from 'react';

import type { GlobalAriaProps, GlobalAttrProps } from '../../../declarations';
import { StyledPartitionsItem } from './StyledPartitionsItem';
import type { IPartitions, IPartitionsItem } from '../declarations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PartitionsItemProps
  extends Pick<GlobalAttrProps, 'tooltip'>,
    Pick<GlobalAriaProps, 'aria-label'>,
    Pick<IPartitions, 'size'>,
    IPartitionsItem {}

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
      $size={size}
      title={tooltip}
      $color={color}
      $width={width}
    />
  );
};
