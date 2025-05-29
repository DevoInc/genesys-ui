import { Meta, StoryObj } from '@storybook/react-vite';

import { ModalHeader } from '../../components';

const meta: Meta<typeof ModalHeader> = {
  title: 'Components/Layout/Modal/Components/ModalHeader',
  component: ModalHeader,
  args: {
    actions: [],
    title: 'Modal title',
    subtitle: 'Modal Subtitle',
    onRequestClose: () => alert('Close action!'),
  },
};

export default meta;
type Story = StoryObj<typeof ModalHeader>;

export const Playground: Story = {};
