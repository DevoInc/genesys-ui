import styled, { css } from 'styled-components';
import { camelCase } from 'lodash';

import { TFeedbackColorScheme, TFeedbackSize } from '../../../declarations';

import { typoMixin } from '../../../styled';
import { getAccTextColor, isValidColor } from '../../../helpers';

export interface StyledTagContainerProps {
  /** It defines the color scheme for the background and text color.
   * There are predefined types: primary, secondary... etc.
   * It's possible to use a custom color used for the background color and
   * auto-generated for the text based on this one to maintain AA accessible contrast.*/
  colorScheme?: TFeedbackColorScheme;
  /** Defines if the tag content is bold */
  bold?: boolean;
  /** Defines if the tag has background color or use a marker */
  quiet?: boolean;
  /** It Defines if the tag spans the full width of its parent */
  wide?: boolean;
  /** Size to define padding, line-height, font-size... etc. of the Tag. */
  size?: TFeedbackSize;
}

export const StyledTagContainer = styled.span<StyledTagContainerProps>`
  ${({ colorScheme = 'neutral', bold, quiet, wide, size = 'md', theme }) => {
    const colorSchemeForTokens = camelCase(colorScheme);

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
      padding: ${quiet ? '0' : `0 ${cmpTokens.space.padding.hor[size]}`};
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
