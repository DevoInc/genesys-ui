import * as React from 'react';

import { Box, IconButton, IconButtonClose, IconButtonGoToDocs } from '../';
import { StyledModalActions } from './styled';
import { Heading } from '../Typography/components/block';
import {
  ModalFooter,
  ModalBody,
  ModalHeader,
  ModalContainer,
  ModalIcon,
} from './subcomponents';

import type { HeaderAction } from './declarations';
import type { GlobalStatus } from '../../declarations';
import type {
  ModalFooterProps,
  ModalBodyProps,
  ModalHeaderProps,
  ModalContainerProps,
  ModalIconProps,
} from './subcomponents';
import { useDetectScroll } from '../../hooks';

export interface ModalProps
  extends Omit<ModalContainerProps, 'children'>,
    Omit<ModalHeaderProps, 'children' | 'hasScroll'>,
    Omit<ModalIconProps, 'children' | 'hasScroll'>,
    Omit<ModalBodyProps, 'children' | 'hasScroll'>,
    Omit<ModalFooterProps, 'children' | 'hasScroll'> {
  /** Sets array of buttons displayed on the bottom */
  buttons?: React.ReactNode;
  /** Modal content */
  children?: React.ReactNode;
  /** Set window options button (close button excluded) */
  headerActions?: HeaderAction[];
  /** Defines the header Title */
  headerTitle?: string;
  /** Height */
  height?: string;
  /** The title for the docs help link on the footer of the Modal */
  helpTitle?: string;
  /** The URL for the docs help link on the footer of the Modal */
  helpUrl?: string;
  /** Hides close button (x), displayed by default */
  hideCloseButton?: boolean;
  /** Function that will be called right after the modal is open */
  onAfterOpen?: () => void;
  /** Manages closing action by pressing close button*/
  onRequestClose?: () => void;
  /** Manages dialog status **/
  status?: GlobalStatus;
  /** Custom size */
  width?: string;
}

export const InternalModal: React.FC<ModalProps> = ({
  buttons,
  children,
  contentPadding,
  headerActions,
  headerTitle,
  height,
  helpTitle = 'Go to Docs',
  helpUrl,
  hideCloseButton,
  id,
  onRequestClose,
  status = 'base',
  windowSize = 'medium',
}) => {
  const { hasScroll, targetElRef } = useDetectScroll();

  return (
    <ModalContainer id={id} height={height} windowSize={windowSize}>
      <ModalHeader hasBoxShadow={hasScroll} status={status}>
        {headerTitle && (
          <>
            <ModalIcon status={status} />
            <Heading size={status === 'base' ? 'h4' : 'h5'} truncateLine={1}>
              {headerTitle}
            </Heading>
          </>
        )}
        <StyledModalActions>
          {headerActions &&
            headerActions.map((el, idx) => (
              <li key={idx}>
                <IconButton
                  size="sm"
                  title={el.tooltip}
                  icon={el.icon}
                  onClick={el.onClick}
                />
              </li>
            ))}
          {!hideCloseButton && (
            <li>
              <IconButtonClose onClick={onRequestClose} title="Close" />
            </li>
          )}
        </StyledModalActions>
      </ModalHeader>

      <ModalBody
        modalBodyRef={targetElRef}
        contentPadding={contentPadding}
        height={height}
        hasScroll={hasScroll}
      >
        {children}
      </ModalBody>

      {buttons && (
        <ModalFooter hasBoxShadow={hasScroll}>
          {helpUrl && (
            <Box marginRight="auto">
              <IconButtonGoToDocs href={helpUrl} title={helpTitle} />
            </Box>
          )}
          {buttons}
        </ModalFooter>
      )}
    </ModalContainer>
  );
};

export const Modal = InternalModal as typeof InternalModal & {
  Container: typeof ModalContainer;
  Header: typeof ModalHeader;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
  Icon: typeof ModalIcon;
};

Modal.Container = ModalContainer;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Icon = ModalIcon;
