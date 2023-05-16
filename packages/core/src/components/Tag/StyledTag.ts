import styled, { css } from 'styled-components';
import * as _ from 'lodash';

import { FeedbackColorScheme, FeedbackSize } from '../../declarations';

import { truncateTypoMixin, typoMixin } from '../../styled/mixins/baseMixins';
import { getAccTextColor, isValidColor } from '../../styled/functions';

import { Badge } from '../Badge/';

export interface StyledTagProps {
  /** It defines the color scheme for the background and text color.
   * There are predefined types: primary, secondary... etc.
   * It's possible to use a custom color used for the background color and
   * auto-generated for the text based on this one to maintain AA accessible contrast.*/
  colorScheme?: FeedbackColorScheme;
  /** Defines if the tag content is bold */
  bold?: boolean;
  /** Defines if the tag has background color or use a marker */
  quiet?: boolean;
  /** It Defines if the tag spans the full width of its parent */
  wide?: boolean;
  /** Size to define padding, line-height, font-size... etc. of the Tag. */
  size?: FeedbackSize;
}

export const StyledTag = styled.span<StyledTagProps>`
  ${({ colorScheme = 'neutral', bold, quiet, wide, size = 'md', theme }) => {
    const colorSchemeForTokens = _.camelCase(colorScheme);

    const isBlendColorScheme =
      colorScheme === 'blend-base' || colorScheme === 'blend-inverse';
    const quietColorScheme = isBlendColorScheme ? colorScheme : 'neutral';
    const cmpTokens = theme.cmp.tag;

    const colorBackground = quiet ? 'quiet' : colorSchemeForTokens;
    const colorText = quiet ? quietColorScheme : colorSchemeForTokens;

    const bgColor = isValidColor(colorScheme)
      ? colorScheme
      : cmpTokens.color.background[colorBackground];
    const textColor = isValidColor(colorScheme)
      ? getAccTextColor(colorScheme, '#fff', cmpTokens.color.text.neutral)
      : cmpTokens.color.text[colorText];
    return css`
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      overflow: hidden;
      border-radius: ${cmpTokens.shape.borderRadius};
      max-width: 100%;
      height: ${cmpTokens.size.height[size]};
      padding: 0 ${cmpTokens.space.padding.hor[size]};
      background-color: ${bgColor};
      ${typoMixin({ bold: bold, theme, size })};
      color: ${textColor};

      ${wide &&
      css`
        display: flex;
        flex: 1 1 100%;
      `};
    `;
  }}
`;

export const StyledTagBadge = styled(Badge)`
  ${({ size, theme }) => {
    const cmpTokens = theme.cmp.tag.badge;
    return css`
      margin-right: ${cmpTokens.space.marginRight[size]};
    `;
  }}
`;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledTagIconProps
  extends Pick<StyledTagProps, 'bold' | 'size'> {}

export const StyledTagIcon = styled.i<StyledTagIconProps>`
  ${({ bold, size, theme }) => {
    const cmpTokens = theme.cmp.tag.icon;
    const square = cmpTokens.size.square[size];
    const marginRight = cmpTokens.space.marginRight[size];
    return css`
      position: relative;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      flex: 0 0 auto;
      margin-right: ${marginRight};
      width: ${square};
      height: ${square};
      user-select: none;
      font-weight: ${bold ? 'bold' : ''};
      font-size: ${`calc(${square} - 0.2rem)`};
    `;
  }}
`;

export const StyledTagText = styled.span`
  ${truncateTypoMixin()};
`;
