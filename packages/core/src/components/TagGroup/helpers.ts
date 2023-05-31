import { css, DefaultTheme } from 'styled-components';

import { LabelPosition } from './declarations';
import { StyledTagContainerProps } from '../Tag/components/StyledTagContainer';

export interface TagGroupLabelMixinProps
  extends Pick<StyledTagContainerProps, 'size'> {
  labelPosition: LabelPosition;
  theme: DefaultTheme;
}

/**
 * Get the specific styles for Label component when it's used as a TagGroup label component
 *
 * @return specific styles for Label
 */

export const tagGroupLabelMixin = ({
  labelPosition,
  size,
  theme,
}: TagGroupLabelMixinProps) => {
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
};
