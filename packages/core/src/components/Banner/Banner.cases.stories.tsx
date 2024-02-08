import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Cookies from 'js-cookie';

import { Flex } from '../Flex';
import { VFlex } from '../VFlex';
import { Button } from '../Button';
import { Banner } from './Banner';

import { lorem } from '../../../stories/utils/fillerTexts';

const meta: Meta<typeof Banner> = {
  title: 'Components/Feedback/Banner',
  component: Banner,
  args: {
    status: 'info',
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;

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
                actions={[
                  <Button
                    key="accept"
                    onClick={() => {
                      Cookies.set(cookieId, 'accepted');
                      setShow(false);
                    }}
                  >
                    Accept Terms
                  </Button>,
                ]}
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
          <Banner._Actions actions={[<Button key="action">Action</Button>]} />
        </Banner._ContentContainer>
      </Banner>
    ))(args),
};
