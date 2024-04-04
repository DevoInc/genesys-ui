import { TGlobalStatus, TActiveStatus } from '../declarations';

/**
 * Get if there is a status different from base.
 */
export const hasStatus = (status: TGlobalStatus): status is TActiveStatus =>
  status && 'base' !== status;
