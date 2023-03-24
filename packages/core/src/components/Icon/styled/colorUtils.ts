import { DefaultTheme } from 'styled-components';

import { GlobalStatus } from '../../../';

export const getColor = ({
  color,
  status,
  theme,
}: {
  color?: string;
  status?: GlobalStatus;
  theme: DefaultTheme;
}) => {
  if (status) return theme.alias.color.text.feedback[status].base;
  if (color) return color;
  return 'inherit';
};
