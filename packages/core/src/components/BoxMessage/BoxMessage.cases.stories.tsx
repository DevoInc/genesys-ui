import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Cookies from 'js-cookie';

import { BoxMessage, Button, Flex, VFlex } from '..';
import { lorem } from '../../../stories/utils/fillerTexts';

const meta: Meta<typeof BoxMessage> = {
  title: 'Components/Core/Layout/BoxMessage/Cases',
  component: BoxMessage,
  args: {
    status: 'info',
    closeTooltip: 'Remove message',
  },
};

export default meta;
type Story = StoryObj<typeof BoxMessage>;

const cookieId = 'genesys-ui-box-message-cookie-example';
export const Cookie: Story = {
  args: { content: lorem, title: 'Cookie Example' },
  render: (args) =>
    ((args) => {
      const [show, setShow] = React.useState(
        Cookies.get(cookieId) !== 'accepted',
      );
      return (
        <VFlex>
          {show && (
            <Flex.Item>
              <BoxMessage
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
