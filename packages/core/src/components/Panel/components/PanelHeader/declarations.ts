import { BaseSize } from 'packages/core/src/declarations';
import { ButtonProps } from '../../../Button';
import { IconButtonProps } from '../../../IconButton';

export type PanelHeaderActions = (
  | React.ReactElement<ButtonProps>
  | React.ReactElement<IconButtonProps>
)[];

export type PanelHeaderSize = BaseSize;
