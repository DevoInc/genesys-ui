import * as React from 'react';

import { FieldContext } from '../context';
import { Helper, HelperProps } from '../../Helper';
import { FIELD_HELPER_SIZE_MAP } from '../constants';

export const FieldHelper: React.FC<HelperProps> = ({
  size,
  ...helperProps
}) => {
  const context = React.useContext(FieldContext);
  const evalSize = FIELD_HELPER_SIZE_MAP[size || context.size];
  return <Helper {...context} {...helperProps} size={evalSize} />;
};
