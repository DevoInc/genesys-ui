import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { AnimatePresence, motion } from 'framer-motion';

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  IconButtonClose,
  IconButtonGoToDocs,
  IconButtonStatus,
  Modal,
  ModalProps,
} from '..';
import { GIOkSuccessfulCheckFilled } from '@devoinc/genesys-icons';
import { Heading } from '../Typography/components/block';
import { useTheme } from 'styled-components';
import { lorem } from '../../../stories/utils/fillerTexts';
import { useDetectScroll } from '../../hooks';

const meta: Meta<typeof Modal> = {
  title: 'Components/Core/Layout/Modal/Cases',
  component: Modal,
  parameters: {
    controls: false,
  },
  args: {
    status: 'base',
    shouldCloseOnOverlayClick: true,
    windowSize: 'medium',
    zIndex: 100,
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalWithHeaderActions = (props: ModalProps) => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const closeModal = (msg: string) => {
    action(msg);
    setOpen(false);
  };

  return (
    <>
      {isOpen && (
        <Modal
          {...props}
          footerButtons={[
            <Button
              colorScheme={'quiet'}
              key={'cancel'}
              onClick={() => {
                closeModal('cancel');
              }}
            >
              Cancel
            </Button>,
            <Button
              colorScheme={'accent'}
              key={'apply'}
              onClick={() => {
                closeModal('apply');
              }}
            >
              Apply
            </Button>,
          ]}
          onRequestClose={() => closeModal('onRequestClose')}
        >
          Your modal content goes here
        </Modal>
      )}
      <Button onClick={() => setOpen(true)} colorScheme="accent-high">
        Open modal
      </Button>
    </>
  );
};

export const WithHeaderActions: Story = {
  args: {
    headerTitle: 'Modal window',
    headerActions: [
      <IconButton
        key={'back'}
        title={'Back'}
        icon={'to_back'}
        onClick={() => {
          action('back clicked');
        }}
      />,
      <IconButton
        key={'layers'}
        title={'Layers'}
        icon={'auto_layers'}
        onClick={() => {
          action('layers clicked');
        }}
      />,
    ],
  },
  render: (args) => <ModalWithHeaderActions {...args} />,
};

export const Animated: Story = {
  render: () =>
    (() => {
      const [isOpen, setOpen] = React.useState<boolean>(false);
      const onClickCallback = React.useCallback(() => {
        setOpen(true);
      }, []);
      return (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key={'modal'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              exit={{ opacity: 0 }}
              style={{
                zIndex: 100,
              }}
            >
              <Modal onRequestClose={() => setOpen(false)} zIndex={100}>
                Your modal content goes here
              </Modal>
            </motion.div>
          )}
          <Button onClick={onClickCallback} colorScheme="accent-high">
            Open modal
          </Button>
        </AnimatePresence>
      );
    })(),
};

export const Custom: Story = {
  render: () =>
    (() => {
      const { hasScroll, targetElRef } = useDetectScroll();
      const [isOpen, setOpen] = React.useState<boolean>(false);

      const tokens = useTheme();
      const dialogHeaderIconTokens = tokens.cmp.dialog.headerIcon;

      return (
        <>
          {isOpen && (
            <Modal.Container onRequestClose={() => setOpen(false)} zIndex={100}>
              <Modal.Header>
                <Flex alignItems="center" gap="cmp-sm">
                  <GIOkSuccessfulCheckFilled
                    color={dialogHeaderIconTokens.color.background.success}
                  />
                  <Heading size="h4" truncateLine={1}>
                    My custom Modal
                  </Heading>
                </Flex>
                <Flex marginLeft="auto">
                  <ButtonGroup size="md" itemsGap="lg">
                    <IconButtonStatus title="Info" />
                    <IconButtonClose title="Close" />
                  </ButtonGroup>
                </Flex>
              </Modal.Header>
              <Modal.Body modalBodyRef={targetElRef}>{lorem}</Modal.Body>
              <Modal.Footer hasBoxShadow={hasScroll}>
                <Box marginRight="auto">
                  <IconButtonGoToDocs
                    href="https://www.google.com/"
                    title="Go to Docs"
                  />
                </Box>

                <Button colorScheme={'quiet'} key={0}>
                  Cancel
                </Button>
                <Button colorScheme={'accent'} key={1}>
                  Apply
                </Button>
              </Modal.Footer>
            </Modal.Container>
          )}
          <Button onClick={() => setOpen(true)} colorScheme="accent-high">
            Open modal
          </Button>
        </>
      );
    })(),
};
