import styled, { css } from 'styled-components';
import Split from 'react-split';
import { pseudoElementMixin } from '../../styled';

export const StyledSplitLayout = styled(Split)`
  height: 100%;

  ${({ direction }) =>
    !direction || direction === 'horizontal'
      ? css`
          display: flex;
          flex-direction: row;
        `
      : ''}

  ${({ theme }) => {
    const evalBackgroundSvgColor = theme.alias.color.text.body.base.replace(
      '#',
      '%23',
    );
    return css`
      // gutter
      .gutter {
        position: relative;
        transition: all ease
          ${theme.alias.mutation.transitionDuration.opacity.md};
        background-color: ${theme.alias.color.background.surface.base.raised};
        border-style: solid;
        border-color: ${theme.alias.color.border.separator.base.weak};

        &::after {
          ${pseudoElementMixin()};
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-image: ${`url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='${evalBackgroundSvgColor}' viewBox='0 0 32 32'%3E%3Ctitle%3Erow_drag_drop%3C/title%3E%3Cpath d='M12.933 0h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M12.933 29.467h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M12.933 25.2h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M12.933 16.8h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M12.933 12.667h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M12.933 8.4h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M12.933 4.267h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M12.933 21.067h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M16.533 0h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M16.533 29.467h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M16.533 25.2h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M16.533 16.8h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M16.533 12.667h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M16.533 8.4h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M16.533 4.267h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M16.533 21.067h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3C/svg%3E")`};
          background-repeat: no-repeat;
          background-position: 50%;
          background-size: 220%;
          width: 0.8rem;
          height: 2rem;
        }

        &:hover {
          background-color: ${theme.alias.color.background.surface.base
            .expanded};
          border-color: ${theme.alias.color.border.separator.base.base};
        }

        // gutter horizontal
        &.gutter-horizontal {
          cursor: col-resize;
          border-right-width: ${theme.alias.shape.borderSize.separator.md};
          border-left-width: ${theme.alias.shape.borderSize.separator.md};
        }

        // gutter vertical
        &.gutter-vertical {
          border-top-width: ${theme.alias.shape.borderSize.separator.md};
          border-bottom-width: ${theme.alias.shape.borderSize.separator.md};
          cursor: row-resize;

          &::after {
            transform: translate(-50%, -50%) rotate(90deg);
          }
        }
      }
    `;
  }}
`;
