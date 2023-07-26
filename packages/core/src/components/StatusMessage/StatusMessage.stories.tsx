import { Meta, StoryObj } from '@storybook/react';

import { StatusMessage } from '..';

const meta: Meta<typeof StatusMessage> = {
  title: 'Components/Core/Feedback/StatusMessage',
  component: StatusMessage,
};

export default meta;
type Story = StoryObj<typeof StatusMessage>;

export const Base: Story = {
  args: {
    title: 'No data available',
    description:
      "Great turbulent clouds muse about a mote of dust suspended in a sunbeam dream of the mind's eye prime number preserve and cherish that pale blue dot. Hearts of the stars with pretty stories for which there's little good evidence the carbon in our apple pies Sea of Tranquility invent the universe Apollonius of Perga.",
  },
};
