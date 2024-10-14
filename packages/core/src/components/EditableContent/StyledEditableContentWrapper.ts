import styled from 'styled-components';

import type { IStyledPolymorphic } from '../../declarations';

export interface StyledEditableContentProps extends IStyledPolymorphic {}

export const StyledEditableContentWrapper = styled.div<StyledEditableContentProps>`
  position: relative;
  // TODO: cmpTokens
  transition: all ease
    ${({ theme }) => theme.alias.mutation.transitionDuration.opacity.sm};
`;
