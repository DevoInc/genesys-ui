import styled from 'styled-components';

import type { IStyledPolymorphic } from '../../declarations';

export interface StyledEditableContentProps extends IStyledPolymorphic {}

export const StyledEditableContent = styled.div<StyledEditableContentProps>`
  // TODO: cmpTokens
  position: relative;
  transition: all ease
    ${({ theme }) => theme.alias.mutation.transitionDuration.opacity.sm};
  border-radius: ${({ theme }) => theme.alias.shape.borderRadius.elevated};

  &:hover {
    background-color: ${({ theme }) =>
      theme.alias.color.background.surface.base.raised};
  }

  &:focus-visible {
    box-shadow: ${({ theme }) => theme.alias.elevation.boxShadow.base.focused};
    outline: none;
    background-color: transparent;
  }
`;
