import { Holo } from '@devoinc/holo';
import { ColDef, TableOptionsProps } from '../../declarations';

const colDefs: ColDef[] = Array.from({ length: 100 }, (_, index: number) => ({
  id: `company_${index}`,
  headerName: `Company ${index + 1}`,
  type: 'text',
  cellStyle: {
    width: 12,
  },
}));

const schemaObject = {};
Array.from({ length: 100 }).forEach((_el, index: number) => {
  schemaObject[`company_${index}`] = 'company';
});

export const performanceData = Holo.of()
  .schema(schemaObject)
  .repeat(100000)
  .generate();

export const performanceOptions: TableOptionsProps = {
  defaultColumnDef: {
    editable: false,
  },
  visualOptions: {
    maxHeight: '500px',
    rowHeight: 'md',
    minWidth: 2000,
  },
  columnDefs: colDefs,
};
