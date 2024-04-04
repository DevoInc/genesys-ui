import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Menu } from '@devoinc/genesys-ui';

import { HeaderBulkRenderer } from './HeaderBulkRenderer';
import type { TBulkContext } from '../../facade';

const meta: Meta<typeof HeaderBulkRenderer> = {
  title: 'Components/Layout/Table/HeaderRenderers/HeaderBulkRenderer',
  component: HeaderBulkRenderer,
};

export default meta;
type Story = StoryObj<typeof HeaderBulkRenderer>;

export const Base: Story = {
  args: {
    colDef: {
      id: 'bulk',
      context: {
        menu: (
          <Menu>
            <Menu.Item
              onClick={() => {
                // eslint-disable-next-line no-console
                console.log('This is the first action');
              }}
            >
              First action
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                // eslint-disable-next-line no-console
                console.log('This is the second action');
              }}
            >
              Second action
            </Menu.Item>
          </Menu>
        ),
      } as TBulkContext,
    },
  },
};
