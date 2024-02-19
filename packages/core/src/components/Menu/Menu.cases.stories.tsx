import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Menu } from '.';
import { Popover } from '../Popover';
import { Button } from '../Button';

const meta: Meta<typeof Menu> = {
  title: 'Components/Navigation/Menu/Cases',
  component: Menu,
  subcomponents: {
    Heading: Menu.Heading,
    Item: Menu.Item,
    Separator: Menu.Separator,
  },
  args: {
    cmpRole: 'menu',
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Selectable: Story = {
  render: () =>
    (() => {
      const [selected, setSelected] = React.useState('one');
      const onOptionChange = (e) => {
        const target = e.target;
        if (target.checked) {
          setSelected(target.value);
        }
      };
      return (
        <Menu>
          <Menu.Item
            label="Option one"
            selectionScheme="single"
            onChange={onOptionChange}
            state={selected === 'one' ? 'selected' : 'enabled'}
            name="options"
            value="one"
          />
          <Menu.Item
            label="Option two"
            selectionScheme="single"
            onChange={onOptionChange}
            state={selected === 'two' ? 'selected' : 'enabled'}
            name="options"
            value="two"
          />
          <Menu.Item
            label="Option three"
            selectionScheme="single"
            onChange={onOptionChange}
            state={selected === 'three' ? 'selected' : 'enabled'}
            name="options"
            value="three"
          />
        </Menu>
      );
    })(),
};

export const AsNavigation: Story = {
  name: 'As navigation',
  render: () => (
    <Menu cmpRole="nav">
      <Menu.Heading>Platform</Menu.Heading>
      <Menu.Item
        href="https://www.devo.com/applications/cloud-siem/"
        label="Security Operations"
        target="_blank"
      />
      <Menu.Item
        href="https://www.devo.com/applications/soar/"
        label="SOAR"
        target="_blank"
      />
      <Menu.Item
        href="https://www.devo.com/applications/behavior-analytics/"
        label="Behavior Analytics"
        target="_blank"
      />
      <Menu.Item
        href="https://www.devo.com/applications/service-operations/"
        label="Service Operations"
        target="_blank"
      />
      <Menu.Item
        href="https://www.devo.com/applications/deeptrace/"
        label="DeepTrace"
        target="_blank"
      />
      <Menu.Heading>Use cases</Menu.Heading>
      <Menu.Item
        href="https://www.devo.com/solutions/security/"
        label="Security"
        target="_blank"
      />
      <Menu.Item
        href="https://www.devo.com/solutions/it/"
        label="IT Operations"
        target="_blank"
      />
    </Menu>
  ),
};

export const AsDropdownMenu: Story = {
  name: 'As dropdown menu',
  render: () => {
    const popoverId = 'nested';
    return (
      <Popover id={popoverId} placement="bottom-start">
        {({ toggle, ref, isOpened }) => (
          <Button
            aria-controls={popoverId}
            aria-expanded={isOpened}
            aria-haspopup={true}
            onClick={toggle}
            ref={ref}
            state={isOpened ? 'expanded' : undefined}
          >
            TriggerElement
          </Button>
        )}
        <Popover.Panel>
          <Menu>
            <Menu.Item label="Option 1" />
            <Menu.Item label="Option 2" />
            <Menu.Item label="Option 3" />
            <Popover
              id={`${popoverId}-1`}
              appendTo={null}
              modifiers={[
                {
                  name: 'offset',
                  options: {
                    offset: [0, 4],
                  },
                },
              ]}
            >
              {({ toggle, ref, isOpened }) => (
                <Menu.Item
                  aria-controls={`${popoverId}-1`}
                  aria-expanded={isOpened}
                  aria-haspopup={true}
                  expandable
                  label="Option 4"
                  onClick={toggle}
                  ref={ref}
                  state={isOpened ? 'expanded' : undefined}
                />
              )}
              <Popover.Panel>
                <Menu>
                  <Menu.Item label="Option 4.1" />
                  <Menu.Item label="Option 4.2" />
                  <Menu.Item label="Option 4.3" />
                  <Popover
                    id={`${popoverId}-2`}
                    appendTo={null}
                    modifiers={[
                      {
                        name: 'offset',
                        options: {
                          offset: [0, 4],
                        },
                      },
                    ]}
                  >
                    {({ toggle, ref, isOpened }) => (
                      <Menu.Item
                        aria-controls={`${popoverId}-2`}
                        aria-expanded={isOpened}
                        aria-haspopup={true}
                        expandable
                        label="Option 4.3.1"
                        onClick={toggle}
                        ref={ref}
                        state={isOpened ? 'expanded' : undefined}
                      />
                    )}
                    <Popover.Panel as={'ul'}>
                      <Menu>
                        <Menu.Item label="Option 4.3.1" />
                        <Menu.Item label="Option 4.3.3" />
                        <Menu.Item label="Option 4.3.2" />
                      </Menu>
                    </Popover.Panel>
                  </Popover>
                </Menu>
              </Popover.Panel>
            </Popover>
          </Menu>
        </Popover.Panel>
      </Popover>
    );
  },
};
