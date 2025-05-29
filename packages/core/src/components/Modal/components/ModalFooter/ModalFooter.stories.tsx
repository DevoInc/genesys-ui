import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { ModalFooter } from './ModalFooter';
import { Box } from '../../../Box';
import { IconButtonGoToDocs } from '../../../IconButton';
import { Button } from '../../../Button';

const meta: Meta<typeof ModalFooter> = {
  title: 'Components/Layout/Modal/Components/ModalFooter',
  component: ModalFooter,
};

export default meta;
type Story = StoryObj<typeof ModalFooter>;

export const Playground: Story = {
  args: {
    children: (
      <>
        <Box marginRight="auto">
          <IconButtonGoToDocs
            href="https://www.google.com/"
            tooltip="Go to Docs"
          />
        </Box>

        <>
          <Button colorScheme={'quiet'} key={0}>
            Cancel
          </Button>
          <Button colorScheme={'accent'} key={1}>
            Apply
          </Button>
        </>
      </>
    ),
  },
};
