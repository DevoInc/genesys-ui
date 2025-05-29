import * as React from 'react';
<<<<<<< HEAD
import { Meta, StoryObj } from '@storybook/react';
import { useTheme } from 'styled-components';
=======
import { Meta, StoryObj } from '@storybook/react-vite';
>>>>>>> 619c0b6a4685fba2c337e6b2d78a199889de0c7d

import {
  GIDiamondPrizeAwardJewelleryRing,
  GIEyeViewFilled,
  GIIdea,
  GITimeZone,
} from '@devoinc/genesys-icons';

import { Badge } from '../../../Badge';
import { Box } from '../../../Box';
import { Flex } from '../../../Flex';
import { HFlex } from '../../../HFlex';
import { Icon } from '../../../Icon';
import { Menu } from '../../Menu';
import { ProgressBar } from '../../../ProgressBar';
import { Tag } from '../../../Tag';
import { Typography } from '../../../Typography';
import { VFlex } from '../../../VFlex';
import { MenuItem } from './MenuItem';

const meta: Meta<typeof Menu.Item> = {
  title: 'Components/Navigation/Menu/Components/MenuItem',
  component: Menu.Item,
};

export default meta;
type Story = StoryObj<typeof Menu.Item>;

export const Playground: Story = {
  args: {
    label: 'Menu item content',
    icon: <GITimeZone />,
    expandable: true,
  },
};

export const WithAppendAndPrependContent: Story = {
  tags: ['isHidden'],
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
  tags: ['isHidden'],
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

export const WithDescription: Story = {
  tags: ['isHidden'],
  args: {
    icon: <GIEyeViewFilled />,
    label: 'Menu item title',
    unlimitedHeight: true,
    bottomContent: (
      <Typography.Paragraph size="sm" colorScheme="weak">
        Apollonius of Perga take root and flourish a still more glorious.
      </Typography.Paragraph>
    ),
  },
};

export const Selectable: Story = {
  tags: ['isHidden'],
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
  tags: ['isHidden'],
  args: {
    label: 'rick.sanchez@devo.com',
    unlimitedHeight: true,
    bottomContent: (
      <HFlex spacing="cmp-xxs" paddingLeft="cmp-xl">
        <Icon size="xxs" colorScheme="weak">
          <GIDiamondPrizeAwardJewelleryRing />
        </Icon>
        <Typography.Paragraph colorScheme="weak">admin</Typography.Paragraph>
      </HFlex>
    ),
    prependContent: (
      <Badge
        text="RS"
        size="sm"
        style="width: 2.4rem; height: 2.4rem; padding: 0;"
      />
    ),
    state: 'readonly',
  },
};

export const VisualAdjustments: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      const theme = useTheme();
      return (
        <HFlex>
          <HFlex.Item
            padding="cmp-xs"
            style={{
              backgroundColor: theme.alias.color.background.surface.base.raised,
            }}
          >
            <Menu.Item {...props} quiet label="Quiet menu item" />
          </HFlex.Item>
          <Menu.Item {...props} linkStyled label="Link styled menu item" />
        </HFlex>
      );
    })(args),
};

export const ActiveForNavigation: Story = {
  tags: ['isHidden'],
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
  tags: ['isHidden'],
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
          hasExtraLeftSpace
        >
          <MenuItem._Icon size="2rem">
            <GIIdea />
          </MenuItem._Icon>
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
