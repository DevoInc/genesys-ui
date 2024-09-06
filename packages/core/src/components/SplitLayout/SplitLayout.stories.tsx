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
import { useAsyncSplitResize, useSyncSplitResize } from './hooks';
import { TSizes } from './declarations';

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
  tags: ['noWrap'],
  args: {
    showDragGhost: false,
  },
  render: (args) =>
    ((props) => {
      const [sizes, setSizes] = React.useState<TSizes>(props?.sizes);
      const { onChange } = useSyncSplitResize({ setSizes });
      return (
        <Box height="20rem">
          <SplitLayout {...props} sizes={sizes} onChange={onChange}>
            <Box overflow="hidden">
              <Box padding="cmp-md">
                <Typography.Paragraph>Left</Typography.Paragraph>
              </Box>
            </Box>
            <Box padding="cmp-md" overflow="hidden">
              <Typography.Paragraph>Right</Typography.Paragraph>
            </Box>
          </SplitLayout>
        </Box>
      );
    })(args),
};

export const BaseWithoutHeight: Story = {
  tags: ['isHidden', 'noWrap'],
  render: (args) =>
    ((props) => {
      const [sizes, setSizes] = React.useState<TSizes>(props?.sizes);
      const { onChange } = useAsyncSplitResize({ setSizes });
      return (
        <Box height="20rem">
          <SplitLayout {...props} sizes={sizes} onChange={onChange}>
            <Box padding="cmp-md">
              <Typography.Paragraph>{lorem}</Typography.Paragraph>
            </Box>
            <Box padding="cmp-md">
              <Typography.Paragraph>Block two</Typography.Paragraph>
            </Box>
          </SplitLayout>
        </Box>
      );
    })(args),
};

export const BaseWithHeight: Story = {
  tags: ['isHidden', 'noWrap'],
  render: (args) =>
    ((props) => {
      const [sizes, setSizes] = React.useState<TSizes>(props?.sizes);
      const { onChange } = useAsyncSplitResize({ setSizes });
      return (
        <Box height="20rem">
          <SplitLayout {...props} sizes={sizes} onChange={onChange}>
            <Box padding="cmp-md" overflow="auto">
              <Typography.Paragraph>{lorem}</Typography.Paragraph>
            </Box>
            <Box padding="cmp-md">
              <Typography.Paragraph>Block two</Typography.Paragraph>
            </Box>
          </SplitLayout>
        </Box>
      );
    })(args),
};

export const AsyncHook: Story = {
  tags: ['isHidden', 'noWrap'],
  render: (args) =>
    ((props) => {
      const [sizes, setSizes] = React.useState<TSizes>(props?.sizes);
      const { onChange } = useAsyncSplitResize({ setSizes });
      return (
        <Box height="20rem">
          <SplitLayout {...props} sizes={sizes} onChange={onChange}>
            <Box padding="cmp-md">
              <Typography.Paragraph>Block one</Typography.Paragraph>
            </Box>
            <Box padding="cmp-md">
              <Typography.Paragraph>Block two</Typography.Paragraph>
            </Box>
          </SplitLayout>
        </Box>
      );
    })(args),
};

export const MinSize: Story = {
  tags: ['isHidden', 'noWrap'],
  args: {
    showDragGhost: false,
  },
  render: (args) =>
    ((props) => {
      const [sizes, setSizes] = React.useState<TSizes>(props?.sizes);
      const { onChange } = useSyncSplitResize({ setSizes, min: [100, 100] });
      return (
        <Box height="20rem">
          <SplitLayout {...props} sizes={sizes} onChange={onChange}>
            <Box padding="cmp-md">
              <Typography.Paragraph>Min: 100px</Typography.Paragraph>
            </Box>
            <Box padding="cmp-md">
              <Typography.Paragraph>Min: 100px</Typography.Paragraph>
            </Box>
          </SplitLayout>
        </Box>
      );
    })(args),
};

export const WithoutMinSizeGood: Story = {
  tags: ['isHidden', 'noWrap'],
  args: {
    showDragGhost: false,
  },
  render: (args) =>
    ((props) => {
      const [sizes, setSizes] = React.useState<TSizes>(props?.sizes);
      const { onChange } = useSyncSplitResize({ setSizes });
      return (
        <Box height="20rem">
          <SplitLayout {...props} sizes={sizes} onChange={onChange}>
            <Box padding="cmp-md">
              <Typography.Paragraph>Left</Typography.Paragraph>
            </Box>
            <Box padding="cmp-md">
              <Typography.Paragraph>Right</Typography.Paragraph>
            </Box>
          </SplitLayout>
        </Box>
      );
    })(args),
};

