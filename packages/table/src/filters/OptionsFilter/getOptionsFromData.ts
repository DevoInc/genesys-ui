import type { ColDef, Data } from '../../declarations';
import type {
  Option,
  Options,
} from '../../renderers/OptionsRenderer/declarations';

export const getOptionsFromData = (data: Data, colDef: ColDef) => {
  const result = [];
  const cache = [];
  for (const row of data) {
    // Get the current value of the row
    const value = String(row[colDef.id]);
    if (!cache.includes(value)) {
      cache.push(value);
      // Get the options from cellRendererParams
      const options = colDef?.cellRendererParams?.options ?? ({} as Options);
      // Get the options for current value
      const option: Option = options[value] ?? {};
      // Get the label from the options of the current value
      const label = option?.label ?? value;
      result.push({ label, value });
    }
  }
  return result;
};
