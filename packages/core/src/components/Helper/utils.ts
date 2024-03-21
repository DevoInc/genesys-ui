import type { TActiveStatus } from '../../declarations';
import { STATUS_ICON_MAP } from '../../constants';

export const getHelperStatusIcon = (status: TActiveStatus) =>
  STATUS_ICON_MAP.filled[status];
