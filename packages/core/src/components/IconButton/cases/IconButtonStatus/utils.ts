import { UIColorScheme } from '../../../../declarations';
import { STATUS_ICON_MAP } from '../../../../constants';

export const getIconButtonStatusIcon = (status: UIColorScheme) =>
  STATUS_ICON_MAP.filled[status];
