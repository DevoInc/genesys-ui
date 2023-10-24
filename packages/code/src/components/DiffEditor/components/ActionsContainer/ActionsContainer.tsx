import * as React from 'react';
import {
  ActionsContainer as EditorActionsContainer,
  type ActionsContainerProps as EditorActionsContainerProps,
} from '../../../Editor/components';

export interface ActionsContainerProps extends EditorActionsContainerProps {
  children: React.ReactNode;
}

export const ActionsContainer: React.FC<ActionsContainerProps> = ({
  children,
  ...restProps
}) => {
  return (
    <EditorActionsContainer marginRight="cmp-xl" {...restProps}>
      {children}
    </EditorActionsContainer>
  );
};
