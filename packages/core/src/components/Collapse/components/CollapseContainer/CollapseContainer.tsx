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
}

export const CollapseContainer: React.FC<CollapseContainerProps> = ({
  'aria-controls': ariaControls,
  'aria-label': ariaLabel = 'Collapsible header',
  children,
  expanded,
  onClick,
  style,
  tooltip,
  ...nativeProps
}) => (
  <StyledCollapseContainer {...nativeProps} css={style} $expanded={expanded}>
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
