import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { AnimatePresence, motion } from 'framer-motion';

import { GICopy } from '@devoinc/genesys-icons';
import {
  FN_POSITION_DEFAULT_VALUE,
  FN_STATUS_DEFAULT_VALUE,
} from './constants';
import { lorem2 } from '../../../stories/utils/fillerTexts';
import { Typography } from '../Typography';
import { VFlex } from '../VFlex';
import { HFlex } from '../HFlex';
import { IconButton } from '../IconButton';
import { FloatingMessage } from './FloatingMessage';
import { Box } from '../Box';

const meta: Meta<typeof FloatingMessage> = {
  title: 'Components/Feedback/FloatingMessage',
  component: FloatingMessage,
  args: {
    status: FN_STATUS_DEFAULT_VALUE,
    message: 'Code was copied to clipboard.',
    position: FN_POSITION_DEFAULT_VALUE,
  },
};

export default meta;
type Story = StoryObj<typeof FloatingMessage>;

export const Playground: Story = {};

export const PositionedToItsParent: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((args) => (
      <Box position="relative">
        <Typography.CodeBlock>{lorem2}</Typography.CodeBlock>
        <FloatingMessage {...args} />
      </Box>
    ))(args),
};

export const CustomPosition: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((args) => (
      <Box position="relative">
        <Typography.CodeBlock>{lorem2}</Typography.CodeBlock>
        <Box position="absolute" positionTop="-12px" positionRight="-12px">
          <FloatingMessage {...args} position="custom" />
        </Box>
      </Box>
    ))(args),
};

export const Position: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((args) => (
      <>
        <FloatingMessage
          {...args}
          status="info"
          message="custom"
          position="custom"
        />
        <Box
          position="relative"
          height="16rem"
          style="background-color: #f7f7f7; border-radius: 0.6rem;"
          padding="cmp-xl cmp-sm"
        >
          <FloatingMessage
            {...args}
            status="info"
            message="left-top"
            position="left-top"
          />
          <FloatingMessage
            {...args}
            status="info"
            message="left-center"
            position="left-center"
          />
          <FloatingMessage
            {...args}
            status="info"
            message="left-bottom"
            position="left-bottom"
          />
          <FloatingMessage
            {...args}
            status="info"
            message="center-top"
            position="center-top"
          />
          <FloatingMessage
            {...args}
            status="info"
            message="center-center"
            position="center-center"
          />
          <FloatingMessage
            {...args}
            status="info"
            message="center-bottom"
            position="center-bottom"
          />
          <FloatingMessage
            {...args}
            status="info"
            message="right-top"
            position="right-top"
          />
          <FloatingMessage
            {...args}
            status="info"
            message="right-center"
            position="right-center"
          />
          <FloatingMessage
            {...args}
            status="info"
            message="right-bottom"
            position="right-bottom"
          />
        </Box>
      </>
    ))(args),
};

export const ShowHideButton: Story = {
  tags: ['isHidden'],
  render: () =>
    ((props) => {
      const [isVisible, setIsVisible] = React.useState(false);
      React.useEffect(() => {
        setTimeout(() => {
          setIsVisible(false);
        }, 4000);
      }, [isVisible]);
      return (
        <VFlex
          position="relative"
          spacing="cmp-sm"
          childrenFitFullWidth={false}
        >
          <Typography.CodeBlock gutterBottom="0">{lorem2}</Typography.CodeBlock>
          <HFlex position="absolute" positionRight="1rem" positionTop="1rem">
            <IconButton
              onClick={() => setIsVisible(true)}
              icon={<GICopy />}
              tooltip="Copy to Clipboard"
            />
          </HFlex>
          {isVisible && <FloatingMessage {...props} />}
        </VFlex>
      );
    })(),
};

export const Animated: Story = {
  tags: ['isHidden'],
  render: () =>
    ((props) => {
      const [isVisible, setIsVisible] = React.useState(false);
      React.useEffect(() => {
        setTimeout(() => {
          setIsVisible(false);
        }, 4000);
      }, [isVisible]);
      return (
        <VFlex
          position="relative"
          spacing="cmp-sm"
          childrenFitFullWidth={false}
        >
          <Typography.CodeBlock gutterBottom="0">{lorem2}</Typography.CodeBlock>
          <HFlex position="absolute" positionRight="1rem" positionTop="1rem">
            <IconButton
              onClick={() => setIsVisible(true)}
              icon={<GICopy />}
              tooltip="Copy to Clipboard"
            />
          </HFlex>
          <AnimatePresence>
            {isVisible && (
              <motion.div
                key="floating-message"
                initial={{
                  opacity: 0,
                  width: 0,
                }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, opacity: 1, width: '100%' }}
                exit={{ opacity: 0, width: 0 }}
              >
                <FloatingMessage {...props} />
              </motion.div>
            )}
          </AnimatePresence>
        </VFlex>
      );
    })(),
};
