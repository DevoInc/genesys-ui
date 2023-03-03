import styled, { css } from 'styled-components';

// declarations
import { BaseSize, GlobalSize } from '../../../declarations';

// utils
import { PickUnion } from '../../../typeFunctions';

// styled
import { StyledPartitionsWrapper } from './StyledPartitionsWrapper';

export interface StyledPartitionsItemProps {
  /** If there is visual separators between the partition items. */
  hasSeparators?: boolean;
  /** The size of the partition item. */
  size: BaseSize | PickUnion<GlobalSize, 'xs'>;
  /** The title of the partition item rendered when it's hovered. */
  tooltip?: string;
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

  // separators
  ${({ hasSeparators, size }) =>
    hasSeparators &&
    css`
      --margin: ${size === 'lg' ? '.4rem' : size === 'sm' ? '.1rem' : '.2rem'};
      & + & {
        margin-left: var(--margin);
      }
    `};

  // hover on its parent
  ${({ tooltip }) =>
    tooltip &&
    css`
      ${StyledPartitionsWrapper}:hover > & {
        opacity: 0.4;
      }
    `}

  // hover on itself
  &&&:hover {
    opacity: 1;
  }
`;
