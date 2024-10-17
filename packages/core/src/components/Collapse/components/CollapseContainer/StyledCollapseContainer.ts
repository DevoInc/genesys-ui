import styled, { css } from 'styled-components';

import type { TExpanded } from '../../definitions';
import { pseudoElementMixin } from '../../../../styled';

export interface StyledCollapseContainerProps {
  $expanded?: TExpanded;
  $isDraggable?: boolean;
}

export const StyledCollapseContainer = styled.div<StyledCollapseContainerProps>`
  position: relative;

  ${({ $isDraggable }) =>
    $isDraggable &&
    css`
      cursor: grab;

      &::after {
        ${pseudoElementMixin()}
        background: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ctitle%3Erow_drag_drop%3C/title%3E%3Cpath d='M12.933 0h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M12.933 29.467h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M12.933 25.2h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M12.933 16.8h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M12.933 12.667h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M12.933 8.4h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M12.933 4.267h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M12.933 21.067h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M16.533 0h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M16.533 29.467h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M16.533 25.2h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M16.533 16.8h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M16.533 12.667h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M16.533 8.4h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M16.533 4.267h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M16.533 21.067h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3C/svg%3E")
            no-repeat;
        background-clip: border-box;
        top: 50%;
        width: 3.2rem;
        height: 3.2rem;
        left: -1rem;
        transition: opacity 0.1s ease-in-out;
        transform: translate(0, -50%) scale(0.6);
        opacity: 0;
      }

      &:hover::after,
      &:active::after {
        opacity: 0.4;
      }

      &:active {
        cursor: grabbing;
        background-color: ${({ theme }) =>
          theme.cmp.table.row.color.background.odd.base};
      }
    `}

  ${({ $expanded = false, theme }) => css`
    transition: border-color ${theme.cmp.collapse.mutation.transitionDuration}
      ease;
    border-bottom: solid ${theme.cmp.collapse.shape.borderSize}
      ${theme.cmp.collapse.color.border[$expanded ? 'expanded' : 'base']};
    min-height: ${theme.cmp.collapse.size.minHeight};
    background-color: ${theme.cmp.collapse.color.background.base};

    ${$expanded &&
    css`
      background-color: ${theme.cmp.collapse.color.background.expanded};
    `}
  `}
`;
