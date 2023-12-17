import * as React from 'react';

import { SelectControl, SelectOption } from '@devoinc/genesys-ui';
import { FilterProps } from './declarations';

export const TagsFilter: React.FC<FilterProps> = ({ colDef }) => (
  <SelectControl
    menuAppendToBody
    defaultInputValue={colDef?.cellFilterParams?.defaultValue as string}
    options={(colDef?.cellFilterParams?.options as SelectOption[]) ?? []}
  />
);
