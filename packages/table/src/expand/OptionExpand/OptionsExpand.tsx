import * as React from 'react';

import { OptionsRenderer, type TContextOptions } from '../../renderers';
import type { TCellRenderer } from '../../declarations';

export const OptionsExpand: React.FC<TCellRenderer> = ({
  colDef,
  ...props
}) => {
  const colDefWithWrap = {
    ...colDef,
    context: { ...colDef.context, flexWrap: 'wrap' } as TContextOptions,
  };
  return <OptionsRenderer colDef={colDefWithWrap} {...props} />;
};
