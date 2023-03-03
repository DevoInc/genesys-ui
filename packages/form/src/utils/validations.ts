import { GlobalStatus, ActiveStatus } from '@devoinc/genesys-ui';

/**
 * Get the flex styles based in a scheme object.
 */
export const hasStatus = (status: GlobalStatus): status is ActiveStatus =>
  status && 'base' !== status;
