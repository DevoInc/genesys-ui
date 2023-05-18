import * as React from 'react';
import {
  ContainerEventAttrProps,
  FieldEventAttrProps,
  FocusEventAttrProps,
  GlobalAttrProps,
  MouseEventAttrProps,
} from '../../declarations';

import { StyledEditableContent } from './StyledEditableContent';

export interface EditableContentProps
  extends GlobalAttrProps,
    MouseEventAttrProps,
    FocusEventAttrProps,
    ContainerEventAttrProps,
    FieldEventAttrProps {
  children?: React.ReactNode;
}

export const EditableContent: React.FC<EditableContentProps> = React.forwardRef<
  HTMLDivElement,
  EditableContentProps
>(({ children, tooltip, ...nativeProps }, ref) => {
  return (
    <StyledEditableContent
      {...nativeProps}
      contentEditable
      ref={ref}
      title={tooltip}
    >
      {children}
    </StyledEditableContent>
  );
});

EditableContent.displayName = 'EditableContent';
