import * as React from 'react';
import { useTheme } from 'styled-components';

import {
  Box,
  DecoratorBar,
  IconButton,
  IconButtonClose,
  IconButtonGoToDocs,
  Overlay,
} from '../';
import { useContainerDimensions } from '../../hooks';
import {
  StyledModal,
  StyledModalActions,
  StyledModalContent,
  StyledModalFooter,
  StyledModalHeader,
  StyledModalIcon,
} from './styled';
import { statusIconMap } from './icons';
import { Heading } from '../Typography/components/block';
import { updateHasScroll } from './scroll';
import { HeaderAction, WindowSize } from './declarations';
import { ActiveStatus } from '../../declarations';

export interface ModalProps {
  /** Sets array of buttons displayed on the bottom */
  buttons?: React.ReactNode;
  /** Modal content */
  children?: React.ReactNode;
  /** Hide Close Button (Show by default) */
  contentPadding?: string;
  /** Set window options button (close button excluded) */
  headerActions?: HeaderAction[];
  /** Defines the header Title */
  headerTitle?: string;
  /** Define the header Style */
  headerStyle?: 'default' | 'dialog';
  /** Height */
  height?: string;
  /** The title for the docs help link on the footer of the Modal */
  helpTitle?: string;
  /** The URL for the docs help link on the footer of the Modal */
  helpUrl?: string;
  /** Hides close button (x), displayed by default */
  hideCloseButton?: boolean;
  /** Custom id */
  id?: string;
  /** Function that will be called right after the modal is open */
  onAfterOpen?: () => void;
  /** Manages closing action by pressing close button*/
  onRequestClose?: () => void;
  /** Disabling overlay exit click */
  shouldCloseOnOverlayClick?: boolean;
  /** Manages dialog status **/
  status?: ActiveStatus;
  /** Custom size */
  width?: string;
  /** Set the Window Size between one of the following presets */
  /** Aurea proportion size */
  windowSize?: WindowSize;
}

export const Modal: React.FC<ModalProps> = ({
  buttons,
  children,
  contentPadding,
  headerActions,
  headerTitle,
  headerStyle = 'default',
  height,
  helpTitle = 'Go to Docs',
  helpUrl,
  hideCloseButton,
  id,
  onRequestClose,
  status,
  shouldCloseOnOverlayClick = true,
  windowSize = 'medium',
}) => {
  const tokens = useTheme();
  const { setRef: modalContentRef, size: measures } = useContainerDimensions();
  const [hasScroll, setHasScroll] = React.useState(false);
  React.useLayoutEffect(
    () => updateHasScroll(measures, hasScroll, setHasScroll),
    [measures, hasScroll, setHasScroll]
  );

  return (
    // Modal overlay needs a DIV wrapper to set the onClick handler, as Overlay component does
    //    not support it and the DIV allows the overlay to expand over the entire screen.
    <div
      onClick={shouldCloseOnOverlayClick ? () => onRequestClose?.() : undefined}
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 1,
      }}
    >
      <Overlay bgColorScheme={'dark'}>
        <StyledModal id={id} height={height} windowSize={windowSize}>
          <StyledModalHeader hasScroll={hasScroll} status={status}>
            {headerTitle &&
              (headerStyle !== 'dialog' ? (
                <>
                  <DecoratorBar
                    size={tokens.cmp.modal.headerDecoratorBar.size.height}
                  />
                  <Heading size="h4" truncateLine={1}>
                    {headerTitle}
                  </Heading>
                </>
              ) : (
                <>
                  {status && (
                    <StyledModalIcon
                      status={status}
                      className={statusIconMap[status]}
                    />
                  )}
                  <Heading size="h5" truncateLine={1}>
                    {headerTitle}
                  </Heading>
                </>
              ))}
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
          </StyledModalHeader>

          <StyledModalContent
            ref={modalContentRef}
            contentPadding={contentPadding}
            height={height}
            hasScroll={hasScroll}
          >
            {children}
          </StyledModalContent>

          {buttons && (
            <StyledModalFooter hasScroll={hasScroll}>
              {helpUrl && (
                <Box marginRight="auto">
                  <IconButtonGoToDocs href={helpUrl} title={helpTitle} />
                </Box>
              )}
              {buttons}
            </StyledModalFooter>
          )}
        </StyledModal>
      </Overlay>
    </div>
  );
};
