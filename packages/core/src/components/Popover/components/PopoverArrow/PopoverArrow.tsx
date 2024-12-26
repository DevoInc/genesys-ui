import * as React from 'react';

import {
  StyledPopoverArrow,
  type StyledPopoverArrowProps,
} from './StyledPopoverArrow';
import { IStyledOverloadCss } from '../../../../declarations';

export interface PopoverArrowProps extends IStyledOverloadCss {
  placement: StyledPopoverArrowProps['$placement'];
  size: StyledPopoverArrowProps['$size'];
}

export const PopoverArrow: React.FC<PopoverArrowProps> = ({
  placement,
  size,
  style,
}) => <StyledPopoverArrow $placement={placement} $size={size} css={style} />;
