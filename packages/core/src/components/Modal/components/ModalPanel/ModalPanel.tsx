import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat } from 'lodash';

import { MODAL_WINDOW_SIZE_MAP } from '../../constants';
import type { IDataAttrs } from '../../../../declarations';
import type { IModal } from '../../declarations';
import { modalPanelMixin } from './mixins';
import { Panel } from '../../../Panel';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ModalPanelProps
  extends IDataAttrs,
    Pick<
      IModal,
      | 'aria-describedby'
      | 'aria-labelledby'
      | 'children'
      | 'disableCloseOnOverlayClick'
      | 'height'
      | 'id'
      | 'onRequestClose'
      | 'status'
      | 'styles'
      | 'width'
      | 'windowSize'
      | 'zIndex'
    > {}

export const ModalPanel: React.FC<ModalPanelProps> = ({
  'aria-describedby': ariaDescribedBy,
  'aria-labelledby': ariaLabelledBy,
  children,
  height,
  id,
  status,
  styles,
  width,
  windowSize = 'md',
  zIndex,
  ...dataProps
}) => {
  const theme = useTheme();
  const tokensDialog = theme.cmp.dialog;
  const tokensModal = theme.cmp.modal;
  return (
    <Panel
      {...dataProps}
      aria-describedby={ariaDescribedBy}
      aria-labelledby={ariaLabelledBy}
      aria-modal
      display="inline-flex"
      elevation="overlay"
      id={id}
      maxHeight={tokensModal.size.maxHeight}
      maxWidth={
        status && status !== 'base'
          ? tokensDialog.size.maxWidth
          : width ||
            tokensModal.size.maxWidth[MODAL_WINDOW_SIZE_MAP[windowSize]]
      }
      minHeight={
        status && status !== 'base'
          ? tokensDialog.size.minHeight
          : height ||
            tokensModal.size.minHeight[MODAL_WINDOW_SIZE_MAP[windowSize]]
      }
      minWidth={tokensModal.size.minWidth}
      onClick={(event) => {
        // For avoid click inside close overlay
        event.stopPropagation();
      }}
      overflow="hidden"
      role="dialog"
      styles={concat(modalPanelMixin({ theme }), styles)}
      width={width || tokensModal.size.width}
      zIndex={
        zIndex
          ? typeof zIndex === 'string'
            ? 1
            : zIndex + 1
          : theme.alias.elevation.zIndex.depth.popOut
      }
    >
      {children}
    </Panel>
  );
};
