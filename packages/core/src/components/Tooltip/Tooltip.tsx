import * as React from 'react';
import { GlobalAriaProps, GlobalAttrProps } from '../../declarations';

import { StyledTooltip, StyledTooltipProps } from './StyledTooltip';

export interface TooltipProps
  extends StyledTooltipProps,
    // native
    GlobalAttrProps,
    GlobalAriaProps {
  effect?: 'float' | 'solid';
  place?: 'right' | 'bottom' | 'left' | 'top';
  delayShow?: number;
  id?: string;
  offset?: {
    top?: number | string;
    left?: number | string;
    right?: number | string;
    bottom?: number | string;
  };
  children?: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = (props) => {
  return <StyledTooltip {...props} />;
};
