import styled, { css } from 'styled-components';

export interface StyledSplitPanelProps {
  vertical?: boolean;
}

export const StyledSplitPanel = styled.div<StyledSplitPanelProps>`
  ${({ vertical = false }) => css`
    position: absolute;
    display: flex;
    flex-direction: ${vertical ? 'column' : 'row'};
    width: 100%;
    height: 100%;
    overflow: hidden;
  `}
`;
