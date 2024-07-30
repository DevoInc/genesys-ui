import { css, DefaultTheme } from 'styled-components';

import { getSpacingPropCss } from '../../helpers';

export const formGroupSpacingMixin = (theme: DefaultTheme) => css`
  margin-top: ${getSpacingPropCss(theme)('cmp-xs')};
`;
