import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ModalHeader } from './ModalHeader';
import { Heading } from '../../../Typography/components/block';
import { GIOkSuccessfulCheckFilled } from '@devoinc/genesys-icons';
import { IconButtonClose } from '../../../IconButton';
import { Flex } from '../../../Flex';

const meta: Meta<typeof ModalHeader> = {
  title: 'Components/Core/Layout/Modal/Subcomponents',
  component: ModalHeader,
};

export default meta;

type Story = StoryObj<typeof ModalHeader>;

export const Header: Story = {
  args: {
    children: (
      <>
        <Flex alignItems="center" gap="cmp-sm">
          <GIOkSuccessfulCheckFilled />
          <Heading size="h4" truncateLine={1}>
            Modal title
          </Heading>
        </Flex>
        <IconButtonClose title="Close" />
      </>
    ),
  },
};
