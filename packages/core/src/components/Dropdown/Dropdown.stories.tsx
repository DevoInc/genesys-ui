import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button, Dropdown, Menu, Panel, Typography } from '../../components';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Core/Navigation/Dropdown',
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Base: Story = {
  render: () => (
    <Dropdown id="base" placement="bottom-start">
      {({ toggle, ref, isOpened }) => (
        <Button
          aria-expanded={isOpened}
          aria-haspopup={true}
          onClick={toggle}
          ref={ref}
        >
          TriggerElement
        </Button>
      )}
      <Dropdown.Panel>
        <Menu>
          <Menu.Item label="Option 1" />
          <Menu.Item label="Option 2" />
          <Menu.Item label="Option 3" />
        </Menu>
      </Dropdown.Panel>
    </Dropdown>
  ),
};

export const OnHover: Story = {
  render: () => (
    <Dropdown id="base" placement="bottom-start">
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
      <Dropdown.Panel>
        <Menu>
          <Menu.Item label="Option 1" />
          <Menu.Item label="Option 2" />
          <Menu.Item label="Option 3" />
        </Menu>
      </Dropdown.Panel>
    </Dropdown>
  ),
};

export const Nested: Story = {
  render: () => (
    <Dropdown id="nested" placement="bottom-start">
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
      <Dropdown.Panel>
        <Menu>
          <Menu.Item label="Option 1" />
          <Menu.Item label="Option 2" />
          <Menu.Item label="Option 3" />
          <Dropdown id="nested-one">
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
            <Dropdown.Panel>
              <Menu>
                <Menu.Item label="Option 4.1" />
                <Menu.Item label="Option 4.2" />
                <Menu.Item label="Option 4.3" />
                <Dropdown id="nested-two">
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
                  <Dropdown.Panel>
                    <Menu>
                      <Menu.Item label="Option 4.3.1" />
                      <Menu.Item label="Option 4.3.3" />
                      <Menu.Item label="Option 4.3.2" />
                    </Menu>
                  </Dropdown.Panel>
                </Dropdown>
              </Menu>
            </Dropdown.Panel>
          </Dropdown>
        </Menu>
      </Dropdown.Panel>
    </Dropdown>
  ),
};

export const ComplexPanel: Story = {
  render: () => (
    <Dropdown id="complex-panel" placement="bottom-start">
      {({ toggle, ref, isOpened }) => (
        <Button
          aria-expanded={isOpened}
          aria-haspopup={true}
          onClick={toggle}
          ref={ref}
        >
          TriggerElement
        </Button>
      )}
      <Dropdown.Panel width="28rem" padding="0">
        <Panel.Header bordered size="sm" title="Panel title" />
        <Panel.Body size="sm">
          <Typography.Paragraph>
            Tesseract laws of physics Rig Veda concept of the number one quasar
            light years? Citizens of distant epochs rich in heavy atoms
            Apollonius
          </Typography.Paragraph>
          <Menu>
            <Menu.Item label="Option 1" />
            <Menu.Item label="Option 2" />
            <Menu.Item label="Option 3" />
          </Menu>
        </Panel.Body>
      </Dropdown.Panel>
    </Dropdown>
  ),
};
