import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Flex } from '@devoinc/genesys-ui';

import {
  BasicTable,
  orderDataByOrderStruct,
  TColDef,
  updateColDefsWithOrderStruct,
  useOrderStruct,
} from '../../src';
import { ROW_HEIGHT_MD } from '../../src/constants';
import { allTypesData } from './data/allTypesData';
import { AllTypesColumn } from './column/AllTypesColumn';
// import { Holo } from '@devoinc/holo';
// import { performanceColumn } from './column/performanceColumn';
// import { performanceData } from './data/performanceData';

const meta: Meta<typeof BasicTable> = {
  title: 'Components/Layout/Table/Basic',
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
  }, []);
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
          // defaultColDef={{
          //   editable: true,
          // }}
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

export const Basic: Story = {
  render: () => <BasicCmp data={allTypesData} colDefs={AllTypesColumn} />,
};

// const colDefs = performanceColumn;

// const data = performanceData(colDefs);

// export const Performance: Story = {
//   render: () => <BasicCmp data={data} colDefs={colDefs} />,
// };
