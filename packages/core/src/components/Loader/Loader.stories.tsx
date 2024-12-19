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

export const Playground: Story = {
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
  render: (args) => (
    <Panel>
      <Panel.Header title="Panel loading" bordered />
      <Panel.Body>
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem}
        </Typography.Paragraph>
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem2}
        </Typography.Paragraph>
        <Loader {...args}>
          <Loader.Spinner />
        </Loader>
      </Panel.Body>
    </Panel>
  ),
};

export const Progress: Story = {
  name: 'Contextual with progress',
  render: (args) => (
    <Panel>
      <Panel.Header title="Panel loading" bordered />
      <Panel.Body>
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem}
        </Typography.Paragraph>
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem2}
        </Typography.Paragraph>
        <Loader {...args}>
          <Loader.ProgressBar percent={60} />
        </Loader>
      </Panel.Body>
    </Panel>
  ),
};

export const Scroll: Story = {
  name: 'Contextual for infinite scroll',
  render: (args) =>
    ((props) => (
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
        <Loader {...props}>
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
    ((props) => (
      <Box position="relative">
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem}
        </Typography.Paragraph>
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem2}
        </Typography.Paragraph>
        <Loader {...props}>
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
    ((props) => (
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
        <Loader {...props}>
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
    ((props) => (
      <Box position="relative">
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem}
        </Typography.Paragraph>
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem2}
        </Typography.Paragraph>
        <Loader {...props}>
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
    ((props) => (
      <Box position="relative">
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem}
        </Typography.Paragraph>
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem2}
        </Typography.Paragraph>
        <Loader {...props}>
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
    ((props) => (
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
        <Loader {...props} fixed colorScheme="dark">
          <Loader.DevoLogoSpinner />
        </Loader>
      </Box>
    ))(args),
};
