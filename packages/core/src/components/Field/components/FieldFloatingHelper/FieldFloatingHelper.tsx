import * as React from 'react';

import {
  FloatingHelper,
  type FloatingHelperProps,
} from '../../../FloatingHelper';

export const FieldFloatingHelper: React.FC<FloatingHelperProps> = (
  floatingHelperProps,
) => {
  return <FloatingHelper {...floatingHelperProps} />;
};
