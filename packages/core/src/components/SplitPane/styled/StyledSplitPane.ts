import styled, { css } from 'styled-components';
import type { ISplitter } from '../declarations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledSplitPaneProps extends Pick<ISplitter, 'vertical'> {}

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
