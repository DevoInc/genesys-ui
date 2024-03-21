import { TGlobalStatus, TActiveStatus } from '../declarations';

/**
 * Get the flex styles based in a scheme object.
 */
export const hasStatus = (status: TGlobalStatus): status is TActiveStatus =>
  status && 'base' !== status;
