import { Meta, StoryObj } from '@storybook/react';
import { ModalBody } from './ModalBody';

const meta: Meta<typeof ModalBody> = {
  title: 'Components/Core/Layout/Modal/Subcomponents',
  component: ModalBody,
};

export default meta;

type Story = StoryObj<typeof ModalBody>;

export const Body: Story = {
  args: {
    children: 'Content of the modal body',
  },
};
