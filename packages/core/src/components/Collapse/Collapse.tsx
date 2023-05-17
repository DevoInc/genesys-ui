import * as React from 'react';

import { IconButtonCollapse, Flex, Typography } from '../';
import {
  GlobalAriaProps,
  GlobalAttrProps,
  TriggerAriaProps,
} from '../../declarations';
import { PickUnion } from '../../typeFunctions';
import { HeadingProps } from '../Typography/components/block';
import { StyledHeader, StyledHeaderButton, StyledHeaderProps } from './styled';

export interface CollapseProps
  extends StyledHeaderProps,
    GlobalAttrProps,
    GlobalAriaProps,
    Pick<TriggerAriaProps, 'aria-controls'> {
  truncateLine?: PickUnion<HeadingProps['truncateLine'], 1 | 2>;
  name?: string;
  onClick: () => void;
}

export const Collapse: React.FC<CollapseProps> = ({
  name,
  expanded,
  onClick,
  truncateLine = 1,
  'aria-controls': ariaControls,
  tooltip,
  ...nativeProps
}) => (
  <StyledHeader {...nativeProps} expanded={expanded} title={tooltip}>
    <StyledHeaderButton
      aria-controls={ariaControls}
      aria-expanded={expanded}
      onClick={onClick}
      aria-label={'Collapsible header'}
      aria-description={expanded ? 'Collapse' : 'Expand'}
    />
    <Flex alignItems={'center'} height={'100%'} padding={'cmp-xs cmp-sm'}>
      <Flex.Item flex={'0 0 auto'} marginRight={'cmp-sm'}>
        <IconButtonCollapse
          state={expanded ? 'expanded' : 'enabled'}
          size={'sm'}
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          tooltip={expanded ? 'Collapse' : 'Expand'}
        />
      </Flex.Item>
      <Flex.Item flex={'1 1 auto'} minWidth={'0'}>
        <Flex alignItems={'center'}>
          <Typography.Heading truncateLine={truncateLine} size={'h6'}>
            {name}
          </Typography.Heading>
        </Flex>
      </Flex.Item>
    </Flex>
  </StyledHeader>
);
