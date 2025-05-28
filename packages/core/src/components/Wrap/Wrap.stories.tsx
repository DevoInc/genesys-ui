import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Wrap } from './Wrap';
import { WrapStoryContent } from './__stories__';
import { StyledLayoutContentHelper } from '../../../stories/components/styled';

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

export const WrapAndWrapItems: Story = {
  name: 'Using Wrap.Item',
  render: (args) =>
    ((args) => (
      <Wrap {...args}>
        <Wrap.Item order={4}>
          <StyledLayoutContentHelper>
            1. Rogue from which.
          </StyledLayoutContentHelper>
        </Wrap.Item>
        <Wrap.Item paddingLeft={'cmp-xl'} order={3}>
          <StyledLayoutContentHelper>
            2. Rogue from which we spring.
          </StyledLayoutContentHelper>
        </Wrap.Item>
        <Wrap.Item width="50%" order={2}>
          <StyledLayoutContentHelper>
            3. Rogue from which we spring galaxies.
          </StyledLayoutContentHelper>
        </Wrap.Item>
        <Wrap.Item order={1}>
          <StyledLayoutContentHelper>4. Rogue.</StyledLayoutContentHelper>
        </Wrap.Item>
      </Wrap>
    ))(args),
};
