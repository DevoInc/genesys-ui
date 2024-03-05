import { Meta, StoryObj } from '@storybook/react';
import { ModalHeader } from '../../components';

const meta: Meta<typeof ModalHeader> = {
  title: 'Components/Layout/Modal/Components',
  component: ModalHeader,
  args: {
    actions: [],
    title: 'Modal title',
    onRequestClose: () => alert('Close action!'),
  },
};

export default meta;

type Story = StoryObj<typeof ModalHeader>;

export const Header: Story = {};
