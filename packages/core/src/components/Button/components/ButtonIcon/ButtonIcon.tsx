import * as React from 'react';

import iconDictionary from '@devoinc/genesys-icons/dist/icon-variables';

import { ButtonState } from '../../declarations';

import { StyledButtonIcon, StyledButtonIconProps } from './StyledButtonIcon';
import {
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../../declarations';

export interface ButtonIconProps
  extends StyledButtonIconProps,
    StyledPolymorphicProps,
    StyledOverloadCssProps {
  /** Icon name/id  */
  icon?: keyof typeof iconDictionary;
  /** Sets the color scheme according to component state */
  state?: ButtonState;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  as,
  icon,
  hasBoldIcon,
  size = 'md',
  state = 'enabled',
  styles,
}) => (
  <StyledButtonIcon
    aria-hidden={true}
    as={as}
    className={icon || 'gi-check_thick'}
    css={styles}
    icon={icon}
    hasBoldIcon={hasBoldIcon}
    size={size}
    state={state}
  />
);
