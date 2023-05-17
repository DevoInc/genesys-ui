import * as React from 'react';

import { RESET_STYLES } from '../constants';
import { StyledCol, StyledColProps } from './StyledCol';
import type {
  ContainerEventAttrProps,
  DragAndDropAriaProps,
  DragDropEventAttrProps,
  FocusEventAttrProps,
  GlobalAriaProps,
  GlobalAttrProps,
  LayoutAriaProps,
  LayoutAttrProps,
  MouseEventAttrProps,
  StyledPolymorphicProps,
} from '../../../declarations';

export interface ColProps
  extends Omit<StyledColProps, '$alignSelf'>,
    // native props
    StyledPolymorphicProps,
    GlobalAttrProps,
    GlobalAriaProps,
    DragAndDropAriaProps,
    LayoutAttrProps,
    LayoutAriaProps,
    ContainerEventAttrProps<HTMLDivElement>,
    FocusEventAttrProps<HTMLDivElement>,
    DragDropEventAttrProps<HTMLDivElement>,
    MouseEventAttrProps<HTMLDivElement>,
    Pick<React.CSSProperties, 'alignSelf'> {
  // /** Number of children by row. This will generate a grid of child elements with same width columns.*/
  // alignSelf?: React.CSSProperties['alignSelf'];
  /** Content of column */
  children?: React.ReactNode;
}

export const Col: React.FC<ColProps> = ({
  alignSelf,
  children,
  tooltip,
  ...styledProps
}) => {
  return (
    <StyledCol
      {...styledProps}
      $alignSelf={alignSelf}
      style={RESET_STYLES.PADDING}
      title={tooltip}
    >
      {children}
    </StyledCol>
  );
};
