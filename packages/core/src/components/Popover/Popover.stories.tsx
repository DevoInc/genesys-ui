import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Popover } from './Popover';
import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { HFlex } from '../HFlex';
import { Link } from '../Link';
import { Menu } from '../Menu';
import { Panel } from '../Panel';
import { Typography } from '../Typography';
import { VFlex } from '../VFlex';

const meta: Meta<typeof Popover> = {
  title: 'Components/Layout/Popover',
  component: Popover,
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Playground: Story = {
  parameters: {
    layout: 'centered',
  },
  render: (args) => {
    const popoverId = 'base';
    return (
      <Popover {...args} id={popoverId}>
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
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: (args) =>
    ((props) => {
      const popoverId = 'with-arrow';
      return (
        <Popover
          {...props}
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
              Explorations from which we spring citizens of distant epochs
              hearts of the stars something incredible is waiting to be known
              paroxysm of global death.
            </Typography.Paragraph>
          </Popover.Panel>
        </Popover>
      );
    })(args),
};

export const AsDropdownMenu: Story = {
  tags: ['isHidden'],
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
  tags: ['isHidden'],
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
  tags: ['isHidden'],
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
  tags: ['isHidden'],
  render: () =>
    (() => {
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
                {({ ref, isOpened, setOpened }) => {
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
    })(),
};

export const Delay: Story = {
  tags: ['delay'],
  render: () =>
    (() => {
      const popoverIdPrefix = 'with-delay-';

      const [popoverOpen, setPopoverOpen] = React.useState({});

      const texts = [
        {
          id: 'first',
          title: 'First chunk',
          body: `He gazed at her and saw millions of stars reflected in those
          eyes, dark as deep wells.`,
        },
        {
          id: 'second',
          title: 'Second chunk',
          body: `The lights of the city, hundreds of kilometers away, were fading
          as they breathed in the cold air of the mountaintop.`,
        },
        {
          id: 'third',
          title: 'Third chunk',
          body: `He knew that it would not be good, but like the toad in the pot
          staring mesmerized at the flame, he sat there letting time pass.`,
        },
      ];

      const renderPopoverWithDelay = (idx, delayOnOpen, delayOnClose) => (
        <VFlex>
          <Typography.Paragraph>
            delayOnOpen: {delayOnOpen} ms.
          </Typography.Paragraph>
          <Typography.Paragraph>
            delayOnClose: {delayOnClose} ms.
          </Typography.Paragraph>
          {texts.map(({ id, title, body }) => {
            const popid = popoverIdPrefix + idx + id;
            return (
              <Popover
                id={popid}
                key={popid}
                placement='left-start'
                delayOnOpen={delayOnOpen}
                delayOnClose={delayOnClose}
              >
                {({ ref, setOpened }) => {
                  const r = React.useRef(null);
                  r.current = setOpened;
                  popoverOpen[popid] = r;
                  setPopoverOpen(popoverOpen);

                  return (
                    <Link
                      onMouseOver={() => popoverOpen[popid].current(true)}
                      onMouseMove={() => popoverOpen[popid].current(true)}
                      onMouseOut={() => popoverOpen[popid].current(false)}
                      ref={ref}
                    >
                      {title}
                    </Link>
                  );
                }}
                <Popover.Panel>
                  <Typography.Heading>{title}</Typography.Heading>
                  <Typography.Paragraph>{body}</Typography.Paragraph>
                </Popover.Panel>
              </Popover>
            );
          })}
        </VFlex>
      );

      return (
        <HFlex justifyContent='space-between'>
          {renderPopoverWithDelay(1, 0, 0)}
          {renderPopoverWithDelay(2, 200, 200)}
          {renderPopoverWithDelay(3, 1000, 0)}
        </HFlex>
      );
    })(),
};

export const ComplexPanel: Story = {
  tags: ['isHidden'],
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
  tags: ['isHidden'],
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
