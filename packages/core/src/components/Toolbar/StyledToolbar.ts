import styled, { css } from 'styled-components';
import { StyledBox, StyledBoxProps } from '../Box/StyledBox';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledToolbar extends Omit<StyledBoxProps, '$display'> {}

export const StyledToolbar = styled(StyledBox)<StyledToolbar>`
  ${({ theme }) => css`
    grid-area: Toolbar;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: ${theme.alias.color.background.surface.base.base};
  `}
`;
