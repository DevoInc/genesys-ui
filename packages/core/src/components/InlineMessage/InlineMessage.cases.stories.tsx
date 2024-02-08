import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, Button, Typography, InlineMessage } from '..';
import { inlineMessageContentFS } from './__stories__/utils';
import { lorem, lorem2, lorem3 } from '../../../stories/utils/fillerTexts';

const meta: Meta<typeof InlineMessage> = {
  title: 'Components/Feedback/InlineMessage/Cases',
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

export const WithPanel: Story = {
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
                  alert('Cancel');
                  setOpened(false);
                }}
              >
                Cancel
              </Button>,
              <Button
                colorScheme="neutral"
                key="btn-2"
                onClick={() => {
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
                  alert('Hello world!');
                  setOpened(false);
                }}
                wide
              />
            </Box>
          </InlineMessage.Panel>
        )}
      </InlineMessage>
    );
  },
};

export const TriggerWithText: Story = {
  name: 'Default trigger with text',
  render: (args) =>
    ((args) => {
      return (
        <InlineMessage
          {...args}
          trigger={{
            icon: 'gi-rocket_space_nasa',
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
  render: (args) =>
    ((args) => {
      return (
        <InlineMessage {...args} status={args.status}>
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
                    key="BannerAction-1"
                    onClick={() => {
                      alert('Apply');
                      setOpened(false);
                    }}
                  >
                    Apply
                  </Button>,
                ]}
                content={lorem}
                title="Banner one"
                {...args}
              />
              <InlineMessage.Banner
                content={lorem2}
                title="Banner two"
                {...args}
              />
              <InlineMessage.Banner
                actions={[
                  <Button
                    key="BannerAction-1"
                    onClick={() => {
                      alert('Apply');
                      setOpened(false);
                    }}
                  >
                    Apply
                  </Button>,
                ]}
                content={lorem3}
                title="Banner three"
                {...args}
              />
            </Box>
          )}
        </InlineMessage>
      );
    })(args),
};
