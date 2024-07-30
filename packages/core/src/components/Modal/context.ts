import * as React from 'react';

import type { IModal } from './declarations';

export interface ModalContextProps
  extends Pick<IModal, 'onRequestClose' | 'status'> {}

export const ModalContext = React.createContext<ModalContextProps>({});
