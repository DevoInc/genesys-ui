import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { lorem } from '../../../stories/utils/fillerTexts';

import { Box } from '../Box';
import { SplitLayout } from './SplitLayout';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { HFlex } from '../HFlex';
import { Divider } from '../Divider';
import { VFlex } from '../VFlex';

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
      <Box height="20rem">
        <SplitLayout {...props}>
          <Box padding="cmp-md">
            <Typography.Paragraph>Block one</Typography.Paragraph>
          </Box>
          <Box padding="cmp-md">
            <Typography.Paragraph>Block two</Typography.Paragraph>
          </Box>
        </SplitLayout>
      </Box>
    ))(args),
};

export const BaseWithoutHeight: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <Box>
        <SplitLayout {...props}>
          <Box padding="cmp-md">
            <Typography.Paragraph>{lorem}</Typography.Paragraph>
          </Box>
          <Box padding="cmp-md">
            <Typography.Paragraph>Block two</Typography.Paragraph>
          </Box>
        </SplitLayout>
      </Box>
    ))(args),
};

export const WithoutMinSizeBad: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <Box height="20rem">
        <SplitLayout {...props} expandToMin={false} minSize={0}>
          <Box padding="cmp-md">
            <Typography.Paragraph>Block one</Typography.Paragraph>
          </Box>
          <Box padding="cmp-md">
            <Typography.Paragraph>Block two</Typography.Paragraph>
          </Box>
        </SplitLayout>
      </Box>
    ))(args),
};

export const WithoutMinSizeGood: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <Box height="20rem">
        <SplitLayout {...props} expandToMin={false} minSize={0}>
          <Box overflow="hidden">
            <Box padding="cmp-md">
              <Typography.Paragraph>Block one</Typography.Paragraph>
            </Box>
          </Box>
          <Box overflow="hidden">
            <Box padding="cmp-md">
              <Typography.Paragraph>Block two</Typography.Paragraph>
            </Box>
          </Box>
        </SplitLayout>
      </Box>
    ))(args),
};

export const Three: Story = {
  name: 'Three blocks',
  args: {
    sizes: [25, 50, 25],
  },
  render: (args) =>
    ((props) => (
      <Box height="20rem">
        <SplitLayout {...props}>
          <Box padding="cmp-md">
            <Typography.Paragraph>Block one</Typography.Paragraph>
          </Box>
          <Box padding="cmp-md">
            <Typography.Paragraph>Block two</Typography.Paragraph>
          </Box>
          <Box padding="cmp-md">
            <Typography.Paragraph>Block three</Typography.Paragraph>
          </Box>
        </SplitLayout>
      </Box>
    ))(args),
};

export const Nested: Story = {
  name: 'Nested blocks',
  render: (args) =>
    ((props) => (
      <Box height="30rem">
        <SplitLayout {...props}>
          <SplitLayout direction={'vertical'}>
            <Box padding="cmp-md">
              <Typography.Paragraph>Block one</Typography.Paragraph>
            </Box>
            <Box padding="cmp-md">
              <Typography.Paragraph>Block two</Typography.Paragraph>
            </Box>
          </SplitLayout>
          <Box padding="cmp-md">
            <Typography.Paragraph>Block three</Typography.Paragraph>
          </Box>
        </SplitLayout>
      </Box>
    ))(args),
};

export const HiddenContent: Story = {
  name: 'Dynamic content',
  render: (args) =>
    ((args) => {
      const [showMenu, setShowMenu] = React.useState(true);
      const [showFooter, setShowFooter] = React.useState(false);

      const toggleMenu = () => {
        setShowMenu(!showMenu);
      };

      const toggleFooter = () => {
        setShowFooter(!showFooter);
      };

      return (
        <VFlex spacing="0">
          <HFlex>
            <Button onClick={toggleMenu}>
              {showMenu ? 'Hide menu' : 'Show menu'}
            </Button>
            <Button onClick={toggleFooter}>
              {showFooter ? 'Hide footer' : 'Show footer'}
            </Button>
          </HFlex>
          <Divider margin="cmp-md 0 0 0" colorScheme="weak" />
          <Box height="30rem">
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
              <Box
                overflow="hidden"
                styles="background-color: rgba(63, 187, 226, 0.2)"
              >
                <Box padding="cmp-sm">
                  {showMenu && (
                    <Typography.Paragraph>Menu</Typography.Paragraph>
                  )}
                </Box>
              </Box>
              <SplitLayout
                {...args}
                direction={'vertical'}
                sizes={showFooter ? [75, 25] : [100, 0]}
                cursor="col-resize"
                gutterSize={showFooter ? 10 : 0}
                gutterAlign="center"
                snapOffset={30}
                dragInterval={1}
                minSize={0}
              >
                <Box
                  overflow="hidden"
                  styles="background-color: rgba(182, 23, 226, 0.2)"
                >
                  <Box padding="cmp-sm">
                    <Typography.Paragraph>Main</Typography.Paragraph>
                  </Box>
                </Box>
                <Box
                  overflow="hidden"
                  styles="background-color: rgba(51, 255, 159, 0.2);"
                >
                  {showFooter && (
                    <Box padding="cmp-sm">
                      <Typography.Paragraph>Footer</Typography.Paragraph>
                    </Box>
                  )}
                </Box>
              </SplitLayout>
            </SplitLayout>
          </Box>
        </VFlex>
      );
    })(args),
};
