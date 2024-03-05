import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ModalBackdrop } from './ModalBackdrop';
import { Typography } from '../../../Typography';

const meta: Meta<typeof ModalBackdrop> = {
  title: 'Components/Layout/Modal/Components',
  component: ModalBackdrop,
  args: {
    children: (
      <Typography.Paragraph styles="color: #fff;">
        The content of the backdrop (usually a Modal)
      </Typography.Paragraph>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof ModalBackdrop>;

export const Backdrop: Story = {};
