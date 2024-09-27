import * as React from 'react';

import { PaginationContext } from '../../context';
import { Label, type LabelProps } from '../../../Label';

export interface PaginationLabelProps
  extends Omit<LabelProps, 'children' | 'htmlFor' | 'form'> {
  content?: LabelProps['children'];
}

export const PaginationLabel: React.FC<PaginationLabelProps> = ({
  content,
  size,
  ...restLabelProps
}) => {
  const context = React.useContext(PaginationContext);
  return (
    <Label {...restLabelProps} size={size || context.size}>
      {content || context.paginationInfoText}
    </Label>
  );
};
