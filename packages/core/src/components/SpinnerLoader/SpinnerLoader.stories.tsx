import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { HFlex } from '../HFlex';
import { SpinnerLoader } from './SpinnerLoader';

const meta: Meta<typeof SpinnerLoader> = {
  title: 'Components/Feedback/SpinnerLoader',
  component: SpinnerLoader,
  args: {
    colorScheme: 'dark',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof SpinnerLoader>;

export const Playground: Story = {};

export const ColorSchemes: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      return (
        <HFlex>
          <SpinnerLoader {...props} />
          <SpinnerLoader {...props} colorScheme="error" />
          <SpinnerLoader {...props} colorScheme="success" />
          <SpinnerLoader {...props} colorScheme="warning" />
          <SpinnerLoader {...props} colorScheme="help" />
          <SpinnerLoader {...props} colorScheme="info" />
          <SpinnerLoader {...props} colorScheme="brand" />
          <SpinnerLoader {...props} colorScheme="darkTrans" />
          <SpinnerLoader {...props} colorScheme="lightTrans" />
          <SpinnerLoader {...props} colorScheme="light" />
        </HFlex>
      );
    })(args),
};

export const Sizes: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      return (
        <HFlex>
          <SpinnerLoader {...props} size="xxxs" />
          <SpinnerLoader {...props} size="xxs" />
          <SpinnerLoader {...props} size="xs" />
          <SpinnerLoader {...props} size="sm" />
          <SpinnerLoader {...props} size="md" />
          <SpinnerLoader {...props} size="lg" />
          <SpinnerLoader {...props} size="xl" />
        </HFlex>
      );
    })(args),
};
