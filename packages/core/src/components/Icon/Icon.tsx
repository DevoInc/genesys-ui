import * as React from 'react';
import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledPolymorphicProps,
} from '../../declarations';

import { StyledIcon, StyledIconProps } from './StyledIcon';

export interface IconProps
  extends StyledIconProps,
    //native
    StyledPolymorphicProps,
    GlobalAttrProps,
    GlobalAriaProps {}

export const Icon: React.FC<IconProps> = ({
  color,
  colorScheme,
  iconId,
  size,
  strong,
  ...nativeProps
}) => (
  <StyledIcon
    {...nativeProps}
    aria-hidden
    color={color}
    colorScheme={colorScheme}
    iconId={iconId}
    role="img"
    size={size}
    strong={strong}
  />
);
