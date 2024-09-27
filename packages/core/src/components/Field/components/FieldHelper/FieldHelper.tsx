import * as React from 'react';

import { Helper, type HelperProps } from '../../../Helper';
import { FIELD_HELPER_SIZE_MAP } from '../../constants';

export const FieldHelper: React.FC<HelperProps> = ({
  size = 'md',
  ...helperProps
}) => {
  const evalSize = FIELD_HELPER_SIZE_MAP[size];
  return <Helper {...helperProps} size={evalSize} />;
};
