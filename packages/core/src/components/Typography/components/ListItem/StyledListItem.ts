import styled, { type CSSProp } from 'styled-components';

// TODO: interface only for satisfy the type error with TS and inherit CSSProp
export interface StyledListItemProps {
  css?: CSSProp;
}

export const StyledListItem = styled.li<StyledListItemProps>`
  & + & {
    // TODO: cmpTokens
    margin-top: ${({ theme }) => theme.alias.space.cmp.xxs};
  }
`;
