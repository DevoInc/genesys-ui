import * as React from 'react';
import {
  ContainerEventAttrProps,
  FieldEventAttrProps,
  FocusEventAttrProps,
  GlobalAttrProps,
  MouseEventAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../declarations';

import { StyledEditableContent } from './StyledEditableContent';

export interface EditableContentProps
  extends GlobalAttrProps,
    MouseEventAttrProps,
    FocusEventAttrProps,
    ContainerEventAttrProps,
    FieldEventAttrProps,
    StyledPolymorphicProps,
    StyledOverloadCssProps {
  children?: React.ReactNode;
}

export const EditableContent: React.FC<EditableContentProps> = React.forwardRef<
  HTMLDivElement,
  EditableContentProps
>(({ children, tooltip, styles, ...nativeProps }, ref) => {
  return (
    <StyledEditableContent
      {...nativeProps}
      css={styles}
      contentEditable
      ref={ref}
      title={tooltip}
    >
      {children}
    </StyledEditableContent>
  );
});

EditableContent.displayName = 'EditableContent';
