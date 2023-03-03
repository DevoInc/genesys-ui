import styled from 'styled-components';

export const StyledItemSubmenu = styled.label`
  display: flex;
  gap: 0.8rem;
  line-height: 1.6rem;
  padding: 0.8rem 3.2rem;
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
`;
