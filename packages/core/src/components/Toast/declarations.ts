import * as React from 'react';
import { OmitUnion } from '../../typeFunctions/omitUnion';
import type { IMouseEventAttrs, TActiveStatus } from '../../declarations';

export interface TToastAction {
  label: string;
  action: () => void;
}

export type TToastStatus = OmitUnion<TActiveStatus, 'help'>;

export interface IToast {
  /** Accent color scheme which applies more prominent styles for background...
   * etc.*/
  accent?: boolean;
  /** Apply action */
  actionApply?: TToastAction;
  /** Reject action */
  actionReject?: TToastAction;
  /** react-toastify's function to close itself */
  closeToast?: () => void;
  /** Header close button tooltip */
  closeTooltip?: string;
  /** Allow collapse notification */
  collapsable?: boolean;
  /** Show notification collapsed or expanded */
  collapsed?: boolean;
  /** Header collapse button tooltip */
  collapseTooltip?: string;
  /** Panel content */
  content?: React.ReactNode;
  /** Header expand button tooltip */
  expandTooltip?: string;
  /** Action of collapse button */
  onCollapse?: IMouseEventAttrs['onClick'];
  /** Show the progress bar if the toast is temporary. */
  showProgressBar?: boolean;
  /** Status of notification */
  status?: TToastStatus;
  /** Notification subtitle */
  subtitle?: string;
  /** Notification title */
  title?: string;
  /** Number of instances for the same notification */
  updates?: number;
}
