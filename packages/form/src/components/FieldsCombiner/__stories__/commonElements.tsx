import * as React from 'react';

import {
  Button,
  IconButton,
  InputControl,
  SelectControl,
  CheckboxControl,
} from '@devoinc/genesys-ui';

export const ElemButton = <Button>Apply</Button>;

export const ElemIconButton = (
  <IconButton title="Refresh" icon="reload_refresh_update" />
);

export const ElemCheckbox = <CheckboxControl aria-label="Maintain activated" />;

export const ElemSelect = (
  <SelectControl
    id="test-2"
    size="sm"
    options={[
      { value: 1, label: 'One' },
      { value: 2, label: 'Two' },
    ]}
  />
);

export const ElemInputControl = (
  <InputControl
    id="test-3"
    aria-label="Label for story"
    onChange={() => console.log('change')}
  />
);
