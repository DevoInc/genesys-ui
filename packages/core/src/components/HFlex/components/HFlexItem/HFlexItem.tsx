import * as React from 'react';

import { H_FLEX_ITEM_CLASS_NAME_BASE } from '../../constants';
import { FlexItem, type FlexItemProps } from '../../../Flex/components';

export interface HFlexItemProps extends FlexItemProps {}

export const HFlexItem: React.FC<HFlexItemProps> = ({
  children,
  className,
  ...restFlexItemProps
}) => {
  const classNames = [
    `${H_FLEX_ITEM_CLASS_NAME_BASE} `,
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
