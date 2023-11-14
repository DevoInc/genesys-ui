import * as React from 'react';
import { useTheme } from 'styled-components';
import { IconContext } from '@devoinc/genesys-icons';

import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../declarations';

import { getIconColor, getIconSize } from '../../helpers';

import { StyledIcon, StyledIconProps } from './StyledIcon';

export interface IconProps
  extends StyledIconProps,
    //native
    StyledPolymorphicProps,
    StyledOverloadCssProps,
    GlobalAttrProps,
    GlobalAriaProps {
  children?: React.ReactNode;
}

export const Icon: React.FC<IconProps> = ({
  children,
  color,
  colorScheme,
  iconId,
  size,
  strong,
  styles,
  tooltip,
  ...nativeProps
}) => {
  const theme = useTheme();
  return children ? (
    <IconContext.Provider
      value={{
        color: getIconColor(theme)({
          color,
          colorScheme,
        }),
        size: getIconSize(theme)(size),
        title: tooltip,
      }}
    >
      {children}
    </IconContext.Provider>
  ) : (
    <StyledIcon
      {...nativeProps}
      aria-hidden
      color={color}
      css={styles}
      colorScheme={colorScheme}
      className={iconId}
      role="img"
      size={size}
      strong={strong}
      title={tooltip}
    />
  );
};
