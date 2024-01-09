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
  render: () => {
    const dropdownId = 'base';
    return (
      <Dropdown id={dropdownId} placement="bottom-start">
        {({ toggle, ref, isOpened }) => (
          <Button
            aria-controls={dropdownId}
            aria-expanded={isOpened}
            aria-haspopup={true}
            onClick={toggle}
            ref={ref}
            state={isOpened ? 'expanded' : undefined}
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
    );
  },
};

export const OnHover: Story = {
  render: () => {
    const dropdownId = 'on-hover';
    return (
      <Dropdown appendTo={null} id={dropdownId} placement="bottom-start">
        {({ toggle, ref, isOpened, setOpened }) => (
          <Button
            aria-controls={dropdownId}
            aria-expanded={isOpened}
            aria-haspopup={true}
            onClick={toggle}
            onMouseOver={() => setOpened(true)}
            onMouseLeave={() => setOpened(false)}
            ref={ref}
            state={isOpened ? 'expanded' : undefined}
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
    );
  },
};

export const Nested: Story = {
  render: () => {
    const dropdownId = 'nested';
    return (
      <Dropdown id={dropdownId} placement="bottom-start">
        {({ toggle, ref, isOpened }) => (
          <Button
            aria-controls={dropdownId}
            aria-expanded={isOpened}
            aria-haspopup={true}
            onClick={toggle}
            ref={ref}
            state={isOpened ? 'expanded' : undefined}
          >
            TriggerElement
          </Button>
        )}
        <Dropdown.Panel>
          <Menu>
            <Menu.Item label="Option 1" />
            <Menu.Item label="Option 2" />
            <Menu.Item label="Option 3" />
            <Dropdown id={`${dropdownId}-1`} appendTo={null}>
              {({ toggle, ref, isOpened }) => (
                <Menu.Item
                  aria-controls={`${dropdownId}-1`}
                  aria-expanded={isOpened}
                  aria-haspopup={true}
                  expandable
                  label="Option 4"
                  onClick={toggle}
                  ref={ref}
                  state={isOpened ? 'expanded' : undefined}
                />
              )}
              <Dropdown.Panel>
                <Menu>
                  <Menu.Item label="Option 4.1" />
                  <Menu.Item label="Option 4.2" />
                  <Menu.Item label="Option 4.3" />
                  <Dropdown id={`${dropdownId}-2`} appendTo={null}>
                    {({ toggle, ref, isOpened }) => (
                      <Menu.Item
                        aria-controls={`${dropdownId}-2`}
                        aria-expanded={isOpened}
                        aria-haspopup={true}
                        expandable
                        label="Option 4.3.1"
                        onClick={toggle}
                        ref={ref}
                        state={isOpened ? 'expanded' : undefined}
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
    );
  },
};

export const ComplexPanel: Story = {
  render: () => {
    const dropdownId = 'complex-panel';
    return (
      <Dropdown id={dropdownId} placement="bottom-start">
        {({ toggle, ref, isOpened }) => (
          <Button
            aria-controls={dropdownId}
            aria-expanded={isOpened}
            aria-haspopup={true}
            onClick={toggle}
            ref={ref}
            state={isOpened ? 'expanded' : undefined}
          >
            TriggerElement
          </Button>
        )}
        <Dropdown.Panel width="28rem" padding="0">
          <Panel.Header bordered size="sm" title="Panel title" />
          <Panel.Body size="sm">
            <Typography.Paragraph>
              Tesseract laws of physics Rig Veda concept of the number one
              quasar light years? Citizens of distant epochs rich in heavy atoms
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
    );
  },
};