export const WithOverflowAndPadding: Story = {
  tags: ['isHidden', 'noWrap'],
  args: {
    showDragGhost: false,
  },
  render: (args) =>
    ((props) => {
      const [sizes, setSizes] = React.useState<TSizes>(props?.sizes);
      const { onChange } = useSyncSplitResize({ setSizes });
      return (
        <Box height="20rem">
          <SplitLayout {...props} sizes={sizes} onChange={onChange}>
            <Box overflow="hidden">
              <Box padding="cmp-md">
                <Typography.Paragraph>Left</Typography.Paragraph>
              </Box>
            </Box>
            <Box padding="cmp-md" overflow="hidden">
              <Typography.Paragraph>Right</Typography.Paragraph>
            </Box>
          </SplitLayout>
        </Box>
      );
    })(args),
};

export const Three: Story = {
  tags: ['isHidden', 'noWrap'],
  args: {
    sizes: ['25%', '50%', '25%'],
    showDragGhost: false,
  },
  render: (args) =>
    ((props) => {
      const [sizes, setSizes] = React.useState<TSizes>(props?.sizes);
      const { onChange } = useSyncSplitResize({ setSizes });
      return (
        <Box height="20rem">
          <SplitLayout {...props} sizes={sizes} onChange={onChange}>
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
      );
    })(args),
};

export const Nested: Story = {
  tags: ['isHidden', 'noWrap'],
  args: {
    showDragGhost: false,
  },
  render: (args) =>
    ((props) => {
      const [sizesOuter, setSizesOuter] = React.useState<TSizes>(props?.sizes);
      const { onChange: onChangeOuter } = useSyncSplitResize({
        setSizes: setSizesOuter,
      });
      const [sizesInner, setSizesInner] = React.useState<TSizes>(props?.sizes);
      const { onChange: onChangeInner } = useSyncSplitResize({
        setSizes: setSizesInner,
      });
      return (
        <Box height="30rem">
          <SplitLayout {...props} sizes={sizesOuter} onChange={onChangeOuter}>
            <SplitLayout
              direction={'vertical'}
              sizes={sizesInner}
              onChange={onChangeInner}
              showDragGhost={false}
            >
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
      );
    })(args),
};

export const HiddenContent: Story = {
  tags: ['isHidden', 'noWrap'],
  render: () =>
    (() => {
      const [sizesOuter, setSizesOuter] = React.useState<TSizes>([100, 'auto']);
      const { onChange: onChangeOuter } = useSyncSplitResize({
        setSizes: setSizesOuter,
      });
      const [sizesInner, setSizesInner] = React.useState<TSizes>(['auto', 100]);
      const { onChange: onChangeInner } = useSyncSplitResize({
        setSizes: setSizesInner,
      });

      const hasMenu = sizesOuter.length === 2;
      const hasFooter = sizesInner.length === 2;

      return (
        <VFlex spacing="0" height="30rem">
          <HFlex padding="cmp-md">
            <Button
              onClick={() => {
                setSizesOuter(hasMenu ? ['auto'] : [100, 'auto']);
              }}
            >
              {hasMenu ? 'Hide menu' : 'Show menu'}
            </Button>
            <Button
              onClick={() => {
                setSizesInner(hasFooter ? ['auto'] : ['auto', 100]);
              }}
            >
              {hasFooter ? 'Hide footer' : 'Show footer'}
            </Button>
          </HFlex>
          <Divider margin="0 0 0 0" colorScheme="weak" />
          <VFlex.Item flex="1 1 auto" overflow="hidden">
            <SplitLayout
              direction="horizontal"
              showDragGhost={false}
              sizes={sizesOuter}
              onChange={onChangeOuter}
              hideGutter={!hasMenu}
            >
              <Box
                overflow="hidden"
                styles={{
                  backgroundColor: 'rgba(63, 187, 226, 0.2)',
                  display: hasMenu ? 'block' : 'none',
                }}
              >
                <Box padding="cmp-sm">
                  <Typography.Paragraph>Menu</Typography.Paragraph>
                </Box>
              </Box>
              <SplitLayout
                direction={'vertical'}
                showDragGhost={false}
                sizes={sizesInner}
                onChange={onChangeInner}
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
                  styles={{
                    backgroundColor: 'rgba(51, 255, 159, 0.2)',
                    display: hasFooter ? 'block' : 'none',
                  }}
                >
                  <Box padding="cmp-sm">
                    <Typography.Paragraph>Footer</Typography.Paragraph>
                  </Box>
                </Box>
              </SplitLayout>
            </SplitLayout>
          </VFlex.Item>
        </VFlex>
      );
    })(),
};
