import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../Button';
import { Menu } from '../Menu';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Core/Navigation/Dropdown',
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Base: Story = {
  render: () => (
    <Dropdown placement="bottom-start" width={'200px'}>
      {({ toggle, ref, opened }) => (
        <Button
          onClick={toggle()}
          ref={ref}
          aria-haspopup={true}
          aria-expanded={opened}
        >
          TriggerElement
        </Button>
      )}
      <Menu>
        <Menu.Item label="Option 1" />
        <Menu.Item label="Option 2" />
        <Menu.Item label="Option 3" />
      </Menu>
    </Dropdown>
  ),
};

export const Nested: Story = {
  render: () => (
    <Dropdown placement="bottom-start" width={'200px'}>
      {({ toggle, ref, opened }) => (
        <Button
          onClick={toggle()}
          ref={ref}
          aria-haspopup={true}
          aria-expanded={opened}
        >
          TriggerElement
        </Button>
      )}
      <Menu>
        <Menu.Item label="Option 1" />
        <Menu.Item label="Option 2" />
        <Menu.Item label="Option 3" />
        <Dropdown placement="right-start">
          {({ toggle, ref, opened }) => (
            <Menu.Item
              expandable
              label="Option 4"
              onClick={toggle(true)}
              onMouseLeave={toggle()}
              onMouseOver={toggle(true)}
              ref={ref}
              state={opened ? 'expanded' : 'enabled'}
            />
          )}
          <Menu>
            <Menu.Item label="Option 4.1" />
            <Menu.Item label="Option 4.2" />
            <Menu.Item label="Option 4.3" />
          </Menu>
        </Dropdown>
      </Menu>
    </Dropdown>
  ),
};
