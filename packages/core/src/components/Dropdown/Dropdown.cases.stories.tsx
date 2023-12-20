import { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';

import { Accessibility, ModalSimple } from './stories/cases';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Core/Navigation/Dropdown',
  component: Dropdown,
  args: {},
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const FullAccessibility: Story = {
  render: Accessibility,
};

export const IntoModal: Story = {
  render: ModalSimple,
};
