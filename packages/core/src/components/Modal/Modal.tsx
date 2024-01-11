import * as React from 'react';

import {
  Box,
  ButtonGroup,
  Flex,
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

import { useDetectScroll } from '../../hooks';

import type { GlobalStatus } from '../../declarations';
import { StyledOverloadCssPropsWithRecord } from '../../declarations';
import type {
  ModalFooterProps,
  ModalBodyProps,
  ModalHeaderProps,
  ModalContainerProps,
  ModalIconProps,
} from './components';

export interface BaseModalProps
  extends Omit<ModalContainerProps, 'children'>,
    Omit<ModalHeaderProps, 'children' | 'hasBoxShadow'>,
    Omit<ModalIconProps, 'children'>,
    Omit<ModalBodyProps, 'children' | 'hasScroll'>,
    Omit<ModalFooterProps, 'children' | 'hasBoxShadow'> {
  /** Sets array of buttons displayed on the bottom */
  footerButtons?: React.ReactElement[];
  /** Modal content */
  children?: React.ReactNode;
  /** Set window options button (close button excluded) */
  headerActions?: React.ReactElement[];
  /** Defines the header Title content */
  headerTitle?: React.ReactNode;
  /** The tooltip for the Header */
  headerTooltip?: string;
  /** Height */
  height?: string;
  /** The tooltip for the docs help link on the footer of the Modal */
  helpTooltip?: string;
  /** The URL for the docs help link on the footer of the Modal */
  helpUrl?: string;
  /** Function that will be called right after the modal is open */
  onAfterOpen?: () => void;
  /** Manages closing action by pressing close button*/
  onRequestClose?: () => void;
  /** Manages dialog status **/
  status?: GlobalStatus;
  /** Custom size */
  width?: string;
}

export type ModalProps = BaseModalProps &
  StyledOverloadCssPropsWithRecord<'container' | 'header' | 'body' | 'footer'>;

export const InternalModal: React.FC<ModalProps> = ({
  footerButtons,
  children,
  contentPadding,
  headerActions = [],
  headerTitle,
  headerTooltip,
  height,
  width,
  helpTooltip = 'Go to Docs',
  helpUrl,
  id,
  onRequestClose,
  status = 'base',
  windowSize = 'default',
  shouldCloseOnOverlayClick,
  styles,
  subcomponentStyles,
  zIndex,
}) => {
  const { hasScroll, targetElRef } = useDetectScroll();

  return (
    <ModalContainer
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      id={id}
      height={height}
      width={width}
      windowSize={windowSize}
      onRequestClose={onRequestClose}
      zIndex={zIndex}
      status={status}
      styles={subcomponentStyles?.container || styles}
    >
      <ModalHeader
        hasBoxShadow={hasScroll}
        status={status}
        styles={subcomponentStyles?.header}
      >
        {headerTitle && (
          <Flex alignItems="inherit">
            <ModalIcon status={status} />
            <Heading
              size={status === 'base' ? 'h4' : 'h5'}
              truncateLine={1}
              tooltip={
                headerTooltip ||
                (typeof headerTitle === 'string' ? headerTitle : null)
              }
            >
              {headerTitle}
            </Heading>
          </Flex>
        )}

        <Flex marginLeft="auto">
          <ButtonGroup size="sm">
            {[
              ...headerActions,
              <IconButtonClose
                size="md"
                key="close"
                onClick={onRequestClose}
                tooltip="Close"
              />,
            ]}
          </ButtonGroup>
        </Flex>
      </ModalHeader>

      <ModalBody
        modalBodyRef={targetElRef}
        contentPadding={contentPadding}
        hasScroll={hasScroll}
        styles={subcomponentStyles?.body}
      >
        {children}
      </ModalBody>

      {footerButtons && (
        <ModalFooter
          hasBoxShadow={hasScroll}
          status={status}
          styles={subcomponentStyles?.footer}
        >
          {helpUrl && (
            <Box marginRight="auto">
              <IconButtonGoToDocs href={helpUrl} tooltip={helpTooltip} />
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
