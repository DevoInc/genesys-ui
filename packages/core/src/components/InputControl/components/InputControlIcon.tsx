import * as React from 'react';

import iconDictionary from '@devoinc/genesys-icons/dist/icon-variables.js';

import { StyledInputControlIcon, StyledInputControlIconProps } from '../styled';
import { StyledOverloadCssProps } from '../../../declarations';

export interface InputControlIconProps
  extends StyledInputControlIconProps,
    StyledOverloadCssProps {
  /** Name of the Icon from icon library font */
  icon?: keyof typeof iconDictionary;
}

export const InputControlIcon: React.FC<InputControlIconProps> = ({
  icon,
  isTypeIcon,
  status,
  size,
  styles,
}) => (
  <StyledInputControlIcon
    aria-hidden
    className={icon as string}
    size={size}
    status={status}
    isTypeIcon={isTypeIcon}
    css={styles}
  />
);
