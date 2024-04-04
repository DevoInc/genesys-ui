import { Meta, StoryObj } from '@storybook/react';

import { Wrap } from './Wrap';
import { WrapStoryContent } from './__stories__';

const meta: Meta<typeof Wrap> = {
  title: 'Components/Layout/Flex/Wrap',
  component: Wrap,
  args: {
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    hSpacing: 'cmp-md',
    inline: false,
    vSpacing: 'cmp-md',
  },
};

export default meta;
type Story = StoryObj<typeof Wrap>;

export const Base: Story = {
  args: {
    children: WrapStoryContent,
  },
};

export const ChildrenByRow: Story = {
  name: 'With children by row',
  args: {
    children: WrapStoryContent,
    childrenByRow: 4,
  },
};
