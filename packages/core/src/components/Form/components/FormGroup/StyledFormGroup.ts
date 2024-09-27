import styled, { css } from 'styled-components';

export interface StyledFormGroupProps {
  /** If the form group is boxed. */
  $boxed?: boolean;
}

export const StyledFormGroup = styled.div<StyledFormGroupProps>`
  ${({ $boxed = false, theme }) => {
    const aliasTokens = theme.alias;
    const spacingTokens = aliasTokens.space;
    return css`
      ${$boxed &&
      css`
        border: solid ${theme.alias.shape.borderSize.separator.md}
          ${aliasTokens.color.border.separator.base.base};
        border-radius: ${aliasTokens.shape.borderRadius.elevated};
        padding: ${spacingTokens.cmp.md};
      `}
    `;
  }}
`;
