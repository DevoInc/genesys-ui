import * as React from 'react';
import {
  SmartDiffEditor,
  type SmartDiffEditorProps,
} from '../../SmartDiffEditor';

export const Diff = ({ ...props }: SmartDiffEditorProps) => {
  return <SmartDiffEditor {...props} />;
};
