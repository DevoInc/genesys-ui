import * as React from 'react';
import { Dock } from 'react-dock';

// declarations
import {
  GlobalAriaProps,
  GlobalAttrProps,
  LayoutAriaProps,
  LayoutAttrProps,
  StyledPolymorphicProps,
  TriggerAriaProps,
} from '../../declarations';

// components
import { Icon } from '../';

// styled
import { StyledFloatPanelWrapper } from './StyledFloatPanelWrapper';

export interface FloatPanelProps
  extends Pick<GlobalAttrProps, 'id' | 'role'>,
    GlobalAriaProps,
    StyledPolymorphicProps,
    Pick<LayoutAttrProps, 'accessKey' | 'tabIndex'>,
    LayoutAriaProps,
    Pick<TriggerAriaProps, 'aria-expanded'> {
  children?: React.ReactNode;
  closeStyle: React.CSSProperties | null;
  defaultSize: number;
  dimMode: 'none' | 'transparent' | 'opaque';
  dockStyle?: React.CSSProperties | null;
  hasClose: boolean;
  hideWhileResizing: boolean;
  visible?: boolean;
  onClose: () => void;
  position: 'left' | 'right' | 'top' | 'bottom';
  size?: number;
}

export const FloatPanel: React.FC<FloatPanelProps> = ({
  'aria-expanded': ariaExpanded,
  children,
  closeStyle,
  defaultSize,
  dimMode = 'none',
  dockStyle,
  hasClose = false,
  hideWhileResizing = false,
  visible = true,
  onClose,
  position = 'right',
  size,
  ...nativeProps
}) => (
  <Dock
    defaultSize={defaultSize}
    dimMode={dimMode}
    dockStyle={dockStyle}
    isVisible={visible}
    position={position}
    size={size}
  >
    {({ isResizing }) => {
      const contentVisible = !(isResizing && hideWhileResizing);
      const contentClass = 'content' + (contentVisible ? '' : ' hidden');

      return (
        <StyledFloatPanelWrapper
          {...nativeProps}
          aria-expanded={ariaExpanded || visible}
          className="float-panel"
        >
          {hasClose && (
            <div className="close" style={closeStyle} onClick={onClose}>
              <Icon iconId="gi-exit_close" />
            </div>
          )}
          <div className={contentClass}>{children}</div>
        </StyledFloatPanelWrapper>
      );
    }}
  </Dock>
);
