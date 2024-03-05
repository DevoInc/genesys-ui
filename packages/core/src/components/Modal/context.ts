import * as React from 'react';

import type { IModal } from './declarations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ModalContextProps
  extends Pick<IModal, 'onRequestClose' | 'status'> {}

export const ModalContext = React.createContext<ModalContextProps>({});
