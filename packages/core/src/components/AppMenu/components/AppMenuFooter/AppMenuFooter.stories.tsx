import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { GIDevoIcon } from '@devoinc/genesys-icons';
import { HFlex } from '../../../HFlex';
import { Icon } from '../../../Icon';
import { Typography } from '../../../Typography';
import { AppMenu } from '../../AppMenu';

const meta: Meta<typeof AppMenu.Footer> = {
  title: 'Components/Navigation/AppMenu/Components/AppMenuFooter',
  component: AppMenu.Footer,
  args: {
    collapseLabel: 'Collapse menu',
    expandLabel: 'Expand menu',
    collapsed: false,
  },
};

export default meta;
type Story = StoryObj<typeof AppMenu.Footer>;

export const Playground: Story = {};

export const CustomContent: Story = {
  tags: ['isHidden'],
  args: {
    children: (
      <HFlex flex="1" spacing="cmp-xs">
        <Icon size="md">
          <GIDevoIcon />
        </Icon>
        <Typography.Paragraph size="sm">
          © Devo Technology Inc. All Rights Reserved.
        </Typography.Paragraph>
      </HFlex>
    ),
  },
};
