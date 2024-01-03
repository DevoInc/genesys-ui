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
      {({ toggle, ref, isOpened, setOpened }) => (
        <Button
          aria-expanded={isOpened}
          aria-haspopup={true}
          onClick={toggle}
          onMouseOver={() => setOpened(true)}
          ref={ref}
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
      {({ toggle, ref, isOpened, setOpened }) => (
        <Button
          aria-expanded={isOpened}
          aria-haspopup={true}
          onClick={toggle}
          onMouseOver={() => setOpened(true)}
          ref={ref}
        >
          TriggerElement
        </Button>
      )}
      <Menu>
        <Menu.Item label="Option 1" />
        <Menu.Item label="Option 2" />
        <Menu.Item label="Option 3" />
        <Dropdown placement="right-start">
          {({ toggle, ref, isOpened, setOpened }) => (
            <Menu.Item
              expandable
              label="Option 4"
              onClick={() => setOpened(true)}
              onMouseLeave={toggle}
              onMouseOver={() => setOpened(true)}
              ref={ref}
              state={isOpened ? 'expanded' : 'enabled'}
            />
          )}
          <Menu>
            <Menu.Item label="Option 4.1" />
            <Menu.Item label="Option 4.2" />
            <Menu.Item label="Option 4.3" />
            <Dropdown placement="right-start">
              {({ toggle, ref, isOpened, setOpened }) => (
                <Menu.Item
                  expandable
                  label="Option 4.3.1"
                  onClick={() => setOpened(true)}
                  onMouseLeave={toggle}
                  onMouseOver={() => setOpened(true)}
                  ref={ref}
                  state={isOpened ? 'expanded' : 'enabled'}
                />
              )}
              <Menu>
                <Menu.Item label="Option 4.3.1" />
                <Menu.Item label="Option 4.3.3" />
                <Menu.Item label="Option 4.3.2" />
              </Menu>
            </Dropdown>
          </Menu>
        </Dropdown>
      </Menu>
    </Dropdown>
  ),
};
