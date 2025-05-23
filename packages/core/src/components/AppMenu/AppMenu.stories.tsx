import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { appMenuData } from './__stories__';
import { Popover } from '../Popover';
import { AppMenu } from './';

const meta: Meta<typeof AppMenu> = {
  title: 'Components/Navigation/AppMenu',
  component: AppMenu,
  parameters: {
    padding: '0',
    bgMode: 'app',
  },
  args: {
    menuRole: 'nav',
  },
};

export default meta;
type Story = StoryObj<typeof AppMenu>;

export const Playground: Story = {
  args: {
    children: (
      <>
        <AppMenu.Header
          logoAlt="Devo Logo"
          logo="../../../../../.storybook/assets/images/devo-logo-dark.svg"
          collapsedLogo="../../../../../.storybook/assets/images/devo-logo-symbol-dark.svg"
        />
        <AppMenu.Body>
          {appMenuData.map((menuItem, idx) =>
            menuItem.popoverContent ? (
              <Popover
                key={idx}
                id={menuItem.id}
                placement="right"
                modifiers={[{ name: 'offset', options: { offset: [0, 8] } }]}
              >
                {({ ref, isOpened, toggle }) => (
                  <AppMenu.Item
                    ref={ref}
                    counter={menuItem.counter}
                    expandable={Boolean(menuItem.popoverContent)}
                    href={menuItem.href}
                    icon={menuItem.icon}
                    isBeta={menuItem.isBeta}
                    label={menuItem.label}
                    onClick={toggle}
                    state={
                      menuItem.isCurrent
                        ? 'active'
                        : isOpened
                          ? 'expanded'
                          : 'enabled'
                    }
                    tooltip={menuItem.tooltip}
                  />
                )}
                {menuItem.popoverContent}
              </Popover>
            ) : menuItem.isSeparator ? (
              <AppMenu.Separator key={idx} />
            ) : menuItem.isHeading ? (
              <AppMenu.Heading
                key={idx}
                text={menuItem.text}
                collapsedText={menuItem.collapsedText}
              />
            ) : (
              <AppMenu.Item
                href={menuItem.href}
                counter={menuItem.counter}
                key={idx}
                icon={menuItem.icon}
                isBeta={menuItem.isBeta}
                label={menuItem.label}
                state={menuItem.isCurrent ? 'active' : 'enabled'}
                tooltip={menuItem.tooltip}
              />
            ),
          )}
        </AppMenu.Body>
        <AppMenu.Footer />
      </>
    ),
  },
};
