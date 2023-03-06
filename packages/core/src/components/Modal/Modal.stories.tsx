import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { AnimatePresence, motion } from 'framer-motion';

import { Button, Modal } from '../';

const meta: Meta<typeof Modal> = {
  title: 'Components/Core/Layout/Modal',
  component: Modal,
  args: {
    headerStyle: 'default',
    shouldCloseOnOverlayClick: true,
    windowSize: 'medium',
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Base: Story = {
  args: {
    headerTitle: 'Modal window',
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
              buttons={undefined}
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
