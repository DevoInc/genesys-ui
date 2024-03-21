import { TUIColorScheme } from '../../../../declarations';
import { STATUS_ICON_MAP } from '../../../../constants';

export const getIconButtonStatusIcon = (status: TUIColorScheme) =>
  STATUS_ICON_MAP.filled[status];
