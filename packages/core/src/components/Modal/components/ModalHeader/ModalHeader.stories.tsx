import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Heading } from '../../../Typography/components/block';
import { GIOkSuccessfulCheckFilled } from '@devoinc/genesys-icons';
import { IconButtonClose, IconButtonStatus } from '../../../IconButton';
import { Flex } from '../../../Flex';
import { Modal } from '../../Modal';
import { useTheme } from 'styled-components';
import { ButtonGroup } from '../../../ButtonGroup';

const meta: Meta<typeof Modal.Header> = {
  title: 'Components/Core/Layout/Modal/Subcomponents',
  component: Modal.Header,
};

export default meta;

type Story = StoryObj<typeof Modal.Header>;

export const Header: Story = {
  render: () =>
    (() => {
      const tokens = useTheme();
      const dialogHeaderIconTokens = tokens.cmp.dialog.headerIcon;

      return (
        <Modal.Header>
          <Flex alignItems="center" gap="cmp-sm">
            <GIOkSuccessfulCheckFilled
              color={dialogHeaderIconTokens.color.background.success}
            />
            <Heading size="h4" truncateLine={1}>
              My custom Header
            </Heading>
          </Flex>
          <Flex marginLeft="auto">
            <ButtonGroup size="md" itemsGap="lg">
              <IconButtonStatus tooltip="Info" />
              <IconButtonClose tooltip="Close" />
            </ButtonGroup>
          </Flex>
        </Modal.Header>
      );
    })(),
};
