import styled, { css } from 'styled-components';

export interface StyledStatusMessageProps {
  bordered?: boolean;
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
