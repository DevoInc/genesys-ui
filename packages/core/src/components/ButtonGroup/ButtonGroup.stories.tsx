import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ButtonGroup } from './ButtonGroup';
import { IconButton } from '../IconButton';
import {
  GICustomDate,
  GIPinBookmark,
  GIReloadRefreshUpdate,
} from '@devoinc/genesys-icons';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/Button/ButtonGroup',
  component: ButtonGroup,
  args: {
    alignItems: 'center',
    colorScheme: 'neutral',
    flexWrap: 'wrap',
    hidden: false,
    inline: true,
    justifyContent: 'center',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Base: Story = {
  render: (args) =>
    ((props) => (
      <ButtonGroup {...props}>
        <ButtonGroup.IconButton icon={<GICustomDate />} />
        <ButtonGroup.IconButton icon={<GIReloadRefreshUpdate />} />
        <ButtonGroup.IconButton icon={<GIPinBookmark />} />
      </ButtonGroup>
    ))(args),
};

export const WithButtons: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <ButtonGroup {...props}>
        <ButtonGroup.Button icon={<GICustomDate />} size="lg">
          Define date
        </ButtonGroup.Button>
        <ButtonGroup.Button icon={<GIReloadRefreshUpdate />}>
          Refresh context
        </ButtonGroup.Button>
        <ButtonGroup.Button icon={<GIPinBookmark />}>
          Set as default
        </ButtonGroup.Button>
      </ButtonGroup>
    ))(args),
};

export const InheritingFromParent: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <ButtonGroup {...props} colorScheme="info" size="xs">
        <ButtonGroup.IconButton icon={<GICustomDate />} />
        <ButtonGroup.IconButton icon={<GIReloadRefreshUpdate />} />
        <ButtonGroup.IconButton icon={<GIPinBookmark />} />
      </ButtonGroup>
    ))(args),
};

export const SpecificChildPropValue: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <ButtonGroup {...props} colorScheme="success">
        <ButtonGroup.IconButton icon={<GICustomDate />} />
        <ButtonGroup.IconButton icon={<GIReloadRefreshUpdate />} />
        <ButtonGroup.IconButton icon={<GIPinBookmark />} colorScheme="error" />
      </ButtonGroup>
    ))(args),
};

export const Items: Story = {
  name: 'Using Items for custom layout',
  render: (args) =>
    ((props) => (
      <ButtonGroup {...props} inline={false} justifyContent="flex-start">
        <ButtonGroup.IconButton icon={<GICustomDate />} />
        <ButtonGroup.IconButton icon={<GIReloadRefreshUpdate />} />
        <ButtonGroup.Item marginLeft="auto">
          <ButtonGroup.IconButton icon={<GIPinBookmark />} />
        </ButtonGroup.Item>
      </ButtonGroup>
    ))(args),
};

export const ItemsWithQuiet: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <ButtonGroup {...props} colorScheme="quiet">
        <ButtonGroup.IconButton icon={<GICustomDate />} />
        <ButtonGroup.IconButton icon={<GIReloadRefreshUpdate />} />
        <ButtonGroup.IconButton icon={<GIPinBookmark />} />
      </ButtonGroup>
    ))(args),
};

export const ItemsWithQuietOtherComponents: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <ButtonGroup {...props} colorScheme="success" size="xs">
        <IconButton icon={<GICustomDate />} />
        <IconButton icon={<GIReloadRefreshUpdate />} />
        <IconButton icon={<GIPinBookmark />} />
      </ButtonGroup>
    ))(args),
};
