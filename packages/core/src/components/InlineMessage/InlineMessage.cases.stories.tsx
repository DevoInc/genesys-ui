import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, Button, Typography, InlineMessage } from '..';
import { inlineMessageContentFS } from './__stories__/utils';
import { lorem, lorem2, lorem3 } from '../../../stories/utils/fillerTexts';

const meta: Meta<typeof InlineMessage> = {
  title: 'Components/Core/Feedback/InlineMessage/Cases',
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

export const WithContent: Story = {
  render: (args) =>
    ((args) => {
      const [visible, setVisible] = React.useState(false);
      return (
        <InlineMessage visible={visible} setVisible={setVisible} {...args}>
          <InlineMessage.Panel
            actions={[
              <Button
                colorScheme="quiet"
                key="btn-1"
                onClick={() => {
                  alert('Cancel');
                  setVisible(false);
                }}
              >
                Cancel
              </Button>,
              <Button
                colorScheme="neutral"
                key="btn-2"
                onClick={() => {
                  alert('Apply');
                  setVisible(false);
                }}
              >
                Apply
              </Button>,
            ]}
            onClose={() => setVisible(false)}
            title="This is a title"
            {...args}
          >
            {inlineMessageContentFS}
            <Box marginTop="cmp-md">
              <Button
                colorScheme={'accent'}
                onClick={() => {
                  alert('Hello world!');
                  setVisible(false);
                }}
                wide
              />
            </Box>
          </InlineMessage.Panel>
        </InlineMessage>
      );
    })(args),
};

export const CustomTriggerIcon: Story = {
  render: (args) =>
    ((args) => {
      const [visible, setVisible] = React.useState(false);
      return (
        <InlineMessage
          {...args}
          visible={visible}
          setVisible={setVisible}
          trigger={{
            icon: 'rocket_space_nasa',
            text: 'Text',
            secondaryText: 'secondary text',
          }}
        >
          <InlineMessage.Panel onClose={() => setVisible(false)}>
            <Typography.Paragraph>{lorem}</Typography.Paragraph>
          </InlineMessage.Panel>
        </InlineMessage>
      );
    })(args),
};

export const Banner: Story = {
  render: (args) =>
    ((args) => {
      const [visible, setVisible] = React.useState(false);
      return (
        <InlineMessage
          {...args}
          visible={visible}
          setVisible={setVisible}
          status={args.status}
        >
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
                    setVisible(false);
                  }}
                >
                  Apply
                </Button>,
              ]}
              content={lorem}
              title="Pupita ut nostrud hasta luego Lucas"
              {...args}
            />
            <InlineMessage.Banner
              content={lorem2}
              title="Condemor occaecat elit consectetur de la pradera"
              {...args}
            />
            <InlineMessage.Banner
              actions={[
                <Button
                  key="BannerAction-1"
                  onClick={() => {
                    alert('Apply');
                    setVisible(false);
                  }}
                >
                  Apply
                </Button>,
              ]}
              content={lorem3}
              title="Esta la cosa muy malar esta la cosa muy malar"
              {...args}
            />
          </Box>
        </InlineMessage>
      );
    })(args),
};
