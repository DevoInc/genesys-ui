import * as React from 'react';
import { useTheme } from 'styled-components';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { AnimatePresence, motion } from 'framer-motion';

import { useDetectScroll } from '../../hooks';

import {
  GIAutoLayers,
  GICheckOkRoundedFilled,
  GIToBack,
} from '@devoinc/genesys-icons';
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
  Typography,
} from '..';

import { ModalDemoContent } from './__stories__/components';

const meta: Meta<typeof Modal> = {
  title: 'Components/Layout/Modal/Cases',
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

const ModalWithButtons = (props: ModalProps) => {
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
          {ModalDemoContent}
        </Modal>
      )}
      <Button onClick={() => setOpen(true)} colorScheme="accent-high">
        Open modal
      </Button>
    </>
  );
};

export const WithButtons: Story = {
  args: {
    headerTitle: 'Modal window',
  },
  render: (args) => <ModalWithButtons {...args} />,
};

export const WithActions: Story = {
  args: {
    headerTitle: 'Modal window',
    headerActions: [
      <IconButton
        key={'back'}
        tooltip={'Back'}
        icon={<GIToBack />}
        onClick={() => {
          action('back clicked');
        }}
      />,
      <IconButton
        key={'layers'}
        tooltip={'Layers'}
        icon={<GIAutoLayers />}
        onClick={() => {
          action('layers clicked');
        }}
      />,
    ],
  },
  render: (args) => <ModalWithButtons {...args} />,
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
              <Modal
                headerTitle="Animated modal"
                onRequestClose={() => setOpen(false)}
                zIndex={100}
              >
                {ModalDemoContent}
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
                  <GICheckOkRoundedFilled
                    size={22}
                    color={dialogHeaderIconTokens.color.background.success}
                  />
                  <Typography.Heading size="h4" truncateLine={1}>
                    My custom Modal
                  </Typography.Heading>
                </Flex>
                <Flex marginLeft="auto">
                  <ButtonGroup size="md" gap="lg">
                    <IconButtonStatus tooltip="Info" />
                    <IconButtonClose tooltip="Close" />
                  </ButtonGroup>
                </Flex>
              </Modal.Header>
              <Modal.Body modalBodyRef={targetElRef}>
                {ModalDemoContent}
              </Modal.Body>
              <Modal.Footer hasBoxShadow={hasScroll}>
                <Box marginRight="auto">
                  <IconButtonGoToDocs
                    href="https://www.google.com/"
                    tooltip="Go to Docs"
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
