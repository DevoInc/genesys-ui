import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Button,
  Popover,
  Menu,
  Panel,
  Typography,
  ButtonGroup,
} from '../../components';

const meta: Meta<typeof Popover> = {
  title: 'Components/Layout/Popover',
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
  name: 'With arrow',
  parameters: {
    layout: 'centered',
  },
  render: (args) => {
    const popoverId = 'with-arrow';
    return (
      <Popover
        {...args}
        id={popoverId}
        arrowConfig={{
          component: ({ placement, size }) => (
            <Popover.Arrow placement={placement} size={size} />
          ),
        }}
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
            Explorations from which we spring citizens of distant epochs hearts
            of the stars something incredible is waiting to be known paroxysm of
            global death.
          </Typography.Paragraph>
        </Popover.Panel>
      </Popover>
    );
  },
};

export const AsDropdownMenu: Story = {
  name: 'As dropdown menu',
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

export const AccessToStateFromContent: Story = {
  name: 'Access to state from content',
  render: () => {
    const popoverId = 'access-to-state';
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
        {({ setOpened }) => (
          <Popover.Panel padding="cmp-sm">
            <Typography.Paragraph gutterBottom="cmp-md">
              This is the content of the Popover.
            </Typography.Paragraph>
            <ButtonGroup justifyContent="flex-end">
              <Button
                colorScheme="quiet"
                onClick={() => {
                  // eslint-disable-next-line no-alert
                  alert('Cancel!');
                  setOpened(false);
                }}
              >
                Cancel
              </Button>
              <Button
                colorScheme="accent"
                onClick={() => {
                  // eslint-disable-next-line no-alert
                  alert('Apply!');
                  setOpened(false);
                }}
              >
                Apply
              </Button>
            </ButtonGroup>
          </Popover.Panel>
        )}
      </Popover>
    );
  },
};

export const OnHover: Story = {
  name: 'On hover',
  render: () => {
    const popoverId = 'on-hover';

    const setOpenedMenu = React.useRef(null);
    const setOpenedSubMenu = React.useRef(null);

    const closeSubmenu = React.useCallback(() => {
      setOpenedSubMenu.current?.(false);
    }, [setOpenedSubMenu.current]);

    return (
      <Popover id={popoverId} placement="bottom-start">
        {({ toggle, ref, isOpened, setOpened }) => {
          setOpenedMenu.current = setOpened;
          return (
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
          );
        }}
        <Popover.Panel>
          <Menu>
            <Menu.Item label="Option 1" onMouseOver={closeSubmenu} />
            <Menu.Item label="Option 2" onMouseOver={closeSubmenu} />
            <Menu.Item label="Option 3" onMouseOver={closeSubmenu} />
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
              {({ toggle, ref, isOpened, setOpened }) => {
                setOpenedSubMenu.current = setOpened;
                return (
                  <Menu.Item
                    aria-controls={`${popoverId}-1`}
                    aria-expanded={isOpened}
                    aria-haspopup={true}
                    expandable
                    label="Option 4"
                    onClick={() => setOpenedSubMenu.current(!isOpened)}
                    onMouseOver={() => setOpenedSubMenu.current(true)}
                    ref={ref}
                    state={isOpened ? 'expanded' : undefined}
                  />
                );
              }}
              <Popover.Panel
                onMouseLeave={() => setOpenedSubMenu.current(false)}
              >
                <Menu>
                  <Menu.Item label="Option 4.1" />
                  <Menu.Item label="Option 4.2" />
                  <Menu.Item label="Option 4.3" />
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
  name: 'Complex panel',
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
            <Typography.Paragraph gutterBottom="cmp-md">
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

export const DisabledOutsideEvent: Story = {
  name: 'Disabled outside event',
  render: () => {
    const popoverId = 'disabled-click';
    return (
      <Popover id={popoverId} disableOutsideEvent>
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
        {({ setOpened }) => (
          <Popover.Panel padding="cmp-sm">
            <Typography.Paragraph gutterBottom="cmp-md">
              This is the content of the Popover.
            </Typography.Paragraph>
            <ButtonGroup justifyContent="flex-end">
              <Button onClick={() => setOpened(false)}>
                Close the Popover
              </Button>
            </ButtonGroup>
          </Popover.Panel>
        )}
      </Popover>
    );
  },
};
