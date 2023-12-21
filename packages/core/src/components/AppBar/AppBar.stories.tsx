import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { AppBar } from './AppBar';
import { mainActions, userOptions, tabs } from './__stories__/content';
import { css } from 'styled-components';
import { Box, Typography } from '../../components';

const meta: Meta<typeof AppBar> = {
  title: 'Components/Core/Navigation/AppBar/Examples',
  component: AppBar,
  subcomponents: {
    'AppBar.Heading': AppBar.Heading,
    'AppBar.Container': AppBar.Container,
    'AppBar.Navigation': AppBar.Navigation,
    'AppBar.Actions': AppBar.Actions,
    'AppBar.Options': AppBar.Options,
    'AppBar.Divider': AppBar.Divider,
  },
};

export default meta;
type Story = StoryObj<typeof AppBar>;

export const Base: Story = {
  args: {
    tabItems: tabs,
    sticky: true,
  },
};

export const WithHeadingAndActions: Story = {
  args: {
    tabItems: tabs,
    heading: 'App',
    actions: mainActions(),
    sticky: true,
  },
};

export const Compact: Story = {
  args: {
    compact: true,
    heading: 'Compact bar',
    actions: mainActions('xs'),
    sticky: true,
  },
};

export const CompactWithAnotherToolbar: Story = {
  render: () =>
    (() => {
      return (
        <>
          <AppBar />
          <AppBar />
        </>
      );
    })(),
};

export const CustomContentBlock: Story = {
  args: {
    customContent: (
      <Box marginLeft="auto">
        <Typography.Paragraph>Custom content</Typography.Paragraph>
      </Box>
    ),
    heading: 'Custom content bar',
    sticky: true,
    tabItems: tabs,
  },
};

export const WithOptions: Story = {
  args: {
    tabItems: tabs,
    options: userOptions,
    sticky: true,
  },
};

export const Custom: Story = {
  render: () =>
    (() => {
      const id = 'custom';
      return (
        <AppBar.Container sticky={true}>
          <AppBar.Heading id={id}>Hello</AppBar.Heading>
          <AppBar.Navigation id={id}>
            <Typography.Paragraph>Custom navigation</Typography.Paragraph>
          </AppBar.Navigation>
          <AppBar.Actions id={id}>
            <Typography.Paragraph>Custom actions</Typography.Paragraph>
          </AppBar.Actions>
        </AppBar.Container>
      );
    })(),
};

export const CustomStyles: Story = {
  args: {
    tabItems: tabs,
    heading: 'App',
    actions: mainActions(),
    subcomponentStyles: {
      heading: css`
        > div {
          color: orange;
        }
      `,
      actions: 'background-color: #eee; border-radius: 0.4rem;',
    },
    sticky: true,
  },
};
