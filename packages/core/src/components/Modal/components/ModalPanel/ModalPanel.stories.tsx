import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ModalPanel } from './ModalPanel';
import { Typography } from '../../../Typography';

const meta: Meta<typeof ModalPanel> = {
  title: 'Components/Layout/Modal/Components',
  component: ModalPanel,
};

export default meta;

type Story = StoryObj<typeof ModalPanel>;

export const Panel: Story = {
  name: 'Modal._Panel',
  render: (args) =>
    ((props) => {
      return (
        <ModalPanel {...props}>
          <Typography.Paragraph>
            This should be a Modal.Header, Modal.Body and/or Modal.Footer
          </Typography.Paragraph>
        </ModalPanel>
      );
    })(args),
};
