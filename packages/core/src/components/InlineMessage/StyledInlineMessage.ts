import styled, { css } from 'styled-components';
import * as PopperJS from '@popperjs/core';

import { getBorderPlacement } from './utils';
import { boxMixin, BoxMixinProps, IconButtonStatusProps } from '../../';

interface StyledInlineMessageProps
  extends Omit<BoxMixinProps, '$display' | 'theme'> {
  placement?: PopperJS.Placement;
  status?: IconButtonStatusProps['colorScheme'];
}

export const StyledInlineMessage = styled.div<StyledInlineMessageProps>`
  ${({ placement, status, theme, ...boxMixinProps }) => {
    const tokens = theme.cmp.inlineMessage;

    return css`
      ${boxMixin(theme)(boxMixinProps)};
      position: relative;
      background-color: ${tokens.color.background};

      ${status &&
      css`
        &::before {
          content: '';
          position: absolute;
          background-color: ${tokens.color.border[status]};
        }
        ${getBorderPlacement(placement || '')};
      `};
    `;
  }};
`;
