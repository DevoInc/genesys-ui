import styled, { css } from 'styled-components';
import * as PopperJS from '@popperjs/core';

import { StyledBox } from '../Box/StyledBox';
import { getBorderPlacement } from './utils';
import { IconButtonStatusProps } from '../../';

interface StyledInlineMessageProps {
  placement?: PopperJS.Placement;
  status?: IconButtonStatusProps['colorScheme'];
}

export const StyledInlineMessage = styled(StyledBox)<StyledInlineMessageProps>`
  ${({ placement, status, theme }) => {
    const tokens = theme.cmp.inlineMessage;

    return css`
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
