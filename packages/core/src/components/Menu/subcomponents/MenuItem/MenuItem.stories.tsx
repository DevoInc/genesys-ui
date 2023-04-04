import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Menu, MenuItem } from '../..';
import { Tag } from '../../../Tag';
import { Flex } from '../../../Flex';
import { Badge } from '../../../Badge';
import { Typography } from '../../../Typography';
import { Box } from '../../../Box';
import { VFlex } from '../../../VFlex';

const meta: Meta<typeof MenuItem> = {
  title: 'Components/Core/Navigation/Menu/Subcomponents/Item',
  component: MenuItem,
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const Base: Story = {
  args: {
    label: 'Menu item content',
  },
};

export const WithAppendAndPrependContent: Story = {
  name: 'With append and prepend content',
  args: {
    label: 'Menu item content',
    appendContent: (
      <Flex
        forwardedAs="span"
        alignItems="center"
        marginLeft="auto"
        paddingLeft="cmp-xs"
        gap="cmp-xs"
      >
        <Typography.Caption>⌘ + D</Typography.Caption>
        <Tag colorScheme="success" size="sm" text="NEW" />
      </Flex>
    ),
    prependContent: (
      <Flex forwardedAs="span" paddingRight="cmp-xs">
        <Badge as="span" colorScheme="info" size="sm" text="9" />
      </Flex>
    ),
  },
};

export const Selectable: Story = {
  render: () => {
    const [selected, setSelected] = React.useState(false);
    const onOptionChange = () => setSelected(!selected);
    return (
      <Menu.Item
        label="Option one"
        selectionScheme="multiple"
        onChange={onOptionChange}
        state={selected ? 'selected' : 'enabled'}
      />
    );
  },
};

export const CustomContent: Story = {
  render: () => {
    const [selected, setSelected] = React.useState(false);
    const onOptionChange = () => setSelected(!selected);
    return (
      <Menu.Item
        selectionScheme="multiple"
        onChange={onOptionChange}
        state={selected ? 'selected' : 'enabled'}
      >
        <VFlex spacing="cmp-xxs" padding="cmp-xs">
          <Typography.Heading size="h6">Menu item heading</Typography.Heading>
          <Typography.Paragraph colorScheme="weak">
            Colonies as a patch of light radio telescope billions upon billions
            Tunguska event prime number
          </Typography.Paragraph>
        </VFlex>
      </Menu.Item>
    );
  },
};
