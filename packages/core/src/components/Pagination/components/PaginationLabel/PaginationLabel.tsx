import * as React from 'react';

import { Label, type LabelProps } from '../../../Label';
import { DEFAULT_TEXTS } from '../../constants';
import { TTextProps } from '../../declarations';

export interface PaginationLabelProps
  extends Omit<LabelProps, 'children' | 'htmlFor' | 'form'> {
  texts?: TTextProps;
  totalItems?: number;
  pageSize?: number;
  page?: number;
  lastPage?: number;
  content?: string;
}

export const PaginationLabel: React.FC<PaginationLabelProps> = ({
  texts,
  size,
  totalItems,
  pageSize,
  page,
  content,
  ...restLabelProps
}) => {
  const { infoTextFn } = { ...DEFAULT_TEXTS, ...texts };

  const infoText = infoTextFn({
    totalItems: totalItems,
    pageSize,
    page,
  });

  return (
    <Label {...restLabelProps} size={size}>
      {content || infoText}
    </Label>
  );
};
