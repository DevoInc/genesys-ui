import * as React from 'react';

import { StyledOverloadCssPropsWithRecord } from '../../declarations';
import {
  FloatPanelClose,
  FloatPanelContainer,
  FloatPanelContainerProps,
} from './components';

export interface BaseFloatPanelProps extends FloatPanelContainerProps {
  hasClose: boolean;
  onClose: () => void;
}

export type FloatPanelProps = BaseFloatPanelProps &
  StyledOverloadCssPropsWithRecord<'container' | 'close'>;

export const InternalFloatPanel: React.FC<FloatPanelProps> = ({
  'aria-expanded': ariaExpanded,
  children,
  defaultSize,
  dimMode = 'none',
  hasClose = false,
  hideWhileResizing = false,
  visible = true,
  onClose,
  position = 'right',
  size,
  styles,
  subcomponentStyles,
  ...nativeProps
}) => (
  <FloatPanel.Container
    {...nativeProps}
    aria-expanded={ariaExpanded || visible}
    defaultSize={defaultSize}
    dimMode={dimMode}
    hideWhileResizing={hideWhileResizing}
    visible={visible}
    position={position}
    size={size}
    styles={subcomponentStyles?.container || styles}
  >
    {hasClose && (
      <FloatPanel.Close onClick={onClose} styles={subcomponentStyles?.close} />
    )}
    {children}
  </FloatPanel.Container>
);

export const FloatPanel = InternalFloatPanel as typeof InternalFloatPanel & {
  Close: typeof FloatPanelClose;
  Container: typeof FloatPanelContainer;
};

FloatPanel.Close = FloatPanelClose;
FloatPanel.Container = FloatPanelContainer;
