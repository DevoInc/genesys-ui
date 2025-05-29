import { Meta, StoryObj } from '@storybook/react-vite';

import { ModalBody } from './ModalBody';
import { lorem } from '../../../../../stories/utils/fillerTexts';

const meta: Meta<typeof ModalBody> = {
  title: 'Components/Layout/Modal/Components/ModalBody',
  component: ModalBody,
  args: {
    children: lorem,
  },
};

export default meta;
type Story = StoryObj<typeof ModalBody>;

export const Playground: Story = {};
