import { css, DefaultTheme } from 'styled-components';

import type { ISwitch, TSwitchDiameter } from './declarations';
import { disabledMixin, typoMixin } from '../../styled';

export interface ISwitchControlContainerMixin
  extends Pick<ISwitch, 'checked' | 'disabled' | 'status'> {
  handleDiameter: TSwitchDiameter;
  theme: DefaultTheme;
}

/**
 * Get the SwitchControl container custom styles applied to a Flex component.
 *
 * @return object with the css.
 */
export const switchControlContainerMixin = ({
  checked,
  disabled,
  handleDiameter,
  status,
  theme,
}: ISwitchControlContainerMixin) => {
  const switchTokens = theme.cmp.switchControl;
  const textTokens = switchTokens.text;
  const trackTokens = switchTokens.track;
  const focusBoxShadow = switchTokens.handler.elevation.boxShadow.focused;
  const transitionDuration = trackTokens.mutation.transitionDuration;
  const checkedCss = css`
    background-color: ${trackTokens.color.background.checked[status]};
    color: ${textTokens.color.text.checked[status]};
  `;

  return css`
    transition:
      background-color ${transitionDuration},
      box-shadow ${transitionDuration};
    border-radius: ${handleDiameter}px;
    background: ${trackTokens.color.background.unchecked[status]};
    color: ${textTokens.color.text.unchecked[status]};
    cursor: pointer;

    ${disabled &&
    css`
      ${disabledMixin(theme)}
    `}

    ${checked && checkedCss};

    &:has(:checked) {
      ${checkedCss};
    }

    &:focus-within {
      box-shadow: ${focusBoxShadow};
    }
  `;
};

interface switchControlTextMixinProps {
  theme: DefaultTheme;
}
export const switchControlTextMixin = ({
  theme,
}: switchControlTextMixinProps) => css`
  ${typoMixin({ $bold: true, theme })};
  position: relative;
  display: inline-flex;
  white-space: nowrap;
  user-select: none;
`;
