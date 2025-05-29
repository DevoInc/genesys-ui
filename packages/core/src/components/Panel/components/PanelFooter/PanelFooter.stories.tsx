import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { PanelFooter } from './PanelFooter';
import { Button } from '../../../Button';
import { HFlex } from '../../../HFlex';
import { Panel } from '../../Panel';
import { Tag } from '../../../Tag';

const meta: Meta<typeof PanelFooter> = {
  title: 'Components/Layout/Panel/Components/PanelFooter',
  component: PanelFooter,
  args: {
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof PanelFooter>;

export const Playground: Story = {
  args: {
    children: 'Footer help text.',
  },
};

export const WithActions: Story = {
  tags: ['isHidden'],
  args: {
    actions: [
      <Button colorScheme="quiet" key={1}>
        Cancel
      </Button>,
      <Button colorScheme="neutral" key={2}>
        Save
      </Button>,
      <Button colorScheme="accent" key={2}>
        Apply
      </Button>,
    ],
    helpUrl: 'https://docs.devo.com',
    bordered: true,
  },
};

export const Children: Story = {
  tags: ['isHidden'],
  args: {
    children: (
      <HFlex padding="cmp-sm cmp-md" justifyContent="space-between">
        <Panel.Footer._Help helpUrl="https://docs.devo.com" />
        <Tag size="sm" colorScheme="data-dusk" text="Shared" />
      </HFlex>
    ),
    padding: '0',
    bordered: true,
  },
};
