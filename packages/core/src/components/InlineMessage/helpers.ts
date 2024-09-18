import { css, DefaultTheme } from 'styled-components';

import { getBorderPlacement } from './utils';
import type { IconButtonStatusProps } from '../IconButton';
import type { PopoverProps } from '../Popover';

export const inlineMessageContainerMixin = ({
  placement,
  status = 'help',
  theme,
}: {
  placement: PopoverProps['placement'];
  status: IconButtonStatusProps['colorScheme'];
  theme: DefaultTheme;
}) => {
  const tokens = theme.cmp.inlineMessage;
  return css`
    position: relative;
    background-color: ${tokens.color.background};
    overflow: hidden;

    ${status &&
    css`
      &::after {
        content: '';
        position: absolute;
        background-color: ${tokens.color.border[status]};
      }

      ${getBorderPlacement(placement || '')};
    `};
  `;
};
