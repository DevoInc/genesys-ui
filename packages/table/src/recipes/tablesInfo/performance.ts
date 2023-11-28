import { Holo } from '@devoinc/holo';
import { TableOptionsProps } from '../../declarations';

const defaultColDef = {
  id: 'company',
  headerName: 'Company',
  type: 'text',
  cellStyle: {
    width: 180,
  },
};

let index = 0;
const schemaObject = {};
Array.from({ length: 100 }).forEach((_el, index: number) => {
  schemaObject[`company_${index}`] = 'company';
});

const defObject = {
  ...defaultColDef,
  id: () => `company_${index++}`,
  headerName: () => `Company ${index}`,
};
const colDefs = Holo.of().schema(defObject).repeat(100).generate();

export const performanceData = Holo.of()
  .schema(schemaObject)
  .repeat(100000)
  .generate();

export const performanceOptions: TableOptionsProps = {
  defaultColumnDef: {
    editable: false,
  },
  style: {
    wrapper: {
      maxHeight: '500px',
    },
    row: {
      height: 30,
    },
  },
  columnDefs: colDefs,
};
