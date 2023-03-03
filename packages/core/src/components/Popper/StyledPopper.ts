import styled, { css } from 'styled-components';

export interface StyledPopperProps {
  hiddenTrigger?: boolean;
  /** Custom zIndex of the Popper. */
  zIndex?: React.CSSProperties['zIndex'];
}

export const StyledPopper = styled.div<StyledPopperProps>`
  ${({ hiddenTrigger, theme, zIndex }) => css`
    z-index: ${zIndex ?? theme.tokens.alias.elevation.zIndex.depth.activated};
    display: ${hiddenTrigger ? 'none' : 'inline-block'};
  `};
`;
