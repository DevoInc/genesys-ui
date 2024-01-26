import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ButtonGroup } from './ButtonGroup';
import { IconButton } from '../IconButton';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/Core/Button/ButtonGroup',
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
    ((args) => (
      <ButtonGroup {...args}>
        <ButtonGroup.IconButton icon="gi-custom_date" />
        <ButtonGroup.IconButton icon="gi-reload_refresh_update" />
        <ButtonGroup.IconButton icon="gi-pin_bookmark" />
      </ButtonGroup>
    ))(args),
};

export const WithButtons: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((args) => (
      <ButtonGroup {...args}>
        <ButtonGroup.Button icon="gi-custom_date" size="lg">
          Define date
        </ButtonGroup.Button>
        <ButtonGroup.Button icon="gi-reload_refresh_update">
          Refresh context
        </ButtonGroup.Button>
        <ButtonGroup.Button icon="gi-pin_bookmark">
          Set as default
        </ButtonGroup.Button>
      </ButtonGroup>
    ))(args),
};

export const InheritingFromParent: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((args) => (
      <ButtonGroup {...args} colorScheme="info" size="xs">
        <ButtonGroup.IconButton icon="gi-custom_date" />
        <ButtonGroup.IconButton icon="gi-reload_refresh_update" />
        <ButtonGroup.IconButton icon="gi-pin_bookmark" />
      </ButtonGroup>
    ))(args),
};

export const SpecificChildPropValue: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((args) => (
      <ButtonGroup {...args} colorScheme="success">
        <ButtonGroup.IconButton icon="gi-custom_date" />
        <ButtonGroup.IconButton icon="gi-reload_refresh_update" />
        <ButtonGroup.IconButton icon="gi-pin_bookmark" colorScheme="error" />
      </ButtonGroup>
    ))(args),
};

export const Items: Story = {
  name: 'Using Items for custom layout',
  render: (args) =>
    ((args) => (
      <ButtonGroup {...args} inline={false} justifyContent="flex-start">
        <ButtonGroup.IconButton icon="gi-custom_date" />
        <ButtonGroup.IconButton icon="gi-reload_refresh_update" />
        <ButtonGroup.Item marginLeft="auto">
          <ButtonGroup.IconButton icon="gi-pin_bookmark" />
        </ButtonGroup.Item>
      </ButtonGroup>
    ))(args),
};

export const ItemsWithQuiet: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((args) => (
      <ButtonGroup {...args} colorScheme="quiet">
        <ButtonGroup.IconButton icon="gi-custom_date" />
        <ButtonGroup.IconButton icon="gi-reload_refresh_update" />
        <ButtonGroup.IconButton icon="gi-pin_bookmark" />
      </ButtonGroup>
    ))(args),
};

export const ItemsWithQuietOtherComponents: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((args) => (
      <ButtonGroup {...args} colorScheme="success" size="xs">
        <IconButton icon="gi-custom_date" />
        <IconButton icon="gi-reload_refresh_update" />
        <IconButton icon="gi-pin_bookmark" />
      </ButtonGroup>
    ))(args),
};
