import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button, Popover, Menu, Panel, Typography } from '../../components';

const meta: Meta<typeof Popover> = {
  title: 'Components/Core/Navigation/Popover',
  component: Popover,
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Base: Story = {
  render: () => {
    const popoverId = 'base';
    return (
      <Popover id={popoverId}>
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
        <Popover.Panel padding="cmp-sm">
          <Typography.Paragraph>
            This is the content of the Popover.
          </Typography.Paragraph>
        </Popover.Panel>
      </Popover>
    );
  },
};

export const WithArrow: Story = {
  render: () => {
    const popoverId = 'with-arrow';
    return (
      <Popover
        id={popoverId}
        arrow={({ placement }) => <Popover.Arrow placement={placement} />}
      >
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
        <Popover.Panel padding="cmp-sm">
          <Typography.Paragraph>
            This is the content of the Popover.
          </Typography.Paragraph>
        </Popover.Panel>
      </Popover>
    );
  },
};

export const AsDropdownMenu: Story = {
  render: () => {
    const popoverId = 'base';
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
          </Menu>
        </Popover.Panel>
      </Popover>
    );
  },
};

export const OnHover: Story = {
  render: () => {
    const popoverId = 'on-hover';
    return (
      <Popover appendTo={null} id={popoverId} placement="bottom-start">
        {({ toggle, ref, isOpened, setOpened }) => (
          <Button
            aria-controls={popoverId}
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
        <Popover.Panel>
          <Menu>
            <Menu.Item label="Option 1" />
            <Menu.Item label="Option 2" />
            <Menu.Item label="Option 3" />
          </Menu>
        </Popover.Panel>
      </Popover>
    );
  },
};

export const Nested: Story = {
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
            <Popover id={`${popoverId}-1`} appendTo={null}>
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
                  <Popover id={`${popoverId}-2`} appendTo={null}>
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
                    <Popover.Panel>
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

export const ComplexPanel: Story = {
  render: () => {
    const popoverId = 'complex-panel';
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
        <Popover.Panel width="28rem" padding="0">
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
        </Popover.Panel>
      </Popover>
    );
  },
};
