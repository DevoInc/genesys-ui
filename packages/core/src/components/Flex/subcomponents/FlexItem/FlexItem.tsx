import * as React from 'react';

import { StyledFlexItem, StyledFlexItemProps } from './StyledFlexItem';
import { CommonBoxProps } from '../../../Box';
import { StyledOverloadCssProps } from '../../../../declarations';

export interface FlexItemProps
  extends CommonBoxProps,
    StyledFlexItemProps,
    StyledOverloadCssProps {}

export const FlexItem: React.FC<FlexItemProps> = ({
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
