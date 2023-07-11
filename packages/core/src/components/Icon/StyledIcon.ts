import styled, { css } from 'styled-components';
import iconDictionary from '@devoinc/genesys-icons/dist/icon-variables.js';

import { AllColorScheme, GlobalSize } from '../../declarations';

import { getColor } from './helpers';

export interface StyledIconProps {
  /** This property defines the icon type */
  iconId: keyof typeof iconDictionary;
  /** This property defines the custom icon color */
  color?: string;
  /** It defines the color scheme for the icon color. There are predefined types: primary, secondary... etc. auto-generated for the text based on this one to maintain AA accessible contrast.*/
  colorScheme?: AllColorScheme;
  /** This property defines the custom icon font size */
  size?: string | GlobalSize;
  /** If the icon has this property its font-weight changes to bold */
  strong?: boolean;
}

export const StyledIcon = styled.i.attrs(
  ({ iconId }: Pick<StyledIconProps, 'iconId'>) => ({
    className: iconId as string,
  })
)<StyledIconProps>`
  ${({ color, colorScheme, size, strong, theme }) => {
    const sizeTokens = theme.alias.size.square.icon.base;
    const sizeEval = (size && sizeTokens[size]) || size;
    return css`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-weight: ${strong && 'bold'};
      font-size: ${sizeEval};
      color: ${getColor({
        color,
        colorScheme,
        theme,
      })};
    `;
  }}
`;
