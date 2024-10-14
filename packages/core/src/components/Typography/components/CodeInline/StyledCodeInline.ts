import styled, { css } from 'styled-components';

export const StyledCodeInline = styled.code`
  ${({ theme }) => {
    const cmpTokens = theme.cmp.codeInline;
    return css`
      // TODO: cmpTokens
      padding: 0 ${theme.alias.space.cmp.xxs};
      border-radius: ${cmpTokens.shape.borderRadius};
      border: ${cmpTokens.shape.border} solid ${cmpTokens.color.border};
      background: ${cmpTokens.color.background};
      // TODO: cmpTokens
      font-family: ${theme.alias.typographies.typo.fontFamily.mono
        .fontFaceName};
    `;
  }}
`;
