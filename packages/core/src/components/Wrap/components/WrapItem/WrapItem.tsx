import * as React from 'react';

import { WRAP_ITEM_CLASS_NAME_BASE } from '../../constants';
import { FlexItem, type FlexItemProps } from '../../../Flex/components';

export interface WrapItemProps extends FlexItemProps {}

export const WrapItem: React.FC<WrapItemProps> = ({
  children,
  className,
  ...restFlexItemProps
}) => {
  const classNames = [
    `${WRAP_ITEM_CLASS_NAME_BASE} `,
    className && `${className} `,
  ]
    .join('')
    .trim();
  return (
    <FlexItem {...restFlexItemProps} className={classNames}>
      {children}
    </FlexItem>
  );
};
