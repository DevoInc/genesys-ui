import * as React from 'react';

import type { IGlobalAriaAttrs, IGlobalAttrs } from '../../../../declarations';
import { StyledPartitionsItem } from './StyledPartitionsItem';
import type { IPartitions, IPartitionsItem } from '../../declarations';

export interface PartitionsItemProps
  extends Pick<IGlobalAttrs, 'tooltip'>,
    Pick<IGlobalAriaAttrs, 'aria-label'>,
    Pick<IPartitions, 'size'>,
    IPartitionsItem {}

export const PartitionsItem: React.FC<PartitionsItemProps> = ({
  'aria-label': ariaLabel,
  size = 'md',
  color,
  tooltip,
  width,
}) => (
  <StyledPartitionsItem
    aria-label={ariaLabel}
    $size={size}
    title={tooltip}
    $color={color}
    $width={width}
  />
);
