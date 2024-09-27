import styled, { css } from 'styled-components';

export interface StyledStrongProps {
  $bolder: boolean;
}

export const StyledStrong = styled.strong<StyledStrongProps>`
  ${({ $bolder, theme }) => {
    const cmpTokens = theme.cmp.strong;
    return css`
      font-weight: ${$bolder
        ? cmpTokens.typo.fontWeight.strong
        : cmpTokens.typo.fontWeight.base};
    `;
  }}
`;
