import * as React from 'react';

import { ButtonGroup, type ButtonGroupProps } from '../../../ButtonGroup';

export interface StatusMessageButtonsProps extends ButtonGroupProps {}

export const StatusMessageButtons: React.FC<StatusMessageButtonsProps> = ({
  children,
  ...buttonGroupProps
}) => <ButtonGroup {...buttonGroupProps}>{children}</ButtonGroup>;
