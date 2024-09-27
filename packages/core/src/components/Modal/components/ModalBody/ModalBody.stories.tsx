import { Meta, StoryObj } from '@storybook/react';

import { ModalBody } from './ModalBody';
import { lorem } from '../../../../../stories/utils/fillerTexts';

const meta: Meta<typeof ModalBody> = {
  title: 'Components/Layout/Modal/Components',
  component: ModalBody,
};

export default meta;
type Story = StoryObj<typeof ModalBody>;

export const Body: Story = {
  name: 'Modal.Body',
  args: {
    children: lorem,
  },
};
