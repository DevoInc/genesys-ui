import styled, { css } from 'styled-components';
import iconDictionary from '@devoinc/genesys-icons/dist/icon-variables';

import { AllColorScheme, GlobalSize } from '../../declarations';

import { getIconColor, getIconSize } from '../../helpers';

export interface StyledIconProps {
  /** This property defines the icon type */
  iconId?: keyof typeof iconDictionary;
  /** This property defines the custom icon color */
  color?: string;
  /** It defines the color scheme for the icon color. There are predefined types: primary, secondary... etc. auto-generated for the text based on this one to maintain AA accessible contrast.*/
  colorScheme?: AllColorScheme;
  /** This property defines the custom icon font size */
  size?: string | GlobalSize;
  /** If the icon has this property its font-weight changes to bold */
  strong?: boolean;
}

export const StyledIcon = styled.i<StyledIconProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  ${({ color, colorScheme, size, strong, theme }) => {
    return css`
      font-weight: ${strong && 'bold'};
      font-size: ${getIconSize(theme)(size)};
      color: ${getIconColor(theme)({
        color,
        colorScheme,
      })};
    `;
  }}
`;
