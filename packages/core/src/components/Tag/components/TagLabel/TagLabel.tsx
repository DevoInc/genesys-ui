import * as React from 'react';

import type { IClassName, IStyleAttr } from '../../../../declarations';
import { TAG_LABEL_CLASS_NAME_BASE } from '../../constants';

export interface TagLabelProps extends IStyleAttr, IClassName {
  children?: React.ReactNode;
}

export const TagLabel: React.FC<TagLabelProps> = ({
  children,
  className,
  style,
}) => {
  const classNames = [
    `${TAG_LABEL_CLASS_NAME_BASE} `,
    className ? `${className} ` : '',
  ]
    .join('')
    .trim();
  return typeof children === 'string' ? (
    <span className={classNames} style={style}>
      {children}
    </span>
  ) : (
    <span style={style}>children</span>
  );
};
