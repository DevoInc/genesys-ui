import * as React from 'react';

import { StyledInputControlIcon, StyledInputControlIconProps } from '../styled';
import { StyledOverloadCssProps } from '../../../declarations';

export interface InputControlIconProps
  extends StyledInputControlIconProps,
    StyledOverloadCssProps {
  /** Name of the Icon from icon library font */
  icon?: string;
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
    className={`gi-${icon}`}
    size={size}
    status={status}
    isTypeIcon={isTypeIcon}
    css={styles}
  />
);
