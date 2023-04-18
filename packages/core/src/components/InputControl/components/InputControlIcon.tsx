import * as React from 'react';

import {
  StyledInputControlIcon,
  StyledInputControlIconProps,
  StyledInputControlProps,
} from '../../';

export interface InputControlIconProps
  extends Pick<StyledInputControlProps, 'inputWidth' | 'status'>,
    StyledInputControlIconProps {
  /** Name of the Icon from icon library font */
  icon?: string;
}

export const InputControlIcon: React.FC<InputControlIconProps> = ({
  icon,
  isTypeIcon,
  status,
  size,
}) => (
  <StyledInputControlIcon
    aria-hidden
    className={`gi-${icon}`}
    size={size}
    status={status}
    isTypeIcon={isTypeIcon}
  />
);
