import { css } from 'styled-components';
import { getSpacingPropCss } from '../../../helpers';

export const formGroupSpacingMixin = (theme) => css`
  margin-top: ${getSpacingPropCss(theme)('cmp-xs')};
`;
