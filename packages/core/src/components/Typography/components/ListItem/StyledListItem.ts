import styled, { type CSSProp } from 'styled-components';

// TODO: interface only for satisfy the type error with TS and inherit CSSProp
export interface StyledListItemProps {
  css?: CSSProp;
}

export const StyledListItem = styled.li<StyledListItemProps>`
  & + & {
    margin-top: ${({ theme }) => theme.cmp.listItem.space.marginTop};
  }
`;
