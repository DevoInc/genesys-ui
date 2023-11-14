import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, Button, IconButton, Popper, Typography } from '../';
import { lorem } from '../../../stories/utils/fillerTexts';

const meta: Meta<typeof Popper> = {
  title: 'Components/Core/Popper',
  component: Popper,
  args: {
    id: 'story-id',
    placement: 'auto',
    offset: [0, 10],
    strategy: 'absolute',
  },
};

export default meta;
type Story = StoryObj<typeof Popper>;

export const Base: Story = {
  render: (args) =>
    ((args) => {
      const [isVisible, setIsVisible] = React.useState(false);

      return (
        <div style={{ textAlign: 'center' }}>
          <Popper
            {...args}
            visible={isVisible}
            setIsVisible={setIsVisible}
            trigger={
              <IconButton
                hasBoldIcon
                aria-expanded={isVisible}
                aria-controls="story-id"
                aria-haspopup="true"
                icon="gi-menu_alt"
                tooltip="Open Popper"
              />
            }
          >
            <Box elevation="activated" padding="cmp-sm" width="24rem">
              <Typography.Paragraph>{lorem}</Typography.Paragraph>
              <Box marginTop="cmp-md">
                <Button
                  colorScheme="accent"
                  onClick={() => {
                    setIsVisible(false);
                    window.alert('Hello world!');
                  }}
                  wide
                >
                  Do something
                </Button>
              </Box>
            </Box>
          </Popper>
        </div>
      );
    })(args),
};
