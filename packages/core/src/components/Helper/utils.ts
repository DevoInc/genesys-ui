import type { ActiveStatus } from '../../declarations';
import { STATUS_ICON_MAP } from '../../constants';

export const getHelperStatusIcon = (status: ActiveStatus) =>
  STATUS_ICON_MAP.filled[status];
