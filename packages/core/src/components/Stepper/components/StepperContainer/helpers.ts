import { css, DefaultTheme } from 'styled-components';

import type { ILayoutBox } from '../../../../declarations';
import type { TStepperSize } from '../../declarations';
import { getSpacingPropCss } from '../../../../helpers';

export interface IStepperContainerMixin {
  size?: TStepperSize;
  theme: DefaultTheme;
  padding: ILayoutBox['padding'];
}

/**
 * Get the stepper  container custom styles applied to a Flex component.
 *
 * @return object with the css.
 */
export const stepperContainerMixin = ({
  size = 'md',
  padding,
  theme,
}: IStepperContainerMixin) => {
  const tokens = theme.cmp.stepper;
  const borderColor = tokens.container.color.border;
  const borderSize = tokens.container.shape.borderSize;
  const boxShadow = `inset 0px ${borderSize} 0px ${borderColor},
                       inset 0px -${borderSize} 0px ${borderColor}`;
  return css`
    gap: ${tokens.container.space.gap};
    padding: ${padding
      ? getSpacingPropCss(theme)(padding)
      : `0 ${tokens.container.space.padding}`};
    background-color: ${tokens.container.color.background};
    box-shadow: ${boxShadow};
    height: ${tokens.container.size.height[size]};
  `;
};
