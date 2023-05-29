import * as React from 'react';

import { StyledFlexItem, StyledFlexItemProps } from './StyledFlexItem';
import { CommonBoxProps } from '../../../Box';
import { StyledOverloadCssProps } from '../../../../declarations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FlexItemProps
  extends CommonBoxProps,
    StyledFlexItemProps,
    StyledOverloadCssProps {}

export const FlexItem: React.FC<FlexItemProps> = ({
  children,
  styles,
  tooltip,
  ...styledProps
}) => {
  return (
    <StyledFlexItem {...styledProps} title={tooltip} css={styles}>
      {children}
    </StyledFlexItem>
  );
};
