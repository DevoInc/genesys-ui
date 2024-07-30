import { css, DefaultTheme } from 'styled-components';

import type { ITagGroup, TTagGroupLabelPosition } from './declarations';

export interface ITagGroupLabelMixin extends Pick<ITagGroup, 'size'> {
  labelPosition: TTagGroupLabelPosition;
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
}: ITagGroupLabelMixin) => {
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

export interface TagGroupFlexSpacingMixinProps extends Pick<ITagGroup, 'size'> {
  theme: DefaultTheme;
}

/**
 * Get the specific spacing styles for Flex component when it's used as a TagGroup flex component
 *
 * @return specific styles for Label
 */
export const tagGroupFlexSpacingMixin = ({
  size,
  theme,
}: TagGroupFlexSpacingMixinProps) => {
  const itemTokens = theme.cmp.tagGroup.item;
  return css`
    column-gap: ${itemTokens.space.margin.hor[size]};
    row-gap: ${itemTokens.space.margin.ver[size]};
  `;
};
