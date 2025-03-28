import * as React from 'react';
import { useTheme } from 'styled-components';
import { IconContext } from '@devoinc/genesys-icons';

import type { TAllColorScheme, IGlobalAttrs } from '../../declarations';
import type { TIconSize } from './declarations';

import { getIconColor, getIconSize } from '../../helpers';

export interface IconProps extends Pick<IGlobalAttrs, 'tooltip'> {
  children?: React.ReactNode;
  /** This property defines the custom icon color */
  color?: string;
  /** It defines the color scheme for the icon color. There are predefined
   * types: primary, secondary... etc. auto-generated for the text based on this
   * one to maintain AA accessible contrast.*/
  colorScheme?: TAllColorScheme;
  /** This property defines the custom icon font size */
  size?: TIconSize;
  /** If the icon has this property its font-weight changes to bold */
  strong?: boolean;
  /** Sometimes you don't want to create an extra component just to apply a bit
   * of styling. The styles prop is a convenient way to iterate on your
   * components without settling on fixed component boundaries yet. */
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

Icon.displayName = 'Icon';
