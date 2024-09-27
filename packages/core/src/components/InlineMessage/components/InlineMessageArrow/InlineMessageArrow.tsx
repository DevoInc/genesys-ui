import * as React from 'react';
import { useTheme } from 'styled-components';
import type { ComputedPlacement } from '@popperjs/core';

import type { TUIColorScheme } from '../../../../declarations/commonProps';
import { StyledPopoverArrow } from '../../../Popover/StyledPopoverArrow';
import { inlineMessageArrowMixin } from './helpers';

export interface InlineMessageArrowProps {
  placement?: ComputedPlacement;
  size?: number;
  status?: TUIColorScheme;
}

export const InlineMessageArrow: React.FC<InlineMessageArrowProps> = ({
  placement,
  size,
  status,
}) => {
  const theme = useTheme();
  return (
    <StyledPopoverArrow
      $placement={placement}
      $size={size}
      css={inlineMessageArrowMixin({ placement, status, theme })}
    />
  );
};
