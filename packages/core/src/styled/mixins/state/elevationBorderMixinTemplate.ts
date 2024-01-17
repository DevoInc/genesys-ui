import { css } from 'styled-components';

export const getTemplate = (
  side: 'top' | 'left' | 'bottom' | 'right',
  width: string,
  color: string,
) => css`border-${side}: ${width} solid ${color};`;
