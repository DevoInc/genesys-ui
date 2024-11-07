import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Holo } from '@devoinc/holo';

import { Flex, Select } from '@devoinc/genesys-ui';

import { BasicTable, getSelectOptions, TColDef, TContextOptions } from '..';
import { ROW_HEIGHT_MD } from '../constants';

const meta: Meta<typeof BasicTable> = {
  title: 'Components/Layout/Table/Editors/CellsEditor',
  component: BasicTable,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BasicTable>;

const data = Holo.of()
  .addType('index', (args = {}) => args.index + 1)
  .schema({
    id: 'index',
    booleanValue: 'bool',
    name: 'name',
    age: 'age',
    status: () => Holo.chance.pickone(['TODO', 'inProgress', 'test', 'done']),
    custom: () =>
      Holo.chance.pickone(['read', 'view', 'inProgress', 'completed']),
    picture: 'avatar',
  })
  .repeat(9)
  .generate();

const colDefs: TColDef = [
  {
    id: 'id',
    preset: 'text',
    headerName: 'ID',
  },
  {
    id: 'booleanValue',
    headerName: 'Boolean value',
    preset: 'boolean',
  },
  {
    id: 'name',
    headerName: 'Name',
    preset: 'text',
  },
  {
    id: 'age',
    headerName: 'Age',
    preset: 'number',
  },
  {
    id: 'status',
    headerName: 'Status',
    preset: 'options',
    context: {
      options: {
        done: { colorScheme: 'success' },
        test: { colorScheme: 'warning' },
        TODO: { colorScheme: 'data-purple' },
        inProgress: { colorScheme: 'data-blue' },
      },
    },
  },
  {
    id: 'custom',
    headerName: 'Custom',
    preset: 'options',
    cellEditor: ({ value, onChange, colDef }) => {
      const options = (colDef?.context as TContextOptions)?.options;

      return (
        <Select
          id={'test'}
          label={'custom'}
          placeholder={'custom'}
          menuAppendToBody
          onChange={(event) => {
            onChange(event.value)
          }}
          options={getSelectOptions(options)}
          value={String(value)}
        />
      );
    },
    context: {
      options: {
        read: { colorScheme: 'success' },
        view: { colorScheme: 'warning' },
        completed: { colorScheme: 'data-purple' },
        inProgress: { colorScheme: 'data-blue' },
      },
    },
  },
  {
    id: 'picture',
    headerName: 'Image (URL)',
    preset: 'link',
  },
];

const BasicCmp = ({ data, colDefs }) => {
  const [newData, setNewData] = React.useState(data);
  return (
    <Flex flexDirection="column" gap="cmp-md" height={'auto'}>
      <Flex.Item>
        <BasicTable
          data={newData}
          colDefs={colDefs}
          defaultColDef={{
            editable: true,
          }}
          maxHeight="80vh"
          rowHeight={ROW_HEIGHT_MD}
          onCellDataChange={({ colDef, value, rowIndex }) => {
            setNewData(
              newData.map((data, index) => {
                if (index === rowIndex) {
                  data[colDef.id] = value;
                }
                return data;
              }),
            );
          }}
        />
      </Flex.Item>
    </Flex>
  );
};

export const TableCellsEditor: Story = {
  render: () => <BasicCmp data={data} colDefs={colDefs} />,
};
