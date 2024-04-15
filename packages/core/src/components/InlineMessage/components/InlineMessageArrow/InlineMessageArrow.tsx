import * as React from 'react';
import { useTheme } from 'styled-components';

import type { TUIColorScheme } from '../../../../declarations/commonProps';

import {
  StyledPopoverArrow,
  type StyledPopoverArrowProps,
} from '../../../Popover/components';

import { inlineMessageArrowMixin } from './helpers';

export interface InlineMessageArrowProps extends StyledPopoverArrowProps {
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
      placement={placement}
      size={size}
      css={inlineMessageArrowMixin({ placement, status, theme })}
    />
  );
};
