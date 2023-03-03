import * as React from 'react';
import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledPolymorphicProps,
} from '../../declarations';

import { StyledIcon, StyledIconProps } from './styled';

export interface IconProps
  extends StyledIconProps,
    //native
    StyledPolymorphicProps,
    GlobalAttrProps,
    GlobalAriaProps {}

export const Icon: React.FC<IconProps> = ({
  color,
  iconId,
  size,
  status = 'base',
  strong,
  ...nativeProps
}) => (
  <StyledIcon
    {...nativeProps}
    aria-hidden
    color={color}
    iconId={iconId}
    role="img"
    size={size}
    status={status}
    strong={strong}
  />
);
