import styled, { css } from 'styled-components';

export const StyledCodeInline = styled.code`
  ${({ theme }) => {
    const cmpTokens = theme.cmp.codeInline;
    const typoTokens = theme.alias.typographies.typo;
    return css`
      padding: 0 ${theme.alias.space.cmp.xxs};
      border-radius: ${cmpTokens.shape.borderRadius};
      border: ${cmpTokens.shape.border} solid ${cmpTokens.color.border};
      background: ${cmpTokens.color.background};
      font-family: ${typoTokens.fontFamily.mono.fontFaceName};
    `;
  }}
`;
