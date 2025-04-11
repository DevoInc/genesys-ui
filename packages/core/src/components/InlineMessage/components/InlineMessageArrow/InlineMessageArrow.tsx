import * as React from 'react';
import { useTheme } from 'styled-components';
import type { ComputedPlacement } from '@popperjs/core';

import { PopoverArrow } from '../../../Popover/components/';
import { inlineMessageArrowMixin } from './helpers';
import { TInlineMessageColorScheme } from '../../declarations';

export interface InlineMessageArrowProps {
  placement?: ComputedPlacement;
  size?: number;
  status?: TInlineMessageColorScheme;
}

export const InlineMessageArrow: React.FC<InlineMessageArrowProps> = ({
  placement,
  size,
  status,
}) => {
  const theme = useTheme();
  return (
    <PopoverArrow
      placement={placement}
      size={size}
      style={inlineMessageArrowMixin({ placement, status, theme })}
    />
  );
};
