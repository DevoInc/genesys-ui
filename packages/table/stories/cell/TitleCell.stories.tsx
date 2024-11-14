import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Flex } from '@devoinc/genesys-ui';

import { BasicTable } from '../../src';
import { allTypesData } from '../table/data/allTypesData';
import { AllTypesColumn } from '../table/column/AllTypesColumn';

const meta: Meta<typeof BasicTable> = {
  title: 'Components/Layout/Table/cell/title',
  component: BasicTable,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BasicTable>;

const CellTitleCustomCmp = ({ data, colDefs }) => {
  return (
    <Flex flexDirection="column" gap="cmp-md" height={'auto'}>
      <Flex.Item>
        <BasicTable
          id={'basicTableStorie'}
          textsCell={({ rowIndex }) =>
            rowIndex % 2 === 0 ? 'soy par' : 'soy impar'
          }
          data={data}
          colDefs={colDefs}
          defaultColDef={{
            editable: false,
          }}
        />
      </Flex.Item>
    </Flex>
  );
};

const CellTitleCmp = ({ data, colDefs }) => {
  return (
    <Flex flexDirection="column" gap="cmp-md" height={'auto'}>
      <Flex.Item>
        <BasicTable
          id={'basicTableStorie'}
          data={data}
          texts={{ cell: { editTooltip: 'no soy el por defecto' } }}
          colDefs={colDefs}
          defaultColDef={{
            editable: false,
          }}
        />
      </Flex.Item>
    </Flex>
  );
};

export const CellTitleCustom: Story = {
  render: () => (
    <CellTitleCustomCmp data={allTypesData} colDefs={AllTypesColumn} />
  ),
};

export const CellTitle: Story = {
  render: () => (
    <CellTitleCmp data={allTypesData} colDefs={AllTypesColumn} />
  ),
};
