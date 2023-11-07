import * as React from 'react';
import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../declarations';

import { StyledIcon, StyledIconProps } from './StyledIcon';

export interface IconProps
  extends StyledIconProps,
    //native
    StyledPolymorphicProps,
    StyledOverloadCssProps,
    GlobalAttrProps,
    GlobalAriaProps {}

export const Icon: React.FC<IconProps> = ({
  color,
  colorScheme,
  iconId,
  size,
  strong,
  styles,
  tooltip,
  ...nativeProps
}) => (
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
