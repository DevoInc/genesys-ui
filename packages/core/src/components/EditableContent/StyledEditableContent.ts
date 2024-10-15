import styled from 'styled-components';

import type { IStyledPolymorphic } from '../../declarations';

export interface StyledEditableContentProps extends IStyledPolymorphic {}

export const StyledEditableContent = styled.div<StyledEditableContentProps>`
  position: relative;
  transition: all ease
    ${({ theme }) => theme.cmp.editableContent.mutation.transitionDuration};
  border-radius: ${({ theme }) => theme.cmp.editableContent.shape.borderRadius};

  &:hover {
    background-color: ${({ theme }) =>
      theme.cmp.editableContent.color.background.hovered};
  }

  &:focus-visible {
    box-shadow: ${({ theme }) =>
      theme.cmp.editableContent.elevation.boxShadow.focused};
    outline: none;
    background-color: transparent;
  }
`;
