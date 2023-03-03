import styled from 'styled-components';

interface StyledItemLinkProps {
  disabled?: boolean;
}

export const StyledItemLink = styled.a<StyledItemLinkProps>`
  text-decoration: none;
  color: inherit;
  display: flex;
  gap: 0.8rem;
  padding: 0.8rem 1.2rem 0.8rem 3.2rem;
  cursor: inherit;
  position: relative;
  align-items: center;
  > span:first-of-type {
    overflow: hidden;
    white-space: nowrap;
    word-wrap: normal;
    text-overflow: ellipsis;
    flex: 1 1 auto;
    display: block;
    position: relative;
    width: 100%;
  }
  ${({ disabled }) => disabled && 'pointer-events: none'};
`;
