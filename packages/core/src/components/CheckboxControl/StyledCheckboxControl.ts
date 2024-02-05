import styled, { css } from 'styled-components';
import icons from '@devoinc/genesys-icons/dist/icon-variables';

import { FieldSize, FieldStatus } from '../../';

import {
  checkRadioMixin,
  getCheckRadioTokens,
  iconFontMixin,
} from '../../styled/';

export interface StyledCheckboxControlProps {
  /** Icon inside the checkbox when it's selected */
  checkedIcon?: string;
  /** If the checkbox has indeterminate format and state: instead of a check mark, it contains an intermediate one.*/
  indeterminate?: HTMLInputElement['indeterminate'];
  /** The size for the checkbox. It affects to its width, height, font-size... etc. */
  $size?: FieldSize;
  /** The status for the checkbox: success, error... etc. */
  status?: FieldStatus;
}

export const StyledCheckboxControl = styled.input.attrs({
  type: 'checkbox',
})<StyledCheckboxControlProps>`
  ${({
    checkedIcon,
    disabled = false,
    indeterminate = false,
    $size = 'md',
    status = 'base',
    theme,
  }) => {
    const cmpTokens = theme.cmp.checkbox;
    const controlTokens = cmpTokens.control;
    const markerTokens = cmpTokens.controlMarker;
    const cmpMarkerWidth = markerTokens.size.square[$size];
    const checkRadioTokens = getCheckRadioTokens({ status, theme });
    const evalCheckedIcon = icons[checkedIcon] || icons.check_thick;

    return css`
      ${checkRadioMixin({ disabled, size: $size, status, theme })};
      appearance: none;
      margin: 0;
      border-radius: ${controlTokens.shape.borderRadius};

      &::after {
        position: absolute;
        overflow: hidden;
        opacity: 0;
        transition: all ease-in-out ${checkRadioTokens.animationTime};

        ${indeterminate
          ? css`
              content: '';
              width: ${`calc(${cmpMarkerWidth} - 0.8rem)`};
              height: ${markerTokens.size.height.mixed};
              background-color: ${checkRadioTokens.bgColor};
            `
          : css`
              ${iconFontMixin()};
              content: '${evalCheckedIcon}';
              font-size: ${cmpMarkerWidth};
              color: ${checkRadioTokens.textColor};
              transform: scale(0.5);
              transform-origin: center;
            `}
      }

      &:checked,
      &[aria-checked='mixed'] {
        border-color: ${checkRadioTokens.borderColorChecked};
        background-color: ${checkRadioTokens.bgColorChecked};
      }

      &:checked::after,
      &[aria-checked='mixed']::after {
        opacity: 1;
        transform: ${!indeterminate && 'scale(1, 1.1)'};
        transition: all ease-in-out ${checkRadioTokens.animationTime};
        border-radius: calc(${controlTokens.shape.borderRadius} / 2);
        width: ${indeterminate && cmpMarkerWidth};
        background-color: ${indeterminate && checkRadioTokens.textColor};
        font-size: ${cmpMarkerWidth};
      }
    `;
  }}
`;
