import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box } from '../Box';
import { SplitLayout } from './SplitLayout';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { HFlex } from '../HFlex';

const meta: Meta<typeof SplitLayout> = {
  title: 'Components/Layout/SplitLayout',
  component: SplitLayout,
  parameters: {
    layout: 'fullscreen',
    info: {
      propTables: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof SplitLayout>;

export const Base: Story = {
  render: (args) =>
    ((props) => (
      <Box height="30rem">
        <SplitLayout {...props}>
          <div>Block One</div>
          <div>Block Two</div>
        </SplitLayout>
      </Box>
    ))(args),
};

export const Three: Story = {
  args: {
    sizes: [25, 50, 25],
  },
  render: (args) =>
    ((props) => (
      <Box height="30rem">
        <SplitLayout {...props}>
          <div>Block One</div>
          <div>Block Two</div>
          <div>Block Three</div>
        </SplitLayout>
      </Box>
    ))(args),
};

export const Nested: Story = {
  render: (args) =>
    ((props) => (
      <Box height="30rem">
        <SplitLayout {...props}>
          <SplitLayout direction={'vertical'}>
            <div>Block One</div>
            <div>Block Two</div>
          </SplitLayout>
          <div>Block Three</div>
        </SplitLayout>
      </Box>
    ))(args),
};

export const HiddenContent: Story = {
  render: () =>
    (() => {
      const [showMenu, setShowMenu] = React.useState(true);
      const [showFooter, setShowFooter] = React.useState(false);

      const toggleMenu = () => {
        setShowMenu(!showMenu);
      };

      const toggleFooter = () => {
        setShowFooter(!showFooter);
      };

      return (
        <Box height="30rem">
          <HFlex padding="cmp-md">
            <Button onClick={toggleMenu}>
              {showMenu ? 'Hide menu' : 'Hide menu'}
            </Button>
            <Button onClick={toggleFooter}>
              {showFooter ? 'Hide footer' : 'Show footer'}
            </Button>
          </HFlex>

          <SplitLayout
            sizes={showMenu ? [25, 75] : [0, 100]}
            minSize={0}
            expandToMin={false}
            gutterSize={showMenu ? 10 : 0}
            gutterAlign="center"
            snapOffset={30}
            dragInterval={1}
            direction="horizontal"
            cursor="col-resize"
          >
            <Box padding="cmp-xs">
              {showMenu && (
                <Typography.Paragraph>Menu content</Typography.Paragraph>
              )}
            </Box>
            <SplitLayout
              direction={'vertical'}
              sizes={showFooter ? [75, 25] : [100, 0]}
              cursor="col-resize"
              gutterSize={showFooter ? 10 : 0}
              gutterAlign="center"
              snapOffset={30}
              dragInterval={1}
              minSize={0}
            >
              <Box padding="cmp-xs">
                <Typography.Heading>Main area</Typography.Heading>
              </Box>
              <Box>
                {showFooter && (
                  <Typography.Code>print Hello world!</Typography.Code>
                )}
              </Box>
            </SplitLayout>
          </SplitLayout>
        </Box>
      );
    })(),
};
