import styled, { css } from 'styled-components';

export interface StyledOptionsRendererWrapperProps {
  $width?: number;
  $ellipsisMarkerWidth?: number;
}

export const StyledOptionsRendererWrapper = styled.div<StyledOptionsRendererWrapperProps>`
  ${({ $ellipsisMarkerWidth, $width }) => css`
    --can-scroll: 0; /* initial = false */
    animation: detect-scroll;
    animation-timeline: scroll(x self);
    transition: flex ease-in-out 0.15s;

    position: relative;
    display: flex;
    overflow-x: auto;
    flex: 0 0
      calc(
        ${`${$width}px`} - ${`${$ellipsisMarkerWidth}px`} * var(--can-scroll)
      );

    td:hover & {
      flex: 0 0 ${`${$width}px`};
    }

    &::-webkit-scrollbar {
      display: none;
    }

    &::after {
      //content: '...';
      opacity: calc(1 * var(--can-scroll));
      position: sticky;
      background-color: #fff;
      right: 0;
      top: 0;
      padding: 0 6px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @keyframes detect-scroll {
      from,
      to {
        --can-scroll: 1; /* space = true */
      }
    }
  `}
`;
