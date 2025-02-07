import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import {
  BasicTable,
  orderDataByOrderStruct,
  type TColDef,
  updateColDefsWithOrderStruct,
  useOrderStruct,
} from '../../src';
import { ROW_HEIGHT_MD } from '../../src/constants';
import { allTypesData } from './data/allTypesData';
import { AllTypesColumn } from './column/AllTypesColumn';
import { useFilterStruct } from '../../src/hooks/useFilterStruct';
import { filterDataByFilterStruct } from '../../src/helpers/filterDataByFilterStruct';
import { updateColDefsWithFilterStruct } from '../../src/helpers/updateColDefsWithFilterStruct';

const meta: Meta<typeof BasicTable> = {
  title: 'Components/Layout/Table/Basic',
  component: BasicTable,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BasicTable>;

export const Basic: Story = {
  args: {
    data: allTypesData,
    colDefs: AllTypesColumn,
  },
  render: ({ data, colDefs, ...props }) => {
    const [newData, setNewData] = React.useState(data);
    const { orderStruct, onSort } = useOrderStruct([
      { id: 'id', sort: 'desc' },
    ]);
    const { filterStruct, onFilter } = useFilterStruct();

    const newColDef = updateColDefsWithFilterStruct(colDefs, filterStruct);

    return (
      <div style={{ overflowY: 'auto' }}>
        <BasicTable
          {...props}
          id={'basicTableStorie'}
          onSort={(colDef: TColDef) => {
            onSort(colDef.id);
          }}
          texts={{
            cell: {
              editTooltip: 'editTooltip',
            },
          }}
          textsCell={({ rowIndex }) =>
            rowIndex % 2 === 0 ? 'soy par' : 'soy impar'
          }
          onFilter={(curColDef, value, type) => {
            onFilter(curColDef.id, value, type);
          }}
          data={[...newData]
            .filter(filterDataByFilterStruct(filterStruct))
            .sort(orderDataByOrderStruct(orderStruct))}
          colDefs={updateColDefsWithOrderStruct(newColDef, orderStruct)}
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
        />
      </div>
    );
  },
};

// const colDefs = performanceColumn;

// const data = performanceData(colDefs);

// export const Performance: Story = {
//   render: () => <BasicCmp data={data} colDefs={colDefs} />,
// };
