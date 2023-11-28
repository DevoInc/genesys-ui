import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Flex } from '@devoinc/genesys-ui';
import { BasicTable } from './Table';
import {
  baseOptions,
  baseData,
  performanceOptions,
  performanceData,
} from './tablesInfo';

const meta: Meta<typeof BasicTable> = {
  title: 'Components/Table',
  component: BasicTable,
};

export default meta;
type Story = StoryObj<typeof BasicTable>;

export const Base: Story = {
  render: () =>
    (() => {
      return (
        <Flex height="100%" width="100%" flex-direction="column">
          <BasicTable tableOptions={baseOptions} data={baseData} />
        </Flex>
      );
    })(),
};

export const Performance: Story = {
  render: () =>
    (() => {
      return (
        <Flex height="100%" width="100%" flex-direction="column">
          <BasicTable
            tableOptions={performanceOptions}
            data={performanceData}
          />
        </Flex>
      );
    })(),
};
