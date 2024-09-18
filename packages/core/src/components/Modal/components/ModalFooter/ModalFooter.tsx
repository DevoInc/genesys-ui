import * as React from 'react';
import { useTheme } from 'styled-components';

import type { IModal } from '../../declarations';
import { modalFooterMixin } from './mixins';
import { Panel, type PanelFooterProps } from '../../../Panel';
import { Flex } from '../../../Flex';
import { mergeStyles } from '../../../../helpers';

export interface ModalFooterProps
  extends PanelFooterProps,
    Pick<IModal, 'status'> {}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  children,
  hasBackground = true,
  status = 'base',
  style,
  ...restPanelFooterProps
}) => {
  const theme = useTheme();
  return (
    <Panel.Footer
      {...restPanelFooterProps}
      hasBackground={status === 'base' ? hasBackground : undefined}
      style={mergeStyles(modalFooterMixin({ status, theme }), style)}
    >
      {children && <Flex alignItems="center">{children}</Flex>}
    </Panel.Footer>
  );
};
