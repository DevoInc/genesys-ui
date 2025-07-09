import * as React from 'react';

import type { IStyleAttr } from '../../../../declarations';
import { TAG_CLASS_NAME_BASE } from '../../constants';

export interface TagLabelProps extends IStyleAttr {
  children?: React.ReactNode;
}

export const TagLabel: React.FC<TagLabelProps> = ({ children, style }) =>
  typeof children === 'string' ? (
    <span className={`${TAG_CLASS_NAME_BASE}__text`} style={style}>
      {children}
    </span>
  ) : (
    <span style={style}>children</span>
  );
