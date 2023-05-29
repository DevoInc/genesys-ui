import * as React from 'react';
import { ButtonProps } from '../../../Button';
import { IconButtonProps } from '../../../IconButton';
import { PanelSize } from '../../declarations';

export type PanelFooterActionsType = (
  | React.ReactElement<ButtonProps>
  | React.ReactElement<IconButtonProps>
)[];

export type PanelFooterSize = PanelSize;
