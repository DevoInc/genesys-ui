import { css, DefaultTheme } from 'styled-components';

import type { TStepperSize } from '../../declarations';

export interface IStepperContainerMixin {
  size?: TStepperSize;
  theme: DefaultTheme;
}

/**
 * Get the stepper  container custom styles applied to a Flex component.
 *
 * @return object with the css.
 */
export const stepperContainerMixin = ({
  size = 'md',
  theme,
}: IStepperContainerMixin) => {
  const borderColor = theme.cmp.stepper.container.color.border;
  const borderSize = theme.cmp.stepper.container.shape.borderSize;
  const boxShadow = `inset 0px ${borderSize} 0px ${borderColor},
                       inset 0px -${borderSize} 0px ${borderColor}`;
  return css`
    gap: ${theme.cmp.stepper.container.space.gap};
    padding: 0 ${theme.cmp.stepper.container.space.padding};
    background-color: ${theme.cmp.stepper.container.color.background};
    box-shadow: ${boxShadow};
    height: ${theme.cmp.stepper.container.size.height[size]};
  `;
};
