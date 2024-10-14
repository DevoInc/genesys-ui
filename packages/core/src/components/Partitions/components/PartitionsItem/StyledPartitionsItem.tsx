import styled, { css } from 'styled-components';
import { camelCase } from 'lodash';

import type { IPartitionsItem, TPartitionsSize } from '../../declarations';
import { isValidColor } from '../../../../helpers';

export interface StyledPartitionsItemProps {
  /** The size of the partition item. */
  $size: TPartitionsSize;
  /** The background color of the partition item. */
  $color?: IPartitionsItem['color'];
  /** The width in percentage [0-1]. The sum of all item widths must be one. */
  $width?: IPartitionsItem['width'];
}

export const StyledPartitionsItem = styled.li<StyledPartitionsItemProps>`
  transition: all 0.15s ease;
  background-color: ${({ $color, theme }) => {
    const colorSchemeForTokens = camelCase($color);
    return isValidColor($color)
      ? $color
      : theme.cmp.partitions.color.background[colorSchemeForTokens];
  }};
  width: ${({ $width }) => ($width ? $width * 100 + '%' : '10%')};
  position: relative;
  height: 100%;
  cursor: help;

  // hover on its parent
  ${({ title }) =>
    title &&
    css`
      *:hover > & {
        opacity: ${({ theme }) => theme.cmp.partitions.shape.opacity.hovered};
      }
    `}

  // hover on itself
  &&&:hover {
    opacity: ${({ theme }) => theme.cmp.partitions.shape.opacity.base};
  }
`;
