import styled, { css } from 'styled-components';

import type { TExpanded } from '../../definitions';

export interface StyledCollapseContainerProps {
  $expanded?: TExpanded;
}

export const StyledCollapseContainer = styled.div<StyledCollapseContainerProps>`
  ${({ $expanded = false, theme }) => {
    const cmpTokens = theme.cmp.collapse;

    return css`
      position: relative;
      transition: border-color ${cmpTokens.mutation.transitionDuration} ease;
      border-bottom: solid ${cmpTokens.shape.borderSize}
        ${cmpTokens.color.border[$expanded ? 'expanded' : 'base']};
      min-height: ${cmpTokens.size.minHeight};
      background-color: ${cmpTokens.color.background.base};

      ${$expanded &&
      css`
        background-color: ${cmpTokens.color.background.expanded};
      `}
    `;
  }}
`;
