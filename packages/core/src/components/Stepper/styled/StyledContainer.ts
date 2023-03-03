import styled, { css } from 'styled-components';
import { StepperSize } from '../declarations';

interface StyledContainerProps {
  size: StepperSize;
}

export const StyledContainer = styled.ol<StyledContainerProps>`
  ${({ size, theme }) => {
    const borderColor = theme.tokens.cmp.stepper.container.color.border;
    const borderSize = theme.tokens.cmp.stepper.container.shape.borderSize;
    const boxShadow = `inset 0px ${borderSize} 0px ${borderColor},
                       inset 0px -${borderSize} 0px ${borderColor}`;
    return css`
      display: flex;
      align-items: center;
      gap: ${theme.tokens.cmp.stepper.container.space.gap};
      padding: 0 ${theme.tokens.cmp.stepper.container.space.padding};
      background-color: ${theme.tokens.cmp.stepper.container.color.background};
      box-shadow: ${boxShadow};
      height: ${theme.tokens.cmp.stepper.container.size.height[size]};
    `;
  }};
`;
