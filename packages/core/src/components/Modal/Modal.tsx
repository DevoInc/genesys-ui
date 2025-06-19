import * as React from 'react';

import {
  ModalFooter,
  ModalBody,
  ModalHeader,
  ModalPanel,
  type ModalPanelProps,
  ModalIcon,
} from './components';
import type { TGlobalStatus } from '../../declarations/commonProps';
import { ModalBackdrop } from './components/ModalBackdrop';
import { ModalContext } from './context';
import { IModal } from './declarations';

export interface ModalProps
  extends ModalPanelProps,
    Pick<IModal, 'onRequestClose'> {
  /** Function that will be called right after the modal is open */
  onAfterOpen?: () => void;
  /** Manages dialog status **/
  status?: TGlobalStatus;
}

export const InternalModal: React.FC<ModalProps> = ({
  'aria-describedby': ariaDescribedBy,
  'aria-labelledby': ariaLabelledBy,
  children,
  windowSize,
  height,
  width,
  id,
  onRequestClose,
  status = 'base',
  disableCloseOnOverlayClick,
  style,
  zIndex,
  ...dataProps
}) => (
  <ModalBackdrop
    disableCloseOnOverlayClick={disableCloseOnOverlayClick}
    onRequestClose={onRequestClose}
    style={style}
    zIndex={zIndex}
  >
    <ModalPanel
      {...dataProps}
      aria-describedby={ariaDescribedBy}
      aria-labelledby={ariaLabelledBy}
      id={id}
      height={height}
      width={width}
      windowSize={windowSize || 'md'}
      zIndex={zIndex}
      status={status}
    >
      <ModalContext.Provider value={{ onRequestClose, status }}>
        {children}
      </ModalContext.Provider>
    </ModalPanel>
  </ModalBackdrop>
);

export const Modal = InternalModal as typeof InternalModal & {
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
  Header: typeof ModalHeader;
  _Backdrop: typeof ModalBackdrop;
  _Icon: typeof ModalIcon;
  _Panel: typeof ModalPanel;
};

Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Header = ModalHeader;
Modal._Backdrop = ModalBackdrop;
Modal._Icon = ModalIcon;
Modal._Panel = ModalPanel;

InternalModal.displayName = 'Modal';
Modal.Body.displayName = 'Modal.Body';
Modal.Footer.displayName = 'Modal.Footer';
Modal.Header.displayName = 'Modal.Header';
Modal._Backdrop.displayName = 'Modal._Backdrop';
Modal._Icon.displayName = 'Modal._Icon';
Modal._Panel.displayName = 'Modal._Panel';
