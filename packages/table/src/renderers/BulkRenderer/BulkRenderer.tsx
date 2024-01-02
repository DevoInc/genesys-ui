import * as React from 'react';

import { CheckboxControl } from '@devoinc/genesys-ui';

import { CellRendererProps } from '../declarations';

export const BulkRenderer: React.FC<CellRendererProps> = ({ value }) => {
  return <CheckboxControl checked={!!value as boolean} aria-labelledby="?" />;
};
