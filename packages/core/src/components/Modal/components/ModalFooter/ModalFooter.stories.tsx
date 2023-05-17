import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ModalFooter } from './ModalFooter';
import { Box } from '../../../Box';
import { IconButtonGoToDocs } from '../../../IconButton';
import { Button } from '../../../Button';

const meta: Meta<typeof ModalFooter> = {
  title: 'Components/Core/Layout/Modal/Subcomponents',
  component: ModalFooter,
};

export default meta;

type Story = StoryObj<typeof ModalFooter>;

export const Footer: Story = {
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
