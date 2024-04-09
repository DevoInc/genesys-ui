import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { mainActions, TabsCmp } from './__stories__/content';

import { AppBar } from './AppBar';
import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { InputControl } from '../InputControl';
import { Typography } from '../Typography';
import { GIReloadRefreshUpdate } from '@devoinc/genesys-icons';

const meta: Meta<typeof AppBar> = {
  title: 'Components/Navigation/AppBar',
  component: AppBar,
};

export default meta;
type Story = StoryObj<typeof AppBar>;

export const Base: Story = {
  args: {
    heading: 'AppBar heading',
    sticky: true,
    tabs: <TabsCmp />,
  },
};

export const Compact: Story = {
  args: {
    compact: true,
    heading: 'Compact App Bar',
    sticky: true,
  },
};

export const CompactWithAnotherToolbar: Story = {
  render: () =>
    (() => {
      return (
        <>
          <AppBar bordered compact heading="Compact app bar">
            {mainActions()}
          </AppBar>
          <AppBar bordered justifyContent="space-between">
            <AppBar.Item>
              <InputControl
                aria-label="Filter"
                placeholder="Filter widgets..."
                type="search"
              />
            </AppBar.Item>
            <AppBar.Item>
              <ButtonGroup>
                <Button icon={<GIReloadRefreshUpdate />}>Reload</Button>
              </ButtonGroup>
            </AppBar.Item>
          </AppBar>
        </>
      );
    })(),
};

export const Custom: Story = {
  render: () =>
    (() => {
      return (
        <AppBar sticky={true}>
          <AppBar.Heading styles="font-style: italic;">Hello</AppBar.Heading>
          <AppBar.Divider />
          <AppBar.Navigation>
            <TabsCmp />
          </AppBar.Navigation>
          <Typography.Paragraph>Custom block next to tabs</Typography.Paragraph>
          <AppBar.Item marginLeft="auto">
            <Typography.Paragraph>Block to right</Typography.Paragraph>
          </AppBar.Item>
        </AppBar>
      );
    })(),
};
