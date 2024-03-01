import * as React from 'react';
import { useTheme } from 'styled-components';
import { IconContext } from '@devoinc/genesys-icons';

import {
  AllColorScheme,
  GlobalAttrProps,
  GlobalSize,
} from '../../declarations';

import { getIconColor, getIconSize } from '../../helpers';

export interface IconProps extends Pick<GlobalAttrProps, 'tooltip'> {
  children?: React.ReactNode;
  /** This property defines the custom icon color */
  color?: string;
  /** It defines the color scheme for the icon color. There are predefined types: primary, secondary... etc. auto-generated for the text based on this one to maintain AA accessible contrast.*/
  colorScheme?: AllColorScheme;
  /** This property defines the custom icon font size */
  size?: string | GlobalSize;
  /** If the icon has this property its font-weight changes to bold */
  strong?: boolean;
  style?: React.CSSProperties;
}

export const Icon: React.FC<IconProps> = ({
  color,
  colorScheme,
  children,
  size,
  strong,
  style,
  tooltip,
}) => {
  const theme = useTheme();
  return (
    <IconContext.Provider
      value={{
        color: getIconColor(theme)({
          color,
          colorScheme,
        }),
        size: getIconSize(theme)(size),
        title: tooltip,
        style: {
          position: 'relative',
          strokeWidth: strong ? 1 : undefined,
          ...style,
        },
      }}
    >
      {children}
    </IconContext.Provider>
  );
};
