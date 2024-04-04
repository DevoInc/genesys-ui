import * as React from 'react';

import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
  ITriggerAriaAttrs,
  ITriggerEventAttrs,
} from '../../../declarations';
import { CollapseContext } from '../context';

import { Flex } from '../../Flex';
import {
  StyledCollapseContainer,
  StyledCollapseContainerButton,
  type StyledCollapseContainerProps,
} from '../styled';

export interface CollapseContainerProps
  extends StyledCollapseContainerProps,
    IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs,
    Pick<ITriggerAriaAttrs, 'aria-controls'>,
    Pick<ITriggerEventAttrs, 'onClick'> {
  children?: React.ReactNode;
}

export const CollapseContainer: React.FC<CollapseContainerProps> = ({
  'aria-controls': ariaControls,
  'aria-label': ariaLabel = 'Collapsible header',
  children,
  expanded,
  onClick,
  styles,
  tooltip,
  ...nativeProps
}) => (
  <StyledCollapseContainer {...nativeProps} css={styles} expanded={expanded}>
    <StyledCollapseContainerButton
      aria-controls={ariaControls}
      aria-expanded={expanded}
      aria-label={ariaLabel}
      onClick={onClick}
      title={tooltip}
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
