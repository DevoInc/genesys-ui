import styled, { css } from 'styled-components';

import type { IStyledPolymorphic } from '../../declarations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledEditableContentProps extends IStyledPolymorphic {}

export const StyledEditableContent = styled.div<StyledEditableContentProps>`
  ${({ theme }) => {
    return css`
      position: relative;
      transition: all ease ${theme.alias.mutation.transitionDuration.opacity.sm};
      border-radius: ${theme.alias.shape.borderRadius.elevated};

      &:hover {
        background-color: ${theme.alias.color.background.surface.base.raised};
      }

      &:focus-visible {
        box-shadow: ${theme.alias.elevation.boxShadow.base.focused};
        outline: none;
        background-color: transparent;
      }
    `;
  }}
`;
