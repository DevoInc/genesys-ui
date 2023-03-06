import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, Button, Badge, Typography } from '..';

const meta: Meta<typeof Box> = {
  title: 'Components/Core/Layout/Box/Cases',
  component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;

export const PlacingFunctionalComponents: Story = {
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
  args: {},
  render: () => (
    <Box
      maxHeight={'190px'}
      maxWidth={'320px'}
      overflow={'auto'}
      padding={'cmp-md cmp-lg'}
    >
      <Typography.Paragraph>
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
