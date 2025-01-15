import * as React from 'react';

import type { TCellRenderer } from '../../declarations';

export const BooleanRenderer: React.FC<TCellRenderer> = ({ value }) => {
  const bool = typeof value === 'string' ? value === 'true' : value;
  return bool ? 'Yes' : 'No';
};
