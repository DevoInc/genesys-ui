import * as React from 'react';

export interface IPseudoMixin {
  content?: React.CSSProperties['content'];
  display?: React.CSSProperties['display'];
  pos?: React.CSSProperties['position'];
}
