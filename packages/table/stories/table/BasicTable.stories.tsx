import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Flex } from '@devoinc/genesys-ui';

import { BasicTable, orderDataByOrderStruct, TColDef, updateColDefsWithOrderStruct, useOrderStruct } from '../../src';
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
  const { orderStruct, onSort } = useOrderStruct([{ id: 'id', sort: 'desc' }]);
  const dataOrdered = [...data].sort(orderDataByOrderStruct(orderStruct));
  return (
    <Flex flexDirection="column" gap="cmp-md" height={'auto'}>
      <Flex.Item>
        <BasicTable
          onSort={(colDef: TColDef) => {
            onSort(colDef.id);
          }}
          data={dataOrdered}
          colDefs={updateColDefsWithOrderStruct(colDefs, orderStruct)}
          defaultColDef={{
            editable: false,
          }}
          maxHeight="80vh"
          minWidth={2800}
          rowHeight={ROW_HEIGHT_MD}
          highlightRowOnHover={true}
          showFilters={true}
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
