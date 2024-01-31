import * as React from 'react';

import { FieldContext } from '../context';
import { FloatingHelper, FloatingHelperProps } from '../../FloatingHelper';

export const FieldFloatingHelper: React.FC<FloatingHelperProps> = (
  floatingHelperProps,
) => {
  const context = React.useContext(FieldContext);
  return <FloatingHelper {...context} {...floatingHelperProps} />;
};
