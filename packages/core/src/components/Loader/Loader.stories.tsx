import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box } from '../Box';
import { Typography } from '../Typography';
import { Loader } from './Loader';
import { lorem, lorem2, lorem3 } from '../../../stories/utils/fillerTexts';
import { Panel } from '../Panel';

const meta: Meta<typeof Loader> = {
  title: 'Components/Feedback/Loader',
  component: Loader,
  args: {
    colorScheme: 'inherited',
    size: 'md',
    zIndex: 10,
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Base: Story = {
  render: (args) => (
    <Box position="relative">
      <Typography.Paragraph gutterBottom="cmp-md">{lorem}</Typography.Paragraph>
      <Typography.Paragraph gutterBottom="cmp-md">
        {lorem2}
      </Typography.Paragraph>
      <Typography.Paragraph gutterBottom="cmp-md">
        {lorem3}
      </Typography.Paragraph>
      <Loader {...args}>
        <Loader.Spinner />
      </Loader>
    </Box>
  ),
};

export const ContextualSpinner: Story = {
  name: 'Contextual with spinner',
  render: (args) => (
    <Panel title="Panel loading" headerSettings={{ bordered: true }}>
      <Typography.Paragraph gutterBottom="cmp-md">{lorem}</Typography.Paragraph>
      <Typography.Paragraph gutterBottom="cmp-md">
        {lorem2}
      </Typography.Paragraph>
      <Loader {...args}>
        <Loader.Spinner />
      </Loader>
    </Panel>
  ),
};

export const Progress: Story = {
  name: 'Contextual with progress',
  render: (args) => (
    <Panel title="Panel loading" headerSettings={{ bordered: true }}>
      <Typography.Paragraph gutterBottom="cmp-md">{lorem}</Typography.Paragraph>
      <Typography.Paragraph gutterBottom="cmp-md">
        {lorem2}
      </Typography.Paragraph>
      <Loader {...args}>
        <Loader.ProgressBar percent={60} />
      </Loader>
    </Panel>
  ),
};

export const Scroll: Story = {
  name: 'Contextual for infinite scroll',
  render: (args) =>
    ((args) => (
      <Box position="relative">
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem}
        </Typography.Paragraph>
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem2}
        </Typography.Paragraph>
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem3}
        </Typography.Paragraph>
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem3}
        </Typography.Paragraph>
        <Loader {...args}>
          <Loader.GradientContainer>
            <Loader.Spinner />
          </Loader.GradientContainer>
        </Loader>
      </Box>
    ))(args),
};

export const ScrollProgress: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((args) => (
      <Box position="relative">
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem}
        </Typography.Paragraph>
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem2}
        </Typography.Paragraph>
        <Loader {...args}>
          <Loader.GradientContainer>
            <Loader.ProgressBar percent={48} size="sm" />
          </Loader.GradientContainer>
        </Loader>
      </Box>
    ))(args),
};

export const ScrollToTop: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((args) => (
      <Box position="relative">
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem}
        </Typography.Paragraph>
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem2}
        </Typography.Paragraph>
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem3}
        </Typography.Paragraph>
        <Loader {...args}>
          <Loader.GradientContainer position="top">
            <Loader.Spinner />
          </Loader.GradientContainer>
        </Loader>
      </Box>
    ))(args),
};

export const ScrollToRight: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((args) => (
      <Box position="relative">
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem}
        </Typography.Paragraph>
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem2}
        </Typography.Paragraph>
        <Loader {...args}>
          <Loader.GradientContainer position="right">
            <Loader.Spinner />
          </Loader.GradientContainer>
        </Loader>
      </Box>
    ))(args),
};

export const ScrollToLeft: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((args) => (
      <Box position="relative">
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem}
        </Typography.Paragraph>
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem2}
        </Typography.Paragraph>
        <Loader {...args}>
          <Loader.GradientContainer position="left">
            <Loader.Spinner />
          </Loader.GradientContainer>
        </Loader>
      </Box>
    ))(args),
};

export const Global: Story = {
  args: { colorScheme: 'dark', fixed: true, zIndex: 99999 },
  render: (args) =>
    ((args) => (
      <Box position="relative">
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem}
        </Typography.Paragraph>
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem2}
        </Typography.Paragraph>
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem3}
        </Typography.Paragraph>
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem3}
        </Typography.Paragraph>
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem2}
        </Typography.Paragraph>
        <Typography.Paragraph>{lorem}</Typography.Paragraph>
        <Loader {...args} fixed colorScheme="dark">
          <Loader.DevoLogoSpinner />
        </Loader>
      </Box>
    ))(args),
};
