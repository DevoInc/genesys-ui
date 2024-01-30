import * as React from 'react';

import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
  TriggerAriaProps,
  TriggerEventAttrProps,
} from '../../../declarations';

import { Flex } from '../../Flex';

import {
  StyledCollapseContainer,
  StyledCollapseContainerButton,
  StyledCollapseContainerProps,
} from '../styled';
import { CollapseContext } from '../context';

export interface CollapseContainerProps
  extends StyledCollapseContainerProps,
    StyledPolymorphicProps,
    StyledOverloadCssProps,
    GlobalAttrProps,
    GlobalAriaProps,
    Pick<TriggerAriaProps, 'aria-controls'>,
    Pick<TriggerEventAttrProps, 'onClick'> {
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
