import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Form } from '../../Form';
import { InputControl } from '../../../InputControl';
import { Typography } from '../../../Typography';
import { HFlex } from '../../../HFlex';
import { lorem } from '../../../../../stories/utils/fillerTexts';

const meta: Meta<typeof Form.Group> = {
  title: 'Components/Form/Form/Components/Group',
  component: Form.Group,
  args: {
    direction: 'column',
  },
};

export default meta;
type Story = StoryObj<typeof Form.Group>;

export const Base: Story = {
  args: {
    children: (
      <>
        <InputControl aria-label="Input label" />
        <InputControl aria-label="Input label" />
      </>
    ),
  },
};

export const Collapsable: Story = {
  args: {
    collapsable: true,
    legend: (
      <HFlex inline spacing="cmp-xs">
        MITRE ATTACK tags
        <Typography.Caption colorScheme="weaker">(V15.1)</Typography.Caption>
      </HFlex>
    ),
    helper: lorem,
    hasFloatingHelper: true,
    children: (
      <>
        <InputControl aria-label="Input label" />
        <InputControl aria-label="Input label" />
      </>
    ),
  },
};
