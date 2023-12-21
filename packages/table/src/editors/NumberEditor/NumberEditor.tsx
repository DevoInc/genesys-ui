import React, { FormEvent } from 'react';

import { InputControl } from '@devoinc/genesys-ui';

import type { CellEditorProps } from '../declarations';

export const NumberEditor: React.FC<CellEditorProps> = ({
  value,
  onChange,
}) => (
  <InputControl
    type={'number'}
    aria-label={'Number input'}
    value={String(value)}
    onChange={(event: FormEvent) => {
      onChange(parseInt((event.target as HTMLInputElement).value));
    }}
    autoFocus
  />
);
