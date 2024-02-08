import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '..';
import { useTabsConfig } from '.';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Navigation/Tabs/Hooks',
  component: Tabs,
  args: {
    colorScheme: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// import { TabsAside } from './components';
// import { useTabsConfig, UseTabsConfigProps } from './hooks/useTabsConfig';
// import {
//   actionsTabsWithHookTabs,
//   defaultTabs,
//   wideTabsWithHookTabs,
// } from './__stories__/data';
// import { AsideArea, AsideButton, AsideTab } from './__stories__/components';

// import { TabsItem, TabsItemProps } from './components';

export const Base: Story = {
  args: {
    contained: true,
    'aria-label': 'DemoTabs',
  },
  render: (args) =>
    ((args) => {
      const tabs = [
        { label: 'Tiny' },
        { label: 'Tab with a very very long title' },
        { label: 'Normal tab' },
        { label: 'Another tab' },
      ];

      const tabsConfig = useTabsConfig({ tabs });

      const children = tabsConfig.map((tab, idx) => (
        <Tabs.Item {...tab} key={idx} />
      )) as never;

      return (
        <Tabs {...args}>
          {children}
          <Tabs.Aside>Aside area</Tabs.Aside>
        </Tabs>
      );
    })(args),
};

// const TemplateWithHook: Story<
//   TabsProps &
//     TabsItemProps &
//     TabsAsideProps &
//     UseTabsConfigProps & {
//       aside: typeof AsideArea | typeof AsideButton | typeof AsideTab;
//     }
// > = (args) => {};
//
// export const TabsWithHook = TemplateWithHook.bind({});
// TabsWithHook.args = {
//   ...Basic.args,
//   active: 0,
//   tabs: defaultTabs,
// };
//
// export const ActionsTabs = TemplateWithHook.bind({});
// ActionsTabs.args = {
//   ...Basic.args,
//   contained: false,
//   tabs: actionsTabsWithHookTabs,
// };
//
// export const WideTabs = TemplateWithHook.bind({});
// WideTabs.args = {
//   ...Basic.args,
//   contained: false,
//   tabs: wideTabsWithHookTabs,
//   wide: true,
// };
//
// export const WithAsideArea = TemplateWithHook.bind({});
// WithAsideArea.args = {
//   ...Basic.args,
//   aside: AsideArea,
//   contained: false,
//   tabs: defaultTabs,
//   wide: true,
// };
//
// export const WithAsideButton = TemplateWithHook.bind({});
// WithAsideButton.args = {
//   ...Basic.args,
//   aside: AsideButton,
//   contained: false,
//   tabs: defaultTabs,
// };
//
// export const WithAsideTabAppearance = TemplateWithHook.bind({});
// WithAsideTabAppearance.args = {
//   ...Basic.args,
//   aside: AsideTab,
//   contained: false,
//   tabs: defaultTabs,
// };
