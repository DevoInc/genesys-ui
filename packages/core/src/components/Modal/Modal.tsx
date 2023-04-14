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
import { useDetectBodyScroll } from './hooks';

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
  const { hasScroll, targetElRef } = useDetectBodyScroll();

  const actions = React.useMemo(() => {
    return [
      ...(headerActions
        ? headerActions.map((el) => (
            <IconButton
              key={el.icon}
              title={el.tooltip}
              icon={el.icon}
              onClick={el.onClick}
            />
          ))
        : []),
      ...(!hideCloseButton
        ? [
            <IconButtonClose
              size="md"
              key="close"
              onClick={onRequestClose}
              title="Close"
            />,
          ]
        : []),
    ];
  }, [headerActions, hideCloseButton, onRequestClose]);

  return (
    <ModalContainer id={id} height={height} windowSize={windowSize}>
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
