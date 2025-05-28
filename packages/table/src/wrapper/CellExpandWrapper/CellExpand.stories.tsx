import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Flex } from '@devoinc/genesys-ui';
import { BasicTable } from '../../recipes';
import { useOrderStruct } from '../../hooks';
import { orderDataByOrderStruct, updateColDefsWithOrderStruct } from '../../helpers';
import { TColDef } from '../../declarations';
import { ROW_HEIGHT_MD } from '../../constants';
import { allTypesData } from './allTypesData';
import { AllTypesColumn } from './AllTypesColumn';


const meta: Meta<typeof BasicTable> = {
  title: 'Components/Layout/Table/Cell/Expand',
  component: BasicTable,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BasicTable>;

const BasicCmp = ({ data, colDefs }) => {
  const [newData, setNewData] = React.useState(data);
  const { orderStruct, onSorting } = useOrderStruct([{ id: 'id', sort: 'desc' }]);
  React.useEffect(() => {
    setNewData([...newData].sort(orderDataByOrderStruct(orderStruct)));
  }, [onSorting]);
  return (
    <Flex flexDirection="column" gap="cmp-md" height={'auto'}>
      <Flex.Item>
        <BasicTable
          id={'basicTableStorie'}
          onSort={(colDef: TColDef) => {
            onSorting(colDef.id);
          }}
          texts={{
            cell: {
              editTooltip: 'editTooltip',
            },
          }}
          textsCell={({ rowIndex }) =>
            rowIndex % 2 === 0 ? 'soy par' : 'soy impar'
          }
          data={newData}
          colDefs={updateColDefsWithOrderStruct(colDefs, orderStruct)}
          defaultColDef={{
            isExpandable: true,
          }}
          maxHeight="80vh"
          minWidth={2800}
          rowHeight={ROW_HEIGHT_MD}
          highlightRowOnHover={true}
          showFilters={true}
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
          onSorting={onSorting}
        />
      </Flex.Item>
    </Flex>
  );
};

export const CellExpand: Story = {
  render: () => <BasicCmp data={allTypesData} colDefs={AllTypesColumn} />,
};
