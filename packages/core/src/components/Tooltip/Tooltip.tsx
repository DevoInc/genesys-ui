import * as React from 'react';
import { GlobalAriaProps, GlobalAttrProps } from '../../declarations';

import { StyledTooltip, StyledTooltipProps } from './StyledTooltip';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TooltipProps
  extends StyledTooltipProps,
    // native
    GlobalAttrProps,
    GlobalAriaProps {
  //TODO: this should extend from library when upgraded.
  effect?: 'float' | 'solid';
  place?: 'right' | 'bottom' | 'left' | 'top';
  delayShow?: number;
  id?: string;
  offset?: any;
  children?: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = (props) => {
  return <StyledTooltip {...props} />;
};
