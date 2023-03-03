import styled, { css } from 'styled-components';
import { getPxFromRem } from '../../../styled/functions';
import { disabledMixin, FieldSize, FieldStatus } from '../../../';

interface StyledWrapperProps {
  heightProp: number;
  $disabled?: boolean;
  $checked?: boolean;
  handleDiameter: number;
  size: FieldSize;
  status: FieldStatus;
}
export const StyledWrapper = styled.label<StyledWrapperProps>`
  ${({
    $disabled = false,
    heightProp,
    $checked,
    handleDiameter,
    size,
    status,
    theme,
  }) => {
    const switchTokens = theme.tokens.cmp.switchControl;
    const textTokens = switchTokens.text;
    const trackTokens = switchTokens.track;
    const focusBoxShadow = theme.tokens.alias.elevation.boxShadow.base.focused;
    const transitionDuration = trackTokens.mutation.transitionDuration;
    const minWidth = getPxFromRem(trackTokens.size.width[size]);
    const offset = +((heightProp - handleDiameter) / 2).toFixed(2);
    const spaceForHandler = handleDiameter + offset * 2;
    const checkedCss = css`
      background-color: ${trackTokens.color.background.checked[status]};
      color: ${textTokens.color.text.checked[status]};
    `;

    return css`
      position: relative;
      flex-direction: ${$checked ? 'row' : 'row-reverse'};
      align-items: center;
      display: inline-flex;
      transition: background-color ${transitionDuration},
        box-shadow ${transitionDuration};
      border-radius: ${handleDiameter}px;
      height: ${heightProp}px;
      min-width: ${minWidth}px;
      padding: ${$checked
        ? `0 ${spaceForHandler}px 0 0`
        : `0 0 0 ${spaceForHandler}px`};
      background: ${trackTokens.color.background.unchecked[status]};
      color: ${textTokens.color.text.unchecked[status]};
      cursor: pointer;

      ${$disabled &&
      css`
        ${disabledMixin(theme)}
      `}

      ${$checked && checkedCss};

      &:has(:checked) {
        ${checkedCss};
      }

      &:focus-within {
        box-shadow: ${focusBoxShadow};
      }
    `;
  }};
`;
