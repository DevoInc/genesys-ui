import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Icon } from './Icon';
import { GIActivity } from '@devoinc/genesys-icons';
import { HFlex } from '../HFlex';

const meta: Meta<typeof Icon> = {
  title: 'Components/Feedback/Icon',
  component: Icon,
  args: { colorScheme: 'base', children: <GIActivity /> },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Playground: Story = {};

export const OverwritingProps: Story = {
  tags: ['isHidden'],
  args: {
    children: <GIActivity size={120} />,
  },
};

export const Sizes: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      return (
        <HFlex>
          <Icon {...props} size="xxxxs" />
          <Icon {...props} size="xxxs" />
          <Icon {...props} size="xxs" />
          <Icon {...props} size="xs" />
          <Icon {...props} size="sm" />
          <Icon {...props} size="md" />
          <Icon {...props} size="lg" />
          <Icon {...props} size="xl" />
          <Icon {...props} size="xxl" />
          <Icon {...props} size="xxxl" />
          <Icon {...props} size="xxxxl" />
        </HFlex>
      );
    })(args),
};

export const ColorSchemes: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      return (
        <HFlex justifyContent="space-between">
          <HFlex.Item>
            <Icon {...props} colorScheme="success" size="xl" />
            <Icon {...props} colorScheme="error" size="xl" />
            <Icon {...props} colorScheme="info" size="xl" />
            <Icon {...props} colorScheme="warning" size="xl" />
            <Icon {...props} colorScheme="help" size="xl" />
          </HFlex.Item>
          <HFlex.Item>
            <Icon {...props} color="pink" size="xl" />
          </HFlex.Item>
        </HFlex>
      );
    })(args),
};
