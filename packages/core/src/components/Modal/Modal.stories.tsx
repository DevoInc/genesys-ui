import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, Modal } from '../';

const meta: Meta<typeof Modal> = {
  title: 'Components/Core/Layout/Modal',
  component: Modal,
  args: {
    status: 'base',
    shouldCloseOnOverlayClick: true,
    windowSize: 'default',
    zIndex: 100,
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
