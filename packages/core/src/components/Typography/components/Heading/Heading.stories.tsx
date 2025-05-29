import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Heading } from './Heading';
import { EditableContent } from '../../../EditableContent';
import { lorem } from '../../../../../stories/utils/fillerTexts';
import { VFlex } from '../../../VFlex';
import { Typography } from '../../Typography';

const meta: Meta<typeof Heading> = {
  title: 'Components/Text/Typography/Components/Block/Heading',
  component: Heading,
  args: {
    children: 'This is a Heading',
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Playground: Story = {};

export const UsingAS: Story = {
  tags: ['isHidden'],
  args: {
    as: 'h5',
  },
};

export const Hero: Story = {
  tags: ['isHidden'],
  args: {
    size: 'hero-md',
  },
};

export const Overline: Story = {
  tags: ['isHidden'],
  args: {
    size: 'overline-md',
  },
};

export const Sizes: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      return (
        <VFlex>
          <Typography.Heading {...props} size="h1">
            This is h1 size
          </Typography.Heading>
          <Typography.Heading size="h2">This is h2 size</Typography.Heading>
          <Typography.Heading size="h3">This is h3 size</Typography.Heading>
          <Typography.Heading size="h4">This is h4 size</Typography.Heading>
          <Typography.Heading size="h5">This is h5 size</Typography.Heading>
          <Typography.Heading size="h6">This is h6 size</Typography.Heading>
          <Typography.Heading size="hero-sm">
            This is hero-sm size
          </Typography.Heading>
          <Typography.Heading size="hero-md">
            This is hero-md size
          </Typography.Heading>
          <Typography.Heading size="hero-lg">
            This is hero-lg size
          </Typography.Heading>
          <Typography.Heading size="overline-sm">
            This is overline-sm size
          </Typography.Heading>
          <Typography.Heading size="overline-md">
            This is overline-md size
          </Typography.Heading>
          <Typography.Heading size="overline-lg">
            This is overline-lg size
          </Typography.Heading>
        </VFlex>
      );
    })(args),
};

export const HeadingEditable: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      const [editConfig, setEditConfig] = React.useState({
        editing: false,
        content: lorem,
      });
      return (
        <EditableContent
          onBlur={(e) =>
            setEditConfig({
              editing: false,
              content: e.currentTarget.textContent,
            })
          }
          onFocus={() =>
            setEditConfig({
              ...editConfig,
              editing: true,
            })
          }
          tooltip="Click to edit this heading"
        >
          <Heading>This a heading with edition available</Heading>
        </EditableContent>
      );
    })(),
};
