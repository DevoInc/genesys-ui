import { css, DefaultTheme } from 'styled-components';

import type { TInlineMessageColorScheme } from './declarations';
import type { PopoverProps } from '../Popover';
import { getBorderPlacement } from './utils';

/**
 * Get the InlineMessageContainer custom styles (border color... etc.) applied to a Popover.Panel component.
 *
 * @return object with the css.
 */

export const inlineMessageContainerMixin = ({
  draggable,
  placement,
  status = 'help',
  theme,
}: {
  draggable: boolean;
  placement: PopoverProps['placement'];
  status: TInlineMessageColorScheme;
  theme: DefaultTheme;
}) => {
  const tokens = theme.cmp.inlineMessage;
  return css`
    position: relative;
    background-color: ${tokens.color.background};
    // overflow: hidden;
    cursor: ${draggable ? 'move' : 'default'};

    ${status &&
    css`
      &::after {
        content: '';
        position: absolute;
        background-color: ${tokens.color.border[status]};
      }

      ${getBorderPlacement(placement || '', theme)};
    `};
  `;
};
