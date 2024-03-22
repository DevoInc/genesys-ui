import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Thumbnail, Typography, VFlex } from '..';

const meta: Meta<typeof Thumbnail> = {
  title: 'Components/Media/Thumbnail',
  component: Thumbnail,
  args: {
    src: 'https://picsum.photos/480/320',
    alt: 'Demo story img',
    display: 'block',
    objectFit: 'cover',
  },
};

export default meta;
type Story = StoryObj<typeof Thumbnail>;

export const Base: Story = {};

export const CustomSize: Story = {
  tags: ['isHidden'],
  name: 'Custom width and height',
  render: (args) => <Thumbnail {...args} width="40rem" height="10rem" />,
};

export const FitContainerCustomHeight: Story = {
  tags: ['isHidden'],
  name: 'Width to fit container and custom height',
  render: (args) => <Thumbnail {...args} width="100%" height="24rem" />,
};

export const FitContainerHeightAuto: Story = {
  tags: ['isHidden'],
  name: 'Width to fit container and height auto',
  render: (args) => <Thumbnail {...args} width="100%" height="auto" />,
};

export const CustomObjectPosition: Story = {
  tags: ['isHidden'],
  name: 'Custom img object position',
  render: (args) => (
    <VFlex>
      <Typography.Heading size="h5">Original</Typography.Heading>
      <Thumbnail {...args} width="48rem" height="18rem" />
      <Typography.Heading size="h5">Center-bottom</Typography.Heading>
      <Thumbnail
        {...args}
        width="48rem"
        height="18rem"
        objectPosition="center bottom"
      />
      <Typography.Heading size="h5">Center-top</Typography.Heading>
      <Thumbnail
        {...args}
        width="48rem"
        height="18rem"
        objectPosition="center top"
      />
      <Typography.Heading size="h5">20% - 40%</Typography.Heading>
      <Thumbnail
        {...args}
        width="48rem"
        height="18rem"
        objectPosition="20% 40%"
      />
    </VFlex>
  ),
};

export const Radius: Story = {
  tags: ['isHidden'],
  name: 'With radius',
  render: (args) => (
    <Thumbnail {...args} width="10rem" height="10rem" borderRadius="50%" />
  ),
};
