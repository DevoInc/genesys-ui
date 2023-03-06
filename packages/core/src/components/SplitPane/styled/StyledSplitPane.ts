import styled, { css } from 'styled-components';

export interface StyledSplitPaneProps {
  vertical?: boolean;
}

export const StyledSplitPane = styled.div<StyledSplitPaneProps>`
  ${({ vertical = false }) => css`
    position: absolute;
    display: flex;
    flex-direction: ${vertical ? 'column' : 'row'};
    width: 100%;
    height: 100%;
    overflow: hidden;
  `}
`;
