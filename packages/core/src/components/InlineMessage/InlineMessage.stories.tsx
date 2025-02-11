import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { GIRocketSpaceNasa } from '@devoinc/genesys-icons';

import { Box } from '../Box';
import { Button } from '../Button';
import { InlineMessage } from '../InlineMessage';
import { Typography } from '../Typography';
import { inlineMessageContentFS } from './__stories__/utils';
import { lorem, lorem2, lorem3 } from '../../../stories/utils/fillerTexts';

const meta: Meta<typeof InlineMessage> = {
  title: 'Components/Feedback/InlineMessage',
  component: InlineMessage,
  args: {
    placement: 'right',
    state: 'enabled',
    status: 'help',
    id: 'inline-message',
  },
  argTypes: {
    // because the storybook doesn't recognize the WithRequired utility
    id: {
      type: { required: true } as any,
    },
  },
};

export default meta;
type Story = StoryObj<typeof InlineMessage>;

export const Playground: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    children: (
      <InlineMessage.Panel>This is an inline message</InlineMessage.Panel>
    ),
  },
};

export const WithPanel: Story = {
  tags: ['isHidden'],
  render: () => {
    return (
      <InlineMessage id="with-panel">
        {({ setOpened }) => (
          <InlineMessage.Panel
            actions={[
              <Button
                colorScheme="quiet"
                key="btn-1"
                onClick={() => {
                  // eslint-disable-next-line no-alert
                  alert('Cancel');
                  setOpened(false);
                }}
              >
                Cancel
              </Button>,
              <Button
                colorScheme="accent"
                key="btn-2"
                onClick={() => {
                  // eslint-disable-next-line no-alert
                  alert('Apply');
                  setOpened(false);
                }}
              >
                Apply
              </Button>,
            ]}
            onClose={() => setOpened(false)}
            title="This is a title"
          >
            {inlineMessageContentFS}
            <Box marginTop="cmp-md">
              <Button
                colorScheme={'accent'}
                onClick={() => {
                  // eslint-disable-next-line no-alert
                  alert('Close the panel');
                  setOpened(false);
                }}
                wide
              >
                Close the panel
              </Button>
            </Box>
          </InlineMessage.Panel>
        )}
      </InlineMessage>
    );
  },
};

export const TriggerWithText: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      return (
        <InlineMessage
          {...props}
          trigger={{
            icon: <GIRocketSpaceNasa />,
            text: 'Text',
            secondaryText: 'secondary text',
          }}
        >
          {({ setOpened }) => (
            <InlineMessage.Panel
              onClose={() => setOpened(false)}
              title="Inline message heading"
            >
              <Typography.Paragraph>{lorem}</Typography.Paragraph>
            </InlineMessage.Panel>
          )}
        </InlineMessage>
      );
    })(args),
};

export const CustomTrigger: Story = {
  tags: ['isHidden'],
  render: () => {
    return (
      <InlineMessage
        id="custom-trigger"
        status="error"
        trigger={{
          Component: <Button colorScheme="error">Custom trigger</Button>,
        }}
      >
        {({ setOpened }) => (
          <InlineMessage.Panel
            onClose={() => setOpened(false)}
            title="Inline message heading"
          >
            <Typography.Paragraph>{lorem}</Typography.Paragraph>
          </InlineMessage.Panel>
        )}
      </InlineMessage>
    );
  },
};

export const Banner: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      return (
        <InlineMessage {...props} status={props.status}>
          {({ setOpened }) => (
            <Box
              maxWidth="40rem"
              minWidth="30rem"
              maxHeight="30rem"
              overflowY={'auto'}
            >
              <InlineMessage.Banner
                actions={[
                  <Button
                    colorScheme="blend-base"
                    key="BannerAction-1"
                    onClick={() => {
                      // eslint-disable-next-line no-alert
                      alert('Apply');
                      setOpened(false);
                    }}
                  >
                    Apply
                  </Button>,
                ]}
                content={lorem}
                title="Banner one"
                {...props}
              />
              <InlineMessage.Banner
                content={lorem2}
                title="Banner two"
                {...props}
              />
              <InlineMessage.Banner
                actions={[
                  <Button
                    colorScheme="blend-base"
                    key="BannerAction-1"
                    onClick={() => {
                      // eslint-disable-next-line no-alert
                      alert('Apply');
                      setOpened(false);
                    }}
                  >
                    Apply
                  </Button>,
                ]}
                content={lorem3}
                title="Banner three"
                {...props}
              />
            </Box>
          )}
        </InlineMessage>
      );
    })(args),
};
