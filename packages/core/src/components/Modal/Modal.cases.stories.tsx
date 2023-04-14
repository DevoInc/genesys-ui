import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { AnimatePresence, motion } from 'framer-motion';

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  IconButtonClose,
  IconButtonGoToDocs,
  IconButtonStatus,
  Modal,
  useDetectBodyScroll,
} from '..';
import { GIOkSuccessfulCheckFilled } from '@devoinc/genesys-icons';
import { Heading } from '../Typography/components/block';
import { useTheme } from 'styled-components';
import { lorem } from '../../../stories/utils/fillerTexts';

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
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const WithHeaderActions: Story = {
  args: {
    headerTitle: 'Modal window',
    headerActions: [
      {
        icon: 'to_back',
        onClick: () => action('clicked'),
        tooltip: 'Back',
      },
      {
        icon: 'auto_layers',
        onClick: () => action('clicked'),
        tooltip: 'Layers',
      },
    ],
  },
  render: (args) =>
    ((args) => {
      const [isOpen, setOpen] = React.useState<boolean>(false);
      const closeModal = (msg: string) => {
        action(msg);
        setOpen(false);
      };

      return (
        <>
          {isOpen && (
            <Modal
              {...args}
              buttons={
                <>
                  <Button
                    colorScheme={'quiet'}
                    key={0}
                    onClick={() => closeModal('cancel')}
                  >
                    Cancel
                  </Button>
                  <Button
                    colorScheme={'accent'}
                    key={1}
                    onClick={() => closeModal('apply')}
                  >
                    Apply
                  </Button>
                </>
              }
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
    })(args),
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
            >
              <Modal onRequestClose={() => setOpen(false)}>
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
      const { hasScroll, targetElRef } = useDetectBodyScroll();
      const [isOpen, setOpen] = React.useState<boolean>(false);

      const tokens = useTheme();
      const dialogHeaderIconTokens = tokens.cmp.dialog.headerIcon;

      return (
        <>
          {isOpen && (
            <Modal.Container onRequestClose={() => setOpen(false)}>
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
