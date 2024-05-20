import { css, DefaultTheme } from 'styled-components';

import type { PopoverProps } from '../../../Popover';
import type { IconButtonStatusProps } from '../../../IconButton';

export const inlineMessageArrowMixin = ({
  placement,
  status = 'help',
  theme,
}: {
  placement: PopoverProps['placement'];
  status: IconButtonStatusProps['colorScheme'];
  theme: DefaultTheme;
}) => {
  const bgColor = theme.cmp.inlineMessage.color.border[status];
  return css`
    ::after {
      content: none;
    }

    ${placement?.includes('top') &&
    css`
      border-top-color: ${bgColor};
      overflow: hidden;
    `};

    ${placement?.includes('bottom') &&
    css`
      border-bottom-color: ${bgColor};
      overflow: hidden;
    `};

    ${placement?.includes('right') &&
    css`
      border-right-color: ${bgColor};
      overflow: hidden;
    `};

    ${placement?.includes('left') &&
    css`
      border-left-color: ${bgColor};
      overflow: hidden;
    `};
  `;
};
