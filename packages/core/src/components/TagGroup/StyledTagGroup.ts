import styled, { css } from 'styled-components';

import { LabelPosition } from './declarations';
import { StyledTagContainerProps } from '../Tag/components/StyledTagContainer';

export interface StyledTagGroupProps {
  /** Position of the label text relative to the tags */
  labelPosition?: LabelPosition;
}

export const StyledTagGroup = styled.div<StyledTagGroupProps>`
  ${({ labelPosition }) => css`
    display: inline-flex;
    flex-direction: ${labelPosition === 'left' ? 'row' : 'column'};
    align-items: ${labelPosition === 'left' ? 'center' : null};
  `}
`;

export interface StyledTagGroupLabelProps
  extends Pick<StyledTagContainerProps, 'size'> {
  /** Position of the label text relative to the tags */
  labelPosition: LabelPosition;
}

export const StyledTagGroupLabel = styled.div<StyledTagGroupLabelProps>`
  ${({ labelPosition, size, theme }) => {
    const tokens = theme.cmp.tagGroup.label;
    return css`
      display: flex;
      align-items: center;
      flex-shrink: 0;
      ${labelPosition === 'left'
        ? css`
            margin-right: ${tokens.space.marginRight};
          `
        : css`
            margin-bottom: ${tokens.space.marginBottom[size]};
          `};
    `;
  }}
`;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledTagGroupListProps
  extends Pick<StyledTagContainerProps, 'size'> {}

export const StyledTagGroupList = styled.div<StyledTagGroupListProps>`
  ${({ size, theme }) => {
    const tokens = theme.cmp.tagGroup.item;
    return css`
      display: inline-flex;
      align-items: center;
      flex-wrap: wrap;
      row-gap: ${tokens.space.margin.ver[size]};
      column-gap: ${tokens.space.margin.hor[size]};
    `;
  }}
`;
