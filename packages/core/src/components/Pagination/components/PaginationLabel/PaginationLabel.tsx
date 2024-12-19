import * as React from 'react';

import { TTextProps } from '../../declarations';
import { DEFAULT_TEXTS } from '../../constants';
import { PaginationContext } from '../../context';
import { Label, type LabelProps } from '../../../Label';

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
  const context = React.useContext(PaginationContext);
  const evalSize = size || context.size;
  const evalTexts = texts || context.texts;
  const { infoTextFn } = { ...DEFAULT_TEXTS, ...evalTexts };

  const infoText = infoTextFn({
    totalItems: totalItems,
    pageSize,
    page,
  });

  return (
    <Label {...restLabelProps} size={evalSize}>
      {content || infoText}
    </Label>
  );
};
