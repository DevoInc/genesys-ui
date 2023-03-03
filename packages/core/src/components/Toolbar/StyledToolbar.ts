import styled, { css } from 'styled-components';
import { Box, BoxProps } from '../Box';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledToolbar extends BoxProps {}

export const StyledToolbar = styled(Box)<StyledToolbar>`
  ${({ theme }) => css`
    grid-area: Toolbar;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: ${theme.tokens.alias.color.background.surface.base.base};
  `}
`;
