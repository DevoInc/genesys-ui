import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { AnimatePresence, motion } from 'framer-motion';

import { Button, Modal, useDetectBodyScroll } from '..';

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

      return (
        <>
          {isOpen && (
            <Modal.Container onRequestClose={() => setOpen(false)}>
              <Modal.Header hasBoxShadow={hasScroll}>
                Header Content
              </Modal.Header>
              <Modal.Body modalBodyRef={targetElRef}>Body Content</Modal.Body>
              <Modal.Footer hasBoxShadow={hasScroll}>
                Footer Content
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
