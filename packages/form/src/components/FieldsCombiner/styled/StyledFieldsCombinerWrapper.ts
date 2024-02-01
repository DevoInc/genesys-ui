import styled, { css } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledFieldsCombinerWrapperProps {}

export const StyledFieldsCombinerWrapper = styled.div<StyledFieldsCombinerWrapperProps>`
  ${() => {
  return css`
      display: flex;
      flex-direction: row;
      flex: 1 1 100%;
    `;
}}
`;
