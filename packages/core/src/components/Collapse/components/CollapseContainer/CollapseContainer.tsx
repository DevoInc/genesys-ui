import * as React from 'react';

import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
  ITriggerAriaAttrs,
  ITriggerEventAttrs,
} from '../../../../declarations';
import type { ICollapse } from '../../declarations';
import { CollapseContext } from '../../context';
import { Flex } from '../../../Flex';
import { StyledCollapseContainer } from './StyledCollapseContainer';

export interface CollapseContainerProps
  extends IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs,
    Pick<React.HTMLProps<HTMLDivElement>, 'tabIndex'>,
    Pick<ITriggerAriaAttrs, 'aria-controls'>,
    Pick<ITriggerEventAttrs, 'onClick'>,
    ICollapse {
  children?: React.ReactNode;
  onPointerDown?: React.DOMAttributes<Element>['onPointerDown'];
  onKeyDown?: React.DOMAttributes<Element>['onKeyDown'];
}

export const CollapseContainer: React.FC<CollapseContainerProps> = ({
  'aria-controls': ariaControls,
  'aria-label': ariaLabel = 'Collapsible header',
  children,
  disabled,
  expanded,
  onClick,
  quiet,
  role = 'button',
  style,
  tooltip,
  isDraggable = false,
  onPointerDown,
  onKeyDown,
  tabIndex = 0,
  ...nativeProps
}) => (
  <StyledCollapseContainer
    {...nativeProps}
    $disabled={disabled}
    role={role}
    tabIndex={disabled ? -1 : tabIndex}
    css={style}
    $quiet={quiet}
    $expanded={expanded}
    onPointerDown={disabled ? null : onPointerDown}
    onKeyDown={disabled ? null : onKeyDown}
    aria-controls={ariaControls}
    aria-expanded={expanded}
    aria-label={ariaLabel}
    onClick={disabled ? null : onClick}
    title={tooltip}
    $isDraggable={disabled ? false : isDraggable}
  >
    <Flex
      alignItems="center"
      height="100%"
      padding="cmp-xs cmp-sm"
      gap="cmp-sm"
    >
      <CollapseContext.Provider value={{ expanded }}>
        {children}
      </CollapseContext.Provider>
    </Flex>
  </StyledCollapseContainer>
);
