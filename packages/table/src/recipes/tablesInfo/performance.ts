import { Holo } from '@devoinc/holo';
import { ColDef, TableOptionsProps } from '../../declarations';

const colDefs: ColDef[] = Array.from({ length: 100 }, (_, index) => ({
  id: `company_${index}`,
  headerName: 'Company',
  type: 'text',
  cellStyle: {
    width: 180,
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
    wrapper: {
      maxHeight: '500px',
    },
    row: {
      height: 'md',
    },
  },
  columnDefs: colDefs,
};
