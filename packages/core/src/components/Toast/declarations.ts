import type { ActiveStatus } from '../../declarations';
import { OmitUnion } from '../../typeFunctions/omitUnion';

export interface ToastAction {
  label: string;
  action: () => void;
}

export type ToastStatus = OmitUnion<ActiveStatus, 'help'>;
