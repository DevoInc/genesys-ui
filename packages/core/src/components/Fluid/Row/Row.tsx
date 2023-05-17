import * as React from 'react';

import { RESET_STYLES } from '../constants';
import { StyledRow, StyledRowProps } from './StyledRow';

import {
  ContainerEventAttrProps,
  DragAndDropAriaProps,
  DragDropEventAttrProps,
  FocusEventAttrProps,
  GlobalAriaProps,
  GlobalAttrProps,
  LayoutAriaProps,
  LayoutAttrProps,
  MouseEventAttrProps,
} from '../../../declarations';

export interface RowProps
  extends StyledRowProps,
    // native props
    GlobalAttrProps,
    GlobalAriaProps,
    DragAndDropAriaProps,
    LayoutAttrProps,
    LayoutAriaProps,
    ContainerEventAttrProps<HTMLDivElement>,
    FocusEventAttrProps<HTMLDivElement>,
    DragDropEventAttrProps<HTMLDivElement>,
    MouseEventAttrProps<HTMLDivElement> {
  /** Content of row */
  children?: React.ReactNode;
}

export const Row: React.FC<RowProps> = ({
  children,
  tooltip,
  ...styledProps
}) => (
  <StyledRow {...styledProps} style={RESET_STYLES.MARGIN} title={tooltip}>
    {children}
  </StyledRow>
);
