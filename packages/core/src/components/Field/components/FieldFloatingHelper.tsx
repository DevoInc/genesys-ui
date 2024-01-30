import * as React from 'react';

import { FieldContext } from '../context';
import { HelperProps } from '../../Helper';
import { FloatingHelper } from '../../FloatingHelper';

export const FieldFloatingHelper: React.FC<HelperProps> = (
  floatingHelperProps,
) => {
  const context = React.useContext(FieldContext);
  return <FloatingHelper {...context} {...floatingHelperProps} />;
};
