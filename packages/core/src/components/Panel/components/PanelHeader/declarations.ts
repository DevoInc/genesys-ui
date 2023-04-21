import { ButtonProps } from '../../../Button';
import { IconButtonProps } from '../../../IconButton';
import { PanelSize } from '../../declarations';

export type PanelHeaderActions = (
  | React.ReactElement<ButtonProps>
  | React.ReactElement<IconButtonProps>
)[];

export type PanelHeaderSize = PanelSize;
