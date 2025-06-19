import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import { useTheme } from 'styled-components';

import {
  GIDiamondPrizeAwardJewelleryRing,
  GIEyeViewFilled,
  GIIdea,
  GITagPriceSale,
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
import { ButtonGroup } from '../../../ButtonGroup';
import { useMenuItemPadding } from './useMenuItemPadding';
import { lorem } from '../../../../../stories/utils/fillerTexts';

const meta: Meta<typeof Menu.Item> = {
  title: 'Components/Navigation/Menu/Components/MenuItem',
  component: Menu.Item,
  args: {
    label: 'Menu item content',
    icon: <GITimeZone />,
  },
};

export default meta;
type Story = StoryObj<typeof Menu.Item>;

export const Playground: Story = {};

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

export const WithInteractiveContent: Story = {
  tags: ['isHidden'],
  args: {
    interactiveContent: (
      <ButtonGroup size="sm" colorScheme="quiet-blend">
        <ButtonGroup.IconButton
          onClick={() => alert('onClick on BUTTON')}
          icon={<GIIdea />}
        />
        <ButtonGroup.IconButton
          onClick={() => alert('onClick on BUTTON')}
          icon={<GITagPriceSale />}
        />
      </ButtonGroup>
    ),
    onClick: () => alert('onClick'),
  },
};

export const WithInteractiveContentAndChildren: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      const interactiveRef = React.useRef(null);
      const innerRef = React.useRef<HTMLButtonElement>(null);
      useMenuItemPadding(interactiveRef, innerRef);
      return (
        <Menu.Item._Wrapper>
          <Menu.Item._Inner ref={innerRef}>
            <Typography.Paragraph truncateLine={1}>
              {lorem}
            </Typography.Paragraph>
          </Menu.Item._Inner>
          <Menu.Item._InteractiveWrapper ref={interactiveRef}>
            <ButtonGroup size="sm">
              <ButtonGroup.Button>Interactive content</ButtonGroup.Button>
            </ButtonGroup>
          </Menu.Item._InteractiveWrapper>
        </Menu.Item._Wrapper>
      );
    })(),
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
      return (
        <Menu.Item
          label="Option one"
          selectionScheme="multiple"
          onClick={() => setSelected(!selected)}
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
      return (
        <Menu.Item
          selectionScheme="multiple"
          onClick={() => setSelected(!selected)}
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
