import * as React from 'react';

import { V_FLEX_ITEM_CLASS_NAME_BASE } from '../../constants';
import { FlexItem, type FlexItemProps } from '../../../Flex/components';

export interface VFlexItemProps extends FlexItemProps {}

export const VFlexItem: React.FC<VFlexItemProps> = ({
  children,
  className,
  ...restFlexItemProps
}) => {
  const classNames = [
    `${V_FLEX_ITEM_CLASS_NAME_BASE} `,
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
