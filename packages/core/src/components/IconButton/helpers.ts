import { camelCase } from 'lodash';
import { css } from 'styled-components';

export const hoverOverSurfaceStyles = ({
  theme,
  $state = 'enabled',
  $colorScheme = 'neutral',
}) => {
  const colorSchemeForTokens = camelCase($colorScheme);
  const bgColor =
    theme.cmp.button.color.background[colorSchemeForTokens][$state];
  return css``;
};
