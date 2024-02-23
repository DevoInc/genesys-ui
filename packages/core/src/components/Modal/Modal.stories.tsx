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
    shouldCloseOnOverlayClick: true,
    windowSize: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Base: Story = {
  args: {
    headerTitle: 'Modal window',
  },
  render: (args) =>
    ((props) => {
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
              onRequestClose={() => closeModal('onRequestClose')}
            >
              <Typography.Paragraph gutterBottom="cmp-md">
                A still more glorious dawn awaits finite but unbounded Hypatia
                Cambrian explosion white dwarf the carbon in our apple pies.
                Vanquish the impossible the sky calls to us Flatland two ghostly
                white figures in coveralls and helmets are softly dancing are
                creatures of the cosmos tendrils of gossamer clouds?
              </Typography.Paragraph>
              <Input label="Demo input" id="demo-input" />
            </Modal>
          )}
          <Button onClick={() => setOpen(true)} colorScheme="accent-high">
            Open modal
          </Button>
        </>
      );
    })(args),
};
