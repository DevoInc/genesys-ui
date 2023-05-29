import * as React from 'react';
import { ButtonProps } from '../../../Button';
import { IconButtonProps } from '../../../IconButton';
import { PanelSize } from '../../declarations';

export type PanelHeaderActionsType = (
  | React.ReactElement<ButtonProps>
  | React.ReactElement<IconButtonProps>
)[];

export type PanelHeaderSize = PanelSize;
