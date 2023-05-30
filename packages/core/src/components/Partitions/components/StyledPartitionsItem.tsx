import styled, { css } from 'styled-components';

import { BaseSize } from '../../../declarations';

export interface StyledPartitionsItemProps {
  /** The size of the partition item. */
  size: BaseSize;
  /** The background color of the partition item. */
  $color?: string;
  /** The width in percentage [0-1]. The sum of all item widths must be one. */
  $width?: number;
}

export const StyledPartitionsItem = styled.li<StyledPartitionsItemProps>`
  transition: all 0.15s ease;
  background-color: ${({ $color }) => $color};
  width: ${({ $width }) => ($width ? $width * 100 + '%' : '10%')};
  position: relative;
  height: 100%;
  cursor: help;

  // hover on its parent
  ${({ title }) =>
    title &&
    css`
      *:hover > & {
        opacity: 0.4;
      }
    `}

  // hover on itself
  &&&:hover {
    opacity: 1;
  }
`;
