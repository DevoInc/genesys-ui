import * as React from 'react';

import { Button, type ButtonContainerProps } from '../../../Button';

export interface IconButtonContainerProps
  extends Omit<ButtonContainerProps, 'squared'> {}

export const IconButtonContainer: React.FC<IconButtonContainerProps> = (
  buttonContainerProps,
) => <Button._Container {...buttonContainerProps} squared />;
