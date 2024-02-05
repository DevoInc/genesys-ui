import * as React from 'react';

import { StyledFlexItem, type StyledFlexItemProps } from './StyledFlexItem';
import {
  type Resolve,
  type StyledOverloadCssProps,
  type CommonBoxProps,
} from '../../../../index';

export interface FlexItemProps
  extends CommonBoxProps,
    StyledFlexItemProps,
    StyledOverloadCssProps {}

export const FlexItem: React.FC<Resolve<FlexItemProps>> = ({
  children,
  height,
  styles,
  tooltip,
  width,
  ...styledProps
}) => {
  return (
    <StyledFlexItem
      {...styledProps}
      $height={height}
      $width={width}
      title={tooltip}
      css={styles}
    >
      {children}
    </StyledFlexItem>
  );
};
