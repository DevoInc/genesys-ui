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
import { StyledCollapseContainerButton } from './StyledCollapseContainerButton';

export interface CollapseContainerProps
  extends IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs,
    Pick<ITriggerAriaAttrs, 'aria-controls'>,
    Pick<ITriggerEventAttrs, 'onClick'> {
  children?: React.ReactNode;
  expanded?: boolean;
  isDraggable?: boolean;
  onPointerDown?: React.DOMAttributes<Element>['onPointerDown'];
  onKeyDown?: React.DOMAttributes<Element>['onKeyDown'];
  /** If the collapse has transparent background */
  quiet?: boolean;
}

export const CollapseContainer: React.FC<CollapseContainerProps> = ({
  'aria-controls': ariaControls,
  'aria-label': ariaLabel = 'Collapsible header',
  children,
  expanded,
  onClick,
  quiet,
  style,
  tooltip,
  isDraggable = false,
  onPointerDown,
  onKeyDown,
  ...nativeProps
}) => (
  <StyledCollapseContainer
    {...nativeProps}
    css={style}
    quiet={quiet}
    $expanded={expanded}
    $isDraggable={isDraggable}
  >
    <StyledCollapseContainerButton
      onPointerDown={onPointerDown}
      onKeyDown={onKeyDown}
      aria-controls={ariaControls}
      aria-expanded={expanded}
      aria-label={ariaLabel}
      onClick={onClick}
      title={tooltip}
      $isDraggable={isDraggable}
    />
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
