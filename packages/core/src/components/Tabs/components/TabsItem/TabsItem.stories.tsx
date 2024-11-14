import { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '../../Tabs';
import * as React from 'react';
import { GIChart } from '@devoinc/genesys-icons';
import { Box } from '../../../Box';
import { Badge } from '../../../Badge';

const meta: Meta<typeof Tabs.Item> = {
  title: 'Components/Navigation/Tabs/Components',
  component: Tabs.Item,
  args: {
    label: 'Tab item',
    size: 'md',
    state: 'enabled',
  },
};

export default meta;
type Story = StoryObj<typeof Tabs.Item>;

export const Item: Story = {};

export const WithBadge: Story = {
  name: 'With badge',
  tags: ['isHidden'],
  render: () =>
    (() => {
      return (
        <Tabs.Item
          icon={<GIChart />}
          label={
            <>
              Tiny
              <Box
                position="absolute"
                positionTop="-0.8rem"
                positionRight="-0.4rem"
              >
                <Badge size="sm" colorScheme="warning" />
              </Box>
            </>
          }
        />
      );
    })(),
};
