import * as React from 'react';
import { DiffEditor, type DiffEditorProps } from '../../../DiffEditor/DiffEditor';

export const Diff = ({ ...props }: DiffEditorProps) => {
  return <DiffEditor {...props} />;
};
