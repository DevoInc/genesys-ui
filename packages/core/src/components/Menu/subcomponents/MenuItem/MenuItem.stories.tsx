import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Badge,
  Box,
  Flex,
  HFlex,
  Icon,
  Menu,
  ProgressBar,
  Tag,
  Typography,
  VFlex,
} from '../../../../components';
import { GITimeZone } from '@devoinc/genesys-icons';

const meta: Meta<typeof Menu.Item> = {
  title: 'Components/Navigation/Menu/Subcomponents/Item',
  component: Menu.Item,
};

export default meta;
type Story = StoryObj<typeof Menu.Item>;

export const Base: Story = {
  args: {
    label: 'Menu item content',
    icon: <GITimeZone />,
  },
};

export const WithAppendAndPrependContent: Story = {
  name: 'With append and prepend content',
  args: {
    label: 'Menu item content',
    appendContent: (
      <Flex
        as="span"
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
      <Flex as="span" paddingRight="cmp-xs">
        <Badge as="span" colorScheme="info" size="sm" text="9" />
      </Flex>
    ),
  },
};

export const WithAppendPrependAndBottomContent: Story = {
  name: 'With append, prepend and bottom content',
  args: {
    label: 'Menu item content',
    unlimitedHeight: true,
    appendContent: (
      <Flex
        as="span"
        alignItems="center"
        marginLeft="auto"
        paddingLeft="cmp-xs"
        gap="cmp-xs"
      >
        <Typography.Caption>⌘ + D</Typography.Caption>
        <Tag colorScheme="success" size="sm" text="NEW" />
      </Flex>
    ),
    bottomContent: (
      <Box marginTop="cmp-xs">
        <ProgressBar percent={48} />
      </Box>
    ),
    prependContent: (
      <Flex as="span" paddingRight="cmp-xs">
        <Badge as="span" colorScheme="info" size="sm" text="9" />
      </Flex>
    ),
  },
};

export const Selectable: Story = {
  render: () =>
    (() => {
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
    })(),
};

export const ReadOnly: Story = {
  render: () =>
    (() => {
      return (
        <Menu.Item
          label="rick.sanchez@devo.com"
          prependContent={
            <Badge
              text="RS"
              size="sm"
              styles="width: 2.4rem; height: 2.4rem; padding: 0;"
            />
          }
          bottomContent={
            <HFlex spacing="cmp-xxs" paddingLeft="cmp-xl">
              <Icon
                iconId="gi-diamond_prize_award_jewellery_ring"
                size="xxs"
                colorScheme="weak"
              />
              <Typography.Paragraph colorScheme="weak">
                admin
              </Typography.Paragraph>
            </HFlex>
          }
          unlimitedHeight
          state="readonly"
        />
      );
    })(),
};

export const ActiveForNavigation: Story = {
  name: 'Active for navigation',
  render: () =>
    (() => {
      const [active, setActive] = React.useState(false);
      const onOptionClick = () => setActive(!active);
      return (
        <Menu.Item
          label="Option one"
          onClick={onOptionClick}
          state={active ? 'active' : 'enabled'}
        />
      );
    })(),
};

export const CustomContent: Story = {
  render: () =>
    (() => {
      const [selected, setSelected] = React.useState(false);
      const onOptionChange = () => setSelected(!selected);
      return (
        <Menu.Item
          selectionScheme="multiple"
          onChange={onOptionChange}
          state={selected ? 'selected' : 'enabled'}
          unlimitedHeight
        >
          <VFlex spacing="cmp-xxs" padding="cmp-xs">
            <Typography.Heading size="h6">Menu item heading</Typography.Heading>
            <Typography.Paragraph colorScheme="weak">
              Colonies as a patch of light radio telescope billions upon
              billions Tunguska event prime number
            </Typography.Paragraph>
          </VFlex>
        </Menu.Item>
      );
    })(),
};
