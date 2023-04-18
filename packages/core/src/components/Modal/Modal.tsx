import * as React from 'react';

import {
  Box,
  ButtonGroup,
  Flex,
  IconButton,
  IconButtonClose,
  IconButtonGoToDocs,
} from '../';
import { Heading } from '../Typography/components/block';
import {
  ModalFooter,
  ModalBody,
  ModalHeader,
  ModalContainer,
  ModalIcon,
} from './components';

import type { GlobalStatus } from '../../declarations';
import type {
  ModalFooterProps,
  ModalBodyProps,
  ModalHeaderProps,
  ModalContainerProps,
  ModalIconProps,
} from './components';
import { useDetectScroll } from '../../hooks';

export interface ModalProps
  extends Omit<ModalContainerProps, 'children'>,
    Omit<ModalHeaderProps, 'children' | 'hasScroll'>,
    Omit<ModalIconProps, 'children' | 'hasScroll'>,
    Omit<ModalBodyProps, 'children' | 'hasScroll'>,
    Omit<ModalFooterProps, 'children' | 'hasScroll'> {
  /** Sets array of buttons displayed on the bottom */
  footerButtons?: React.ReactElement[];
  /** Modal content */
  children?: React.ReactNode;
  /** Set window options button (close button excluded) */
  headerActions?: React.ReactElement[];
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
  footerButtons,
  children,
  contentPadding,
  headerActions = [],
  headerTitle,
  height,
  helpTitle = 'Go to Docs',
  helpUrl,
  hideCloseButton,
  id,
  onRequestClose,
  status = 'base',
  windowSize = 'medium',
  shouldCloseOnOverlayClick,
  zIndex = 1,
}) => {
  const { hasScroll, targetElRef } = useDetectScroll();

  const actions = React.useMemo<React.ReactElement[]>(() => {
    return hideCloseButton
      ? headerActions
      : headerActions.concat([
          <IconButtonClose
            size="md"
            key="close"
            onClick={onRequestClose}
            title="Close"
          />,
        ]);
  }, [headerActions, hideCloseButton, onRequestClose]);

  return (
    <ModalContainer
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      id={id}
      height={height}
      windowSize={windowSize}
      onRequestClose={onRequestClose}
      zIndex={zIndex}
    >
      <ModalHeader hasBoxShadow={hasScroll} status={status}>
        {headerTitle && (
          <Flex alignItems="inherit">
            <ModalIcon status={status} />
            <Heading size={status === 'base' ? 'h4' : 'h5'} truncateLine={1}>
              {headerTitle}
            </Heading>
          </Flex>
        )}

        {actions && (
          <Flex marginLeft="auto">
            <ButtonGroup size="sm" itemsGap="lg">
              {actions}
            </ButtonGroup>
          </Flex>
        )}
      </ModalHeader>

      <ModalBody
        modalBodyRef={targetElRef}
        contentPadding={contentPadding}
        hasScroll={hasScroll}
      >
        {children}
      </ModalBody>

      {footerButtons && (
        <ModalFooter hasBoxShadow={hasScroll}>
          {helpUrl && (
            <Box marginRight="auto">
              <IconButtonGoToDocs href={helpUrl} title={helpTitle} />
            </Box>
          )}
          {footerButtons}
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
};

Modal.Container = ModalContainer;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
