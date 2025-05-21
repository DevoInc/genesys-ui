import * as React from 'react';
import { FloatingPortal } from '@floating-ui/react';

interface Props {
  appendTo?: HTMLElement | null;
  children: React.ReactNode;
}

export const InlineMessagePortal: React.FC<Props> = ({ appendTo, children }) =>
  appendTo === null ? (
    children
  ) : (
    <FloatingPortal {...(appendTo === undefined ? {} : { root: appendTo })}>
      {children}
    </FloatingPortal>
  );
