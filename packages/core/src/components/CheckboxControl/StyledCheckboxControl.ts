import styled, { css } from 'styled-components';

import { checkRadioMixin, pseudoElementMixin } from '../../styled/';
import type { ICheckboxControlStyled } from './declarations';

export interface StyledCheckboxControlProps extends ICheckboxControlStyled {}

export const StyledCheckboxControl = styled.input.attrs({
  type: 'checkbox',
})<StyledCheckboxControlProps>`
  ${({
    $checkedIcon,
    $indeterminate = false,
    $size = 'md',
    $status = 'base',
    theme,
  }) => {
    const cmpTokens = theme.cmp.checkboxControl;
    const markerTokens = theme.cmp.checkboxControl.marker;
    const cmpMarkerWidth = markerTokens.size.square[$size];
    const cmpMarkerSVGWidth = '1.2rem';
    const borderRadius = cmpTokens.shape.borderRadius;
    const borderColorChecked = cmpTokens.color.background[$status].checked;
    const transitionDuration = cmpTokens.mutation.transitionDuration;
    const evalBackgroundSvgColor = cmpTokens.color.text[
      $status
    ].checked.replace('#', '%23');
    const evalCheckedIcon =
      $checkedIcon ||
      `url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 32 32'%3E%3Cpath fill='${evalBackgroundSvgColor}' d='M0.606 18.184c-0.375-0.384-0.606-0.909-0.606-1.491 0-1.178 0.956-2.131 2.131-2.131 0 0 0 0 0.003 0v0c0.003 0 0.003 0 0.006 0 0.597 0 1.134 0.247 1.519 0.641v0l7.269 7.475 17.406-17.9c0.387-0.397 0.931-0.647 1.531-0.647 0.578 0 1.103 0.228 1.488 0.603v0c0.4 0.388 0.647 0.928 0.647 1.528 0 0.581-0.231 1.106-0.606 1.491v0h0.003l-18.934 19.469c-0.387 0.4-0.931 0.647-1.531 0.647s-1.144-0.247-1.531-0.647v0l-8.794-9.037z'%3E%3C/path%3E%3C/svg%3E")`;

    return css`
      ${checkRadioMixin({ $size: $size, $status, tokens: cmpTokens })};
      appearance: none;
      margin: 0;
      border-radius: ${borderRadius};

      &::after {
        position: absolute;
        overflow: hidden;
        opacity: 0;
        transition: all ease-in-out ${transitionDuration};

        ${$indeterminate
          ? css`
              content: '';
              width: ${`calc(${cmpMarkerWidth} - 0.8rem)`};
              height: ${markerTokens.size.height.mixed};
              background-color: ${cmpTokens.color.background[$status].enabled};
            `
          : css`
              ${pseudoElementMixin()};
              width: ${cmpMarkerSVGWidth};
              height: ${cmpMarkerSVGWidth};
              background-image: ${evalCheckedIcon};
              background-repeat: no-repeat;
              background-clip: border-box;
              transform: ${$size === 'sm' ? 'scale(0.8)' : null};
              transform-origin: center;
            `}
      }

      &:checked,
      &[aria-checked='mixed'] {
        border-color: ${borderColorChecked};
        background-color: ${borderColorChecked};
      }

      &:checked::after,
      &[aria-checked='mixed']::after {
        opacity: 1;
        transition: all ease-in-out ${transitionDuration};
        border-radius: calc(${borderRadius} / 2);
        width: ${$indeterminate && cmpMarkerWidth};
        background-color: ${$indeterminate &&
        cmpTokens.color.text[$status].checked};
        font-size: ${cmpMarkerWidth};
      }
    `;
  }}
`;
