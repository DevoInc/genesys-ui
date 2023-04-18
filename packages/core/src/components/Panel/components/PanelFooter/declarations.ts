import { BaseSize } from 'packages/core/src/declarations';
import { ButtonProps } from '../../../Button';
import { IconButtonProps } from '../../../IconButton';

export type PanelFooterActions = (
  | React.ReactElement<ButtonProps>
  | React.ReactElement<IconButtonProps>
)[];

export type PanelFooterSize = BaseSize;
