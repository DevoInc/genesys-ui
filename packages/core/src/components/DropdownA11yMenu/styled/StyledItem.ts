import styled from 'styled-components';

export const StyledItem = styled.label`
  display: flex;
  line-height: 1.6rem;
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
`;
