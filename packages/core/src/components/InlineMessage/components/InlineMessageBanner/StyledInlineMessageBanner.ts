import styled, { css } from 'styled-components';

export const StyledInlineMessageBanner = styled.div`
  ${({ theme }) => {
    const tokens = theme.cmp.inlineMessageBanner;
    return css`
      margin: 0;
      border-left: none;
      border-right: none;
      border-bottom: none;
      border-radius: unset;
      border-color: ${tokens.color.border};

      &:first-child {
        border-top: none;
      }
    `;
  }}
`;
