import * as React from 'react';
import type {
  GlobalAriaProps,
  GlobalAttrProps,
  GlobalStatus,
  StyledOverloadCssProps,
} from '../../declarations';

export type TModalWindowSize = 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen';

export type TModalStatus = GlobalStatus;

export interface IModal
  extends Pick<GlobalAttrProps, 'id'>,
    Pick<GlobalAriaProps, 'aria-describedby' | 'aria-labelledby'>,
    StyledOverloadCssProps {
  children: React.ReactNode;
  /** Height of the modal */
  height?: React.CSSProperties['height'];
  /** Disabling overlay exit click */
  disableCloseOnOverlayClick?: boolean;
  /** Sets array of buttons displayed on the bottom */
  footerButtons?: React.ReactElement[];
  /** Set window options button (close button excluded) */
  headerActions?: React.ReactElement[];
  /** Manages closing action by pressing close button*/
  onRequestClose?: () => void;
  /** Width of the modal */
  width?: React.CSSProperties['width'];
  /** Set the Window Size between one of the following presets */
  /** Aurea proportion size */
  windowSize?: TModalWindowSize;
  /** Status of the modal */
  status?: GlobalStatus;
  /** z-index of the modal */
  zIndex?: React.CSSProperties['zIndex'];
}
