import * as React from 'react';
import styled, { css } from 'styled-components';
import { GlobalStatus } from '../../declarations';

export interface StyledStatusMessageProps {
  status?: GlobalStatus;
  className?: string;
  bordered?: boolean;
  margin?: React.CSSProperties['margin'];
  width?: React.CSSProperties['width'];
}

export const StyledStatusMessage = styled.div<StyledStatusMessageProps>`
  ${({ bordered, theme }) => {
    const aliasTokens = theme.alias;
    const borderColor = aliasTokens.color.border.feedback.base.base;
    const borderSize = aliasTokens.shape.borderSize.separator.md;
    const borderRadius = aliasTokens.shape.borderRadius.elevated;
    return css`
      border: ${bordered && `solid ${borderSize} ${borderColor}`};
      border-radius: ${bordered && borderRadius};
    `;
  }}
`;
