import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { ModalPanel } from './ModalPanel';
import { Typography } from '../../../Typography';

const meta: Meta<typeof ModalPanel> = {
  title: 'Components/Layout/Modal/Components/ModalPanel',
  component: ModalPanel,
};

export default meta;
type Story = StoryObj<typeof ModalPanel>;

export const Playground: Story = {
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
