import * as React from 'react';
import styled, { css } from 'styled-components';
import { settingColors } from '../../styled/settingColors';
import { typoColorMixin } from '../../styled/mixins/baseMixins';
import { GlobalStatus } from '../../declarations';

export interface StyledStatusMessageProps {
  status?: GlobalStatus;
  className?: string;
  bordered?: boolean;
  margin?: React.CSSProperties['margin'];
  width?: React.CSSProperties['width'];
}

export const StyledStatusMessage = styled.div<StyledStatusMessageProps>`
  ${({ bordered, margin = '', status = 'base', theme, width = '100%' }) => {
    const borderColor = settingColors.borderColor({ theme, status });
    return css`
      margin: ${margin};
      width: ${width};
      border: ${bordered && `solid 1px ${borderColor}`};

      i.status-icon {
        ${typoColorMixin({
          variant: 'body',
          colorScheme: status,
          theme,
        })};
      }
    `;
  }}
`;
