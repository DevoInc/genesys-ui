import * as React from 'react';
import { useTheme } from 'styled-components';

import { Flex } from '../../../../../Flex';
import { Icon, IconProps } from '../../../../../Icon';
import { IPanelContainerAttrs } from '../../../../declarations';

export interface PanelHeaderIconProps
  extends Omit<IconProps, 'iconId' | 'size'>,
    Pick<IPanelContainerAttrs, 'size'> {
  icon: React.ReactNode;
}

export const PanelHeaderIcon: React.FC<PanelHeaderIconProps> = ({
  icon,
  size = 'md',
  style,
  ...restIconProps
}) => {
  const iconTokens = useTheme().cmp.panel.headerIcon;
  return (
    <Flex
      alignSelf="flex-start"
      alignItems="center"
      justifyContent="center"
      inline
      style={{
        marginRight: iconTokens.space.marginRight[size],
        ...style,
      }}
      flex="0 0 auto"
      height={iconTokens.size.height[size]}
    >
      <Icon
        {...restIconProps}
        color={iconTokens.color.text}
        size={iconTokens.typo.fontSize[size]}
      >
        {icon}
      </Icon>
    </Flex>
  );
};
