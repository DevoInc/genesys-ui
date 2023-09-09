import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Cookies from 'js-cookie';

import { Banner, Button, Flex, VFlex } from '..';
import { lorem } from '../../../stories/utils/fillerTexts';

const meta: Meta<typeof Banner> = {
  title: 'Components/Core/Layout/Banner/Cases',
  component: Banner,
  args: {
    status: 'info',
    closeTooltip: 'Remove message',
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;

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
