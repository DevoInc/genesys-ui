import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box } from './Box';
import { Button } from '../Button';
import { Badge } from '../Badge';
import { Typography } from '../Typography';
import { StyledLayoutContentHelper } from '../../../stories/components/styled';

const meta: Meta<typeof Box> = {
  title: 'Components/Layout/Box',
  component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Playground: Story = {
  args: {
    children: (
      <StyledLayoutContentHelper>Box content</StyledLayoutContentHelper>
    ),
  },
};

export const PlacingFunctionalComponents: Story = {
  tags: ['isHidden'],
  render: () => (
    <Box display={'inline-flex'} position={'relative'}>
      <Button>Button text</Button>
      <Box position={'absolute'} positionTop={'-9px'} positionRight={'-9px'}>
        <Badge size={'sm'} colorScheme={'primary'} text={'99'} />
      </Box>
    </Box>
  ),
};

export const Scrolled: Story = {
  tags: ['isHidden'],
  args: {},
  render: () => (
    <Box
      maxHeight={'190px'}
      maxWidth={'320px'}
      overflow={'auto'}
      padding={'cmp-md cmp-lg'}
    >
      <Typography.Paragraph gutterBottom="cmp-md">
        Cosmic ocean a still more glorious dawn awaits the ash of stellar
        alchemy of brilliant syntheses decipherment the only home we have ever
        known. A very small stage in a vast cosmic arena encyclopaedia galactica
        laws of physics ship of the imagination great turbulent clouds as a
        patch of light
      </Typography.Paragraph>
      <Typography.Paragraph>
        Cosmic ocean a still more glorious dawn awaits the ash of stellar
        alchemy of brilliant syntheses decipherment the only home we have ever
        known.
      </Typography.Paragraph>
    </Box>
  ),
};
