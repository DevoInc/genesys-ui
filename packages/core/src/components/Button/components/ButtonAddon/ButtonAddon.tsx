import * as React from 'react';
import { AllHTMLAttributes } from 'react';

import {
  BUTTON_LOADER_COLOR_SCHEME_MAP,
  BUTTON_LOADER_SIZE_MAP,
} from '../../constants';
import { ButtonState, ButtonColorScheme } from '../../declarations';

import { ButtonDropdownIcon } from '../ButtonDropdownIcon';
import { ButtonIcon } from '../ButtonIcon';
import { ButtonLoader } from '../ButtonLoader';

import { StyledButtonAddon, StyledButtonAddonProps } from './StyledButtonAddon';

export interface ButtonAddonProps<T = Element> extends StyledButtonAddonProps {
  /** Color scheme context */
  colorScheme?: ButtonColorScheme;
  id?: AllHTMLAttributes<T>['id'];
  /** If the button addon icon needs a higher font-weight */
  hasBoldIcon?: boolean;
  /** If the button addon is a loader */
  isLoader?: boolean;
  /** Sets the color scheme according to component state */
  state?: ButtonState;
}

export const ButtonAddon: React.FC<ButtonAddonProps> = ({
  colorScheme = 'neutral',
  hasSpace,
  icon,
  id,
  isDropdown,
  hasBoldIcon,
  isLoader,
  position,
  size = 'md',
  state = 'enabled',
}) => (
  <StyledButtonAddon
    hasSpace={hasSpace}
    id={id ? `button-addon-${id}` : null}
    isDropdown={isDropdown}
    position={position}
    size={size}
  >
    {isLoader ? (
      <ButtonLoader
        colorScheme={BUTTON_LOADER_COLOR_SCHEME_MAP[colorScheme]}
        size={BUTTON_LOADER_SIZE_MAP[size]}
      />
    ) : isDropdown ? (
      <ButtonDropdownIcon size={size} state={state} />
    ) : (
      <ButtonIcon icon={icon} hasBoldIcon={hasBoldIcon} size={size} />
    )}
  </StyledButtonAddon>
);
