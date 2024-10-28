import * as React from 'react';

import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
  ITriggerAriaAttrs,
  ITriggerEventAttrs,
} from '../../../../declarations';
import { CollapseContext } from '../../context';
import { Flex } from '../../../Flex';
import { StyledCollapseContainer } from './StyledCollapseContainer';
import type { ICollapse } from '../../declarations';

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
    role={role}
    tabIndex={tabIndex}
    css={style}
    $quiet={quiet}
    $expanded={expanded}
    onPointerDown={onPointerDown}
    onKeyDown={onKeyDown}
    aria-controls={ariaControls}
    aria-expanded={expanded}
    aria-label={ariaLabel}
    onClick={onClick}
    title={tooltip}
    $isDraggable={isDraggable}
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
