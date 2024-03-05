import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '../Button';
import { Modal } from '../Modal';
import { Typography } from '../Typography';
import { Input } from '../Input';

const meta: Meta<typeof Modal> = {
  title: 'Components/Layout/Modal',
  component: Modal,
  args: {
    status: 'base',
    disableCloseOnOverlayClick: false,
    windowSize: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Base: Story = {
  render: () =>
    (() => {
      const [isOpen, setOpen] = React.useState<boolean>(false);
      const closeModal = (msg: string) => {
        action(msg);
        setOpen(false);
      };

      return (
        <>
          {isOpen && (
            <Modal onRequestClose={() => closeModal('onRequestClose')}>
              <Modal.Header title="Modal title" />
              <Modal.Body>
                <Typography.Paragraph gutterBottom="cmp-md">
                  A still more glorious dawn awaits finite but unbounded Hypatia
                  Cambrian explosion white dwarf the carbon in our apple pies.
                  Vanquish the impossible the sky calls to us Flatland two
                  ghostly white figures in coveralls and helmets are softly
                  dancing are creatures of the cosmos tendrils of gossamer
                  clouds?
                </Typography.Paragraph>
                <Input label="Demo input" id="demo-input" />
              </Modal.Body>
            </Modal>
          )}
          <Button onClick={() => setOpen(true)} colorScheme="accent-high">
            Open modal
          </Button>
        </>
      );
    })(),
};
