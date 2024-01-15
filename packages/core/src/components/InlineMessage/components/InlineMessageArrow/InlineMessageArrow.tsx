import * as React from 'react';
import { useTheme } from 'styled-components';

import { UIColorScheme } from '../../../../declarations/commonProps';

import {
  StyledPopoverArrow,
  StyledPopoverArrowProps,
} from '../../../Popover/components';

import { inlineMessageArrowMixin } from './helpers';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InlineMessageArrowProps extends StyledPopoverArrowProps {
  status?: UIColorScheme;
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
