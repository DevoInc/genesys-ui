import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { mainActions, tabs } from './__stories__/content';

import { AppBar } from './AppBar';
import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { InputControl } from '../InputControl';
import { Typography } from '../Typography';

const meta: Meta<typeof AppBar> = {
  title: 'Components/Core/Navigation/AppBar',
  component: AppBar,
  subcomponents: {
    'AppBar.Heading': AppBar.Heading,
    'AppBar.Navigation': AppBar.Navigation,
    'AppBar.Divider': AppBar.Divider,
    'AppBar.Item': AppBar.Item,
  },
};

export default meta;
type Story = StoryObj<typeof AppBar>;

export const Base: Story = {
  args: {
    heading: 'AppBar heading',
    sticky: true,
    tabs: tabs,
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
                <Button icon="gi-reload_refresh_update">Reload</Button>
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
          <AppBar.Navigation tabs={tabs} flex="0 0 auto" />
          <Typography.Paragraph>Custom block next to tabs</Typography.Paragraph>
          <AppBar.Item marginLeft="auto">
            <Typography.Paragraph>Block to right</Typography.Paragraph>
          </AppBar.Item>
        </AppBar>
      );
    })(),
};
