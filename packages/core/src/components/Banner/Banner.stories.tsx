import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Banner, Button, Flex, VFlex } from '../';
import { lorem } from '../../../stories/utils/fillerTexts';
import Cookies from 'js-cookie';

const meta: Meta<typeof Banner> = {
  title: 'Components/Feedback/Banner',
  component: Banner,
  args: {
    status: 'info',
    content: 'This is an example of Banner component content.',
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Base: Story = {};

export const Actions: Story = {
  name: 'With actions',
  args: {
    actions: (
      <>
        <Banner.Action colorScheme="blend-base">Secondary action</Banner.Action>
        <Banner.Action>Main action</Banner.Action>
      </>
    ),
  },
};

export const Subtle: Story = {
  name: 'Subtle variant',
  args: {
    status: 'success',
    content: 'The comment was created successfully.',
    actions: (
      <Banner.SubtleAction onClick={() => console.info('Clicked!')}>
        Undo
      </Banner.SubtleAction>
    ),
    subtle: true,
  },
};

const cookieId = 'genesys-ui-box-message-cookie-example';
export const Cookie: Story = {
  name: 'Removable based on cookies',
  args: {
    content: lorem,
    title: 'Cookie Example',
    closeTooltip: 'Remove message',
  },
  render: (args) =>
    ((args) => {
      const [show, setShow] = React.useState(
        Cookies.get(cookieId) !== 'accepted',
      );
      return (
        <VFlex>
          {show && (
            <Flex.Item>
              <Banner
                {...args}
                actions={
                  <Banner.Action
                    key="accept"
                    onClick={() => {
                      Cookies.set(cookieId, 'accepted');
                      setShow(false);
                    }}
                  >
                    Accept Terms
                  </Banner.Action>
                }
                close={() => {
                  setShow(false);
                }}
              />
            </Flex.Item>
          )}
          <Flex.Item>
            <Button
              onClick={() => {
                Cookies.remove(cookieId);
                setShow(true);
              }}
            >
              Clear the example cookie
            </Button>
          </Flex.Item>
        </VFlex>
      );
    })(args),
};

export const Custom: Story = {
  name: 'Custom based in internal components',
  render: (args) =>
    ((args) => (
      <Banner {...args} status="error">
        <Banner._Icon />
        <Banner._ContentContainer>
          <Banner._Heading>Banner heading</Banner._Heading>
          <Banner._Content>
            This is an example of Banner component content
          </Banner._Content>
          <Banner._Actions>
            <Banner.Action key="action">Action</Banner.Action>
          </Banner._Actions>
        </Banner._ContentContainer>
      </Banner>
    ))(args),
};
