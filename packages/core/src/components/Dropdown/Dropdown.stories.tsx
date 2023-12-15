import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../Button';
import { Panel } from '../Panel';
import { Menu } from '../Menu';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Core/Navigation/Dropdown',
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const toggleMouseOut = (ev: React.MouseEvent, toggle) => {
  debugger;
  console.log(ev);
  const from = (ev.target as HTMLElement).parentElement.nextElementSibling;
  const to = ev.relatedTarget as HTMLElement;
  const isChild = from.contains(to);
  if (!isChild) {
    toggle(false);
  }
};

export const Base: Story = {
  render: () => (
    <Dropdown placement="bottom-start">
      {({ toggle, ref }) => (
        <Button onClick={() => toggle()} ref={ref}>
          TriggerElement
        </Button>
      )}
      <Panel.Container width={'200px'}>
        <Menu>
          <Menu.Item>Opcion 1</Menu.Item>
          <Menu.Item>Opcion 2</Menu.Item>
          <Menu.Item>Opcion 3</Menu.Item>
          <Dropdown placement="right-start">
            {({ toggle, ref }) => (
              <Menu.Item
                expandable
                label="Opcion 4"
                onMouseOver={() => toggle(true)}
                onMouseLeave={(ev) => toggleMouseOut(ev, toggle)}
                ref={ref}
              />
            )}
            <Panel.Container width={'200px'}>
              <Menu>
                <Menu.Item onClick={() => console.log('hjjjjj')}>
                  Opcion 4.1
                </Menu.Item>
                <Menu.Item onClick={() => console.log('hjjjjj')}>
                  Opcion 4.2
                </Menu.Item>
                <Dropdown placement="right-start">
                  {({ toggle, ref }) => (
                    <Menu.Item
                      expandable
                      label="Opcion 4.3"
                      onMouseOver={() => toggle(true)}
                      onMouseLeave={(ev) => toggleMouseOut(ev, toggle)}
                      ref={ref}
                    />
                  )}
                  <Panel.Container width={'200px'}>
                    <Menu>
                      <Menu.Item onClick={() => console.log('hjjjjj')}>
                        Opcion 4.3.1
                      </Menu.Item>
                      <Menu.Item onClick={() => console.log('hjjjjj')}>
                        Opcion 4.3.2
                      </Menu.Item>
                      <Menu.Item onClick={() => console.log('hjjjjj')}>
                        Opcion 4.3.3.x
                      </Menu.Item>
                      <Dropdown placement="right-start">
                        {({ toggle, ref }) => (
                          <Menu.Item
                            expandable
                            label="Opcion 4.3.3"
                            onMouseOver={() => toggle(true)}
                            onMouseLeave={(ev) => toggleMouseOut(ev, toggle)}
                            ref={ref}
                          />
                        )}
                        <Panel.Container width={'200px'}>
                          <Menu>
                            <Menu.Item onClick={() => console.log('hjjjjj')}>
                              Opcion 4.3.3.1
                            </Menu.Item>
                            <Menu.Item onClick={() => console.log('hjjjjj')}>
                              Opcion 4.3.3.2
                            </Menu.Item>
                          </Menu>
                        </Panel.Container>
                      </Dropdown>
                    </Menu>
                  </Panel.Container>
                </Dropdown>
                <Menu.Item onClick={() => console.log('hjjjjj')}>
                  Opcion 4.4
                </Menu.Item>
              </Menu>
            </Panel.Container>
          </Dropdown>
        </Menu>
      </Panel.Container>
    </Dropdown>
  ),
};
