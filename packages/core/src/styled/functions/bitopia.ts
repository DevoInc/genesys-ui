import { css } from 'styled-components';

/**
 * Assign the same styles (code param interpolation) to pseudo classes
 * [pseudo param arr] (:hover, :focus... ) and to react props [props param arr]
 * (props.focused, props.hovered, props.selected... ).
 * @example /components/ListItemWrapper/StyledListItemWrapperContent.js
 */
export const bitopia = (props = [], pseudo = [], code: string) => [
  props.some((x) => !!x) && code,
  css`
    ${pseudo.map((x) => `&:${x}`).join(',')} {
      ${code}
    }
  `,
];
