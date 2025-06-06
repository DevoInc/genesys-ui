import styled, { css } from 'styled-components';

export const StyledCodeInline = styled.code`
  ${({ theme }) => {
    const cmpTokens = theme.cmp.codeInline;
    return css`
      padding: 0 ${cmpTokens.space.padding.base};
      border-radius: ${cmpTokens.shape.borderRadius};
      border: ${cmpTokens.shape.border} solid ${cmpTokens.color.border};
      background: ${cmpTokens.color.background};
      font-family: ${cmpTokens.typo.fontFamily};
    `;
  }}
`;
