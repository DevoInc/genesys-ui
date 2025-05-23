import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useTheme } from 'styled-components';

import { GIUeba } from '@devoinc/genesys-icons';
import { HFlex } from '../../../HFlex';
import { Icon } from '../../../Icon';
import { Typography } from '../../../Typography';
import { AppMenu } from '../../AppMenu';

const meta: Meta<typeof AppMenu.Header> = {
  title: 'Components/Navigation/AppMenu/Components/AppMenuHeader',
  component: AppMenu.Header,
  args: {
    logo: '../../../../../../../.storybook/assets/images/devo-logo-dark.svg',
    collapsedLogo:
      '../../../../../../../.storybook/assets/images/devo-logo-symbol-dark.svg',
    logoAlt: 'Devo Logo',
    collapsed: false,
  },
};

export default meta;
type Story = StoryObj<typeof AppMenu.Header>;

export const Playground: Story = {};

export const CustomContent: Story = {
  tags: ['isHidden'],
  args: {
    children: (
      <HFlex flex="1" spacing="cmp-xs">
        <Icon size="md">
          <GIUeba />
        </Icon>
        <Typography.Heading size="h6">App name</Typography.Heading>
      </HFlex>
    ),
  },
};

export const LogoDependingOnScheme: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      const theme = useTheme();
      return (
        <AppMenu.Header
          {...props}
          logo={
            theme.meta.scheme === 'dark'
              ? '../../../../../../../.storybook/assets/images/devo-logo.svg'
              : '../../../../../../../.storybook/assets/images/devo-logo-dark.svg'
          }
          collapsedLogo={
            theme.meta.scheme === 'dark'
              ? '../../../../../../../.storybook/assets/images/devo-logo-symbol.svg'
              : '../../../../../../../.storybook/assets/images/devo-logo-symbol-dark.svg'
          }
        />
      );
    })(args),
};
