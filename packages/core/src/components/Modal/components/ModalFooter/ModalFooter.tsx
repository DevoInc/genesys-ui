import * as React from 'react';
import { concat } from 'lodash';

import type { IModal } from '../../declarations';
import { modalFooterMixin } from './mixins';
import { Panel, PanelFooterProps } from '../../../Panel';
import { useTheme } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ModalFooterProps
  extends PanelFooterProps,
    Pick<IModal, 'status'> {}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  children,
  hasBackground = true,
  status,
  styles,
  ...restPanelFooterProps
}) => {
  const theme = useTheme();
  return (
    <Panel.Footer
      {...restPanelFooterProps}
      hasBackground={status === 'base' ? hasBackground : undefined}
      styles={concat(modalFooterMixin({ status, theme }), styles)}
    >
      {children}
    </Panel.Footer>
  );
};
